<?php
echo '
<!DOCTYPE html>
<html>
	<head>
		<title>Day 2</title>
		
		<link rel="stylesheet" type="text/css" href="../styles/common.css"> 
		<script type="text/javascript" src ="../js/common.js"> </script>
		<script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
		<!--Mobile-->
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />
		<script type="text/javascript" src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>		
		<!-- ---- -->
		
	</head>
	<body>

	
			<div data-role="page" id="main"> 
				<div data-role="header">
						<h1 style="margin: 0 auto; width:162px;"><div style="text-align: center; padding: 10px;">sample1.php</div></h1>
				</div><!-- /header -->
				<div data-role="content">	
						
						<div class=\'ui-bar\' style="text-align: center">
								ARE YOU SURE???
								<a href="../index.html#page3" data-role="button" data-transition="fade">No!</a><br/>
						</div> <!-- Bar -->				
						
						
				</div><!-- /content -->
			</div><!-- /page -->
		
	</body>
</html>
';