var n = prompt("Enter the number of rows", "1");
var m = prompt("Enter the number of columns", "1");

var matrix = [];

var str;
var leng = 0;
for(i = 0; i < n; i++)
{
	matrix[i] = [];
	str = prompt("Enter cell velues for the " + i + "th row", "");

	for(j = 0; j < str.length; j++) {

		if(!isNaN(parseFloat(str[j])) && (+str[j] == 0 || +str[j] == 1)) { 
			matrix[i].push(+str[j]);
			leng++;
			if(leng == m) break;
		}
		else continue;
	}

	if(leng < m) {
		for(j = 0; j < m - leng; j++)
			matrix[i].push(0);
	}

	leng = 0;
}


alert(longestSequenceOfOnes(matrix));

function longestSequenceOfOnes(matrix){

	var maxInterim = 0;
	var max = 0;

	for(i = 0; i < matrix.length; i++)
	{
		for(j = 0; j < matrix[0].length; j++)
		{
			(matrix[i][j] == 1) ? maxInterim ++

			: maxInterim = 0;

			if (maxInterim > max) {

				max = maxInterim;
			}

			if(i == 0) {

				var maxInterim2 = 0;

				for(k = 0; k < matrix.length; k++) {

					(matrix[k][j] == 1) ? maxInterim2 ++

					: maxInterim2 = 0;

					if (maxInterim2 > max) {

						max = maxInterim2;
					}

				}
			}
		}

		maxInterim = 0;
	}

	return max;
	
}
