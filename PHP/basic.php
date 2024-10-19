<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Php Start</title>
</head>
<body>
	<!--Php Starting tag-->
	<?php
		// This is a single-line php comment
		# This is also a single-line php comment
		/* This is a
		multi-line php comment */

		# php is not case sensitive.

		echo "Hello World<br>"; # method of getting output.
		ECHO "Hello World<br>"; # example of not case sensitive.
		echo ("Hello World<br>"); # another method of echo.
		print "Hello World<br>"; # print are same as echo.
		print("Hello World<br>"); # another method of print.

		/* Escape characters in php
			\' for Single Quote
			\" for Double Quote
			\$ for PHP variables
			\n for New Line
			\t for Tab
		*/

		echo "This is a \n new line";

		# php variables are case sensitive.

		/* Variable
		$ Variable_Name = Value;
		*/

		$food = "Pizza"; # php variable example.
		$Food = "Burger"; # php case sensitive variable example.
		echo "I love to eat ".$food."<br>"; # A method for getting output of different types of data.
		echo "I love to eat $Food<br>"; # Another method for getting output of different types of data.

		$x = $y = $z = "Fruit"; # common value for multiple variable.

		/* php data types
		String
		Integer
		Float (floating point numbers - also called double)
		Boolean
		Array
		Object
		NULL
		Resource
		*/

		$string = "apple";  # This is string type variable.
		$int = 12;  # This is integer type variable.
		$float = 12.5;  # This is float type variable.
		$bool = true;  # This is boolean type variable.
		$array = array(12, 13, 14);	 # This is array type variable.
		$null = null;  # This is null type variable.

		# Type casting

		$number = "12";
		$number = (int) $number;

		# String operation

		echo strlen("I love php"); # Calculate the length of string.
		echo str_word_count("I love php"); # Count the word of a string.
		echo strrev("I love php"); # Reverse a string.
		echo strpos("I love php", "l"); # Calculate the position of a string.
		echo str_replace("love", "hate", "I love php"); # Replace a string with other.
		echo "<br>"; # This is for line brake.

		# Math operation

		echo pi();  # For the value of pi.
		echo min(12, 14, 45); # For find the minimum number.
		echo max(12, 14, 45); # For find the maximum number.
		echo abs(-32); # For find the absolute number.
		echo sqrt(23); # For Squire Root.
		echo round(23.4); # Convert Float to integer.
		echo rand(); # For random number.
		echo rand(1, 6); # Random number with limitation.

		# php constant

		define('c', 12);
		echo(c);

		/*Note:
		Constants are global and normal variables are local.
		*/

		# Mathematical operators

		$p = 10;
		$q = 12;
		$r = $p + $q; # This is for Addition.
		$r = $p - $q; # This is for Subtraction.
		$r = $p * $q; # This is for Multiplication.
		$r = $p / $q; # This is for Division.
		$r = $p % $q; # This is for Modulus.
		$r = $p ** $q; # This is for Exponentiation.

		/* Logical Operators
			&&	And
			||	Or
			!	Not
		*/

		# Conditional statement in php

		$m = 42;
		$n = 54;
		$o = 32;
		# if statement
		if ($m>$n && $m>$o) { 
			echo "$m is largest";
		}
		# ele if statement
		elseif ($n>$m && $n>$o) {
			echo "$n is largest";
		}
		# else statement
		else {
			echo "$o is largest";
		}

		# Switch statement in php

		$fruit = "apple";
		switch ($fruit) {
			case 'apple':
				echo "apple is green";
				break;
			case 'mango':
				echo "mango is yellow";
				break;			
			default:
				echo "I love fruit";
				break;
		}

		# Array in php

		$array1 = array(10, 20, 30); # Define an array.
		echo $array1[0];

		$array2 = array(23, 30, 40); # Print array using foreach loop method 1.
		foreach ($array2 as $value) {
			echo "$value <br>";
		}
		$array3 = array("a"=>2, "b"=>5, "c"=>10); # Print array using foreach loop method 2.
		foreach ($array2 as $key=>$value) {
			echo "$key $value <br>";
		}

		$array4 = array( # Multi dimensional array.
			array(12, 13, 14),
			array(15, 16, 17)
		);
		echo $array4[1][2];

		$array5 = array(23, 30, 40);
		echo count($array5); # Length of array.
		echo sort($array5); # Sort an array.
		echo rsort($array5); # Resort an array.

		# Loop in php

		# While loop
		$i = 0;
		while ($i <= 10) {
			echo "The number is $i <br>";
			$i++;
		}

		# Do while loop
		do {
			echo "The number is $i <br>";
			$i++;
		} while ($i <= 10);

		# For loop
		for ($i=0; $i <= 10; $i++) { 
			echo "The number is $i <br>";
		}

		# Foreach loop
		$colors = array("red", "green", "blue", "yellow");
		foreach ($colors as $v) {
		echo "$v <br>";
		}

		# Function in php

		function name($number){
			echo "The number is $number";
		}
		name(12);

		# Date time in php
		date_default_timezone_set("Asia/Dhaka");
		echo "Today is ". date("d/m/y"). "and current time is ". date("h:i:sa");

	?>
	<!--Php Ending tag-->
</body>
</html>