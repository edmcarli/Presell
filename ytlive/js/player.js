function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var t=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);t&&t.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,t,a;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=document,t=e.getElementById(`scr_${vTurbSrcId}`),(a=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.parentElement.insertBefore(a,t)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`scr_${vTurbSrcId}`),(a=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,a.style.position="relative",a.style.width="100%",a.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,t.parentElement.insertBefore(a,t)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`vid_${vTurbPlayer.id}`),(a=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.position="absolute",a.style.objectFit="cover",a.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,t.appendChild(a)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,t,a){t=e.getElementById(`vid_${vTurbPlayer.id}`),(a=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.position="absolute",a.style.backdropFilter="blur(5px)",a.style.webkitBackdropFilter="blur(5px)",t.appendChild(a)}(document))}function vTurbLoadSmrtvds(){var e,t,a,r;e=window,t=document,e.smrtvds||(a=e.smrtvds=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},e._smrtvds||(e._smrtvds=a),a.push=a,a.loaded=!0,a.version="1.1",a.queue=[],(r=t.createElement("script")).async=!0,r.src=`https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,t.getElementsByTagName("head")[0].appendChild(r)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"641a178c4c45d90008fba39c","org_id":"60ab1fa6-578e-480b-87e8-9a54de116ac5","name":"YT Dennis_lead 2_reduzida_P\xe1g Youtube","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"60ab1fa6-578e-480b-87e8-9a54de116ac5/players/641a178c4c45d90008fba39c/thumbnail.jpg","cover_key":"60ab1fa6-578e-480b-87e8-9a54de116ac5/players/641a178c4c45d90008fba39c/cover.jpg","version":"v1","video_id":"64113a4e25bb810009cadb42","options":{"autoplay":"smartplay","subtitle_active":!1,"smart_autoplay_template":"image","theme":"#15A27F","foreground_color":"#FFFFFF","video":{"width":1280,"height":720},"cdn":"cdn.converteai.net","displays":{"big_play":!0,"play_pause":!1,"backward":!1,"subtitle_control":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[],"pixels":[{"id":"pixel_641a178c4c45d90008fba39c_0","type":"facebook","pixel_id":"745307736972072","pixel_value":"Pitch_Lead2","dispatch":!0,"dispatch_in":1025,"dispatch_type":"time"},{"id":"pixel_641a178c4c45d90008fba39c_1","type":"facebook","pixel_id":"986889208942517","pixel_value":"Pitch_Lead2","dispatch":!0,"dispatch_in":1025,"dispatch_type":"time"}],"thumbs":[{"id":"thumb_641a178c4c45d90008fba39c_0","image":"https://cdn.converteai.net/60ab1fa6-578e-480b-87e8-9a54de116ac5/2023/03/15/64113f6930fe40000930c38e.jpg","start":1101,"finish":1302,"has_button":!0,"button_name":"QUERO ACESSO AO TAREFA PIX","button_size":"md","button_position":"bc","button_url":"https://go.perfectpay.com.br/PPU38CLOPHJ?src=BotaoVSL","button_background_color":"#FF1818","button_background_hover_color":"#FF1818","button_text_color":"#FFFFFF"},{"id":"thumb_641a178c4c45d90008fba39c_1","image":"https://cdn.converteai.net/60ab1fa6-578e-480b-87e8-9a54de116ac5/2023/03/15/64113f3830fe40000930c38d.jpg","start":0,"finish":1100,"has_button":!1,"button_name":"Nome do bot\xe3o","button_size":"sm","button_position":"bc","button_url":"","button_background_color":"#1890FF","button_background_hover_color":"#1890FF","button_text_color":"#FFFFFF"}],"headlines":[{"id":"headline_641a178c4c45d90008fba39c_1","active":!1,"name":"head1Tarefa","number":1,"url_desktop":"https://cdn.converteai.net/60ab1fa6-578e-480b-87e8-9a54de116ac5/2023/03/15/64113ef830fe40000930c38c.webp","url_mobile":"https://cdn.converteai.net/60ab1fa6-578e-480b-87e8-9a54de116ac5/2023/03/15/64113ef830fe40000930c38c.webp","weight":.01,"is_responsive":!1}],"turbos":[],"smart_autoplay_elements":[{"id":"smart_autoplay_element_641a178c4c45d90008fba39c_0","height":328.5422137295475,"width":437.40246962202417,"x":421.3333333333333,"y":196,"order":1,"opacity":.8,"rotation":0,"type":"image","properties":{"alt":"Smart AutoPlay","src":"https://cdn.converteai.net/60ab1fa6-578e-480b-87e8-9a54de116ac5/2023/03/14/640ff07ac41c4200080f57af.gif"}}],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!0,"fake_bar":!0,"headline":!0,"turbo":!1,"turbo_speed":1,"turbo_auto_test":!1,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(61,133,198,0.56)","start_at":0,"end_at":1302,"animation":null,"custom_preview":null},"resume_options":{"play":"Continuar assistindo?","title":"Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo","replay":"Assistir do in\xedcio?","disable_pause":!1,"foreground_color":"#FFFFFF","background_color":"rgba(21,162,127,0.8)"},"fake_bar_options":{"height":8,"alpha":3,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbSrcId="641a178c4c45d90008fba39c",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();