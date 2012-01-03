<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 6";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <link href="styles/common.css" rel="stylesheet" />
		<script data-main="js/main" src="js/require.js"></script>
        
        <!-- jQuery -->
		<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
        <!-- include jquery toolkit here -->
        
        <!-- default javascript content -->
				
        <!-- include your default js file here -->
		<script type="text/javascript" src="js/common.js"></script>
    </head>
    <body>
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>

        <!-- add your content here -->
        <h3>-- Do you have The Matrix in VHS? :O --</h3>
        
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
    </body>
</html>