<?php
	$str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
	if(preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)){
		$imgurl = 'http://cn.bing.com'.$matches[1];
	}
	if($imgurl){
		$img = imagecreatefromjpeg($imgurl);
		header('Expires: ' . gmdate('D, d M Y H:i:s', strtotime(date('Y-m-d', strtotime('+1 day')))) . ' GMT'); 
		header('Cache-Control: public, max-age=3600');
		header('Last-Modified: ' . gmdate('D, d M Y H:i:s', strtotime(date('Y-m-d'))) . ' GMT'); 
		header('Content-Type: image/jpeg');
		imageinterlace($img, 1);
		imagejpeg($img);
		imagedestroy($img);
		exit();
	}else{
		exit('error');
	}
?>