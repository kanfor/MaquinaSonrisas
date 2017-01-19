set targetdir=D:\UwAmp\www\AlimentaSonrisas\public\promo-static\el_super
set targetdirassets=D:\wamp\www\ElSuper\assets
set targetdirjs=D:\wamp\www\ElSuper\js
set targetdirsrc=D:\wamp\www\ElSuper\src


del /q %targetdir%\*
for /d %%x in (%targetdir%\*) do @rd /s /q ^"%%x^"

xcopy /is %targetdirassets%\* %targetdir%\assets
xcopy /iqy %targetdirjs% %targetdir%\js
xcopy /iqy %targetdirsrc% %targetdir%\src