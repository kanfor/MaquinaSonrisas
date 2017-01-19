<?php

namespace App\Libraries\Promotions;

use App\Exceptions\IntegrationLayerException;
use \Illuminate\Http\Request;
use App\Utils\Common;
use Session;
use Cache;
use Response;

class Actions_el_super extends ActionsPromotionsController {
    public $sendMail = true;
    public $sendCoupon = false;
    public $literalCoupon = [];

	/**
     * @param $promoInfo
     */
    public function __construct($promoInfo) {
        parent::__construct($promoInfo);
		//Solo base de datos. Por eso se comenta.
        //self::$busi = BusinessDelegateFactory::getInstance();
    }
	
    public function process(Request $request) {
		$response = [];
		$request = $request->all();
        if(!isset($request['phase'])){
            return 'phase required';
        }

        try {
            switch($request['phase']){
                case -1:
					//Nombre de usuario, puntos, etc.
					$response['data'] = $this->consumerInfo;
					$response['nombre'] = $this->consumerInfo['attributes']['nombre'];
					
					//Quitar puntos.
					$responseRedeemPointsODR = $this->consumerRedeemPoints($this->promoInfo['literalODR'], 1);
					
					//Obtener los puntos que ahora tenemos después de la redención.
					$response['points'] = isset($responseRedeemPointsODR['pointsAvailable']) ? $responseRedeemPointsODR['pointsAvailable'] : null;
					
					//Refrescar puntos pasando los puntos que ahora tenemos tras la redención.
                    if (!is_null($response['points'])) {
                        $this->consumerInfo['pointsAvailable'] = $response['points'];
                        Session::set('consumerInfo', $this->consumerInfo);
                    }
					
					$play = false;
                    break;
                case 1:
                    $play = true;
                    break;
            }
            if($play == true){
                // ### BEGIN: play moments ###
                $directParticipation = $this->instantWinDirectParticipation($this->promoInfo['instantWins'][0]['id']);
                if (isset($directParticipation['instantWin']['instantWinStatus'])){
                    $response['status'] = isset($directParticipation['status'])? $directParticipation['status'] : null;
                    $response['instantWinStatus'] = isset($directParticipation['instantWin']['instantWinStatus'])? $directParticipation['instantWin']['instantWinStatus'] : null;
                    $response['instantWinDate'] = isset($directParticipation['instantWin']['instantWinDate'])? $directParticipation['instantWin']['instantWinDate'] : null;
                    $response['instantWinMessage'] = isset($directParticipation['instantWin']['instantWinMessage'])? $directParticipation['instantWin']['instantWinMessage'] : null;
                    $response['instantWinId'] = isset($directParticipation['instantWin']['instantWinId'])? $directParticipation['instantWin']['instantWinId'] : null;
                    $response['instantWinAuth'] = isset($directParticipation['instantWin']['instantWinAuth'])? $directParticipation['instantWin']['instantWinAuth'] : null;
					if (!isset($this->promoInfo['literalODR'])) {
                        $consumerBalance = $this->consumerBalance();
                        $this->consumerInfo['pointsAvailable'] = $consumerBalance['pointsAvailable'];
                        //Session::set('consumerInfo', $this->consumerInfo);
                    }
					
                    switch($directParticipation['instantWin']['instantWinStatus']){
                        case 'win':
							$moment = $this->promoInfo['instantWins'][0];
							$this->sendWinnerMail(array(), 'momento_2909_gas_super_cheque100');
							$response['instantWinType'] = $moment['type'];
							$response['instantWinMomentId'] = $moment['id'];
                            /*$response['award'] = $moment['award'];
                            $response['instantWinType'] = $moment['type'];
                            $response['instantWinMomentId'] = $moment['id'];
                            if (isset($this->sendMail) && $this->sendMail) {
								$response = $this->sendWinnerMail($response, $moment['id']);
                            }*/
                            break;
						case 'repeatedWinner':
                        case 'lose': //<--- NO PRIZE, but you can continue playing
						default:
							
                            break;
                    }
                } else {
                    if (isset($e)) throw new IntegrationLayerException($e['restCode'], $e['restMessage']);
                    else if(isset($directParticipation)) throw new IntegrationLayerException($directParticipation['code'], $directParticipation['message']);
                }
            }
            // ### END: play moments ###
        } catch (IntegrationLayerException $e) {
            // CONTROL EXCEPTIONS
            switch ($e->getCode()) {
                case 'ILSCO0634':// NO POINTS
                    $response['status'] = "ko";
                    $response['instantWinStatus'] = 'notPoints';
                    //$response['title'] = t('promos/tiro_arco.popup_enough_title');
                    //$response['message'] = t('promos/tiro_arco.popup_enough_body');
                    $response['nombre'] = $this->consumerInfo['attributes']['nombre'];
					$response['points'] = $this->consumerBalance();
                    break;
                default:// Other Errors
                    $response['status'] = 'ko';
                    $response['code'] = $e->getCode();
                    $response['message'] = $e->getMessage();
                    break;
            }
        }
        return $response;
    }

    /**
     * @method process
     * @description logica de la carga promo
     * @param /Illuminate\Http\Request $request
     * @return array
     */
    public function preprocess(Request $request) {
        // TODO: Implement preprocess() method.
    }
	
	public function checkInstantWinWinnerAcceptation(Request $request){

		$response = $this->instantWinWinnerAcceptation($request->input('instantWinMomentId'), $request->input('instantWinDate'), TRUE, $request->input('instantWinType'));
		
		return $response;
	}
	
	public function checkpointsWildCardConsumerCreate(Request $request){

		$response = $this->pointsWildCardConsumerCreate($request->input('literalPointsWildcard'), 15);

		return $response;
	}
	
	public function popupadvert(Request $request){
		$response['nombre'] = $this->consumerInfo['attributes']['nombre'];
		//$response['title'] = t('promos/tiro_arco.popup_lose_title');
		$response['title'] = str_replace('[Nombre]', $this->consumerInfo['attributes']['nombre'], $response['title']);
		//$response['body'] = t('promos/tiro_arco.popup_lose_body');
		$response['body'] = str_replace('[Nombre]', $this->consumerInfo['attributes']['nombre'], $response['body']);
		//$response['button1'] = t('promos/tiro_arco.popup_lose_bot1');
		//$response['button2'] = t('promos/tiro_arco.popup_lose_bot2');
		//Texts of advert popup before exit game.
		//$response['title_adevert'] = t('promos/tiro_arco.popup_confirm_title');
		//$response['body_adevert'] = t('promos/tiro_arco.popup_confirm_body');
		//$response['button1_advert'] = t('promos/tiro_arco.popup_confirm_bot1');
		//$response['button2_advert'] = t('promos/tiro_arco.popup_confirm_bot2');
		
		return $response;
	}
	
	public function init(Request $request){
		$response['points'] = $this->consumerBalance();
		$response['lang'] = Common::getZone();
		$response['name'] = $this->consumerInfo['attributes']['nombre'];

		return $response;
	}
	
	public function addPincode(Request $request){
		$pincode = $request->input('pincode');
		
		$response = $this->pincodeAssign($pincode);

		if(isset($response['status']) && $response['status'] == 'ok'){
			
			$response['response'] = $response['status'];
			$points = $response['pointsTotalConsumer'];
			$intPoints = str_replace('.', '', $points);
			$response['test2'] = $intPoints;
			if ((int)$intPoints >= 5)
			{
				//$response['title'] = t('promos/tiro_arco.peine_ok_title');
				//$response['body1'] = t('promos/tiro_arco.peine_ok_body1');
				//$response['body2'] = t('promos/tiro_arco.peine_ok_body2');
				//$response['button'] = t('promos/tiro_arco.peine_ok_bot1');
				//$response['button2'] = t('promos/tiro_arco.peine_ok_bot2');
				$response['enoughpoints'] = "true";
			}
			else
			{
				//$response['title1'] = t('promos/tiro_arco.peine_ok_notenough_title1');
				//$response['title2'] = t('promos/tiro_arco.peine_ok_notenough_title2');
				//$response['body'] = t('promos/tiro_arco.peine_ok_notenough_body');
				//$response['button'] = t('promos/tiro_arco.peine_ok_notenough_bot1');
				$response['enoughpoints'] = "false";
			}
			
		}else{
			$response['response'] = $response['code'];
			$code = $response['code'];
			switch($code) {
				case 'ILPI20020':
					//$response['title'] = t('promos/tiro_arco.peine_error_title');
					//$response['body'] = t('promos/tiro_arco.peine_error_body');
					//$response['button'] = t('promos/tiro_arco.peine_error_bot1');
					//$response['button2'] = t('promos/tiro_arco.peine_error_bot2');
					break;
				case 'ILPI40022':
					//$response['title'] = t('promos/tiro_arco.peine_codeused_title');
					//$response['body'] = t('promos/tiro_arco.peine_codeused_body');
					//$response['button'] = t('promos/tiro_arco.peine_codeused_bot1');
					break;
				case 'ILPI40061':
					//$response['title'] = t('promos/tiro_arco.peine_month_title');
					//$response['body'] = t('promos/tiro_arco.peine_month_body');
					//$response['button'] = t('promos/tiro_arco.peine_month_bot1');
					break;
			}
		}
		return $response;
	}
}