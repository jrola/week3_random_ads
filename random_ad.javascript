// updated with some real text
  	// "hungry - Eat at joes <img src='image.png' />"
		var ad_metadata = {
			'ad0' : "Come into the store and buy products",
			'ad1' : "If you like drinking come into this bar",				/* created text greater than 15 letters*/
			'ad2' : "if you want to fix you computer call mustard tiger",
			'ad3' : "dont go to the beach your crazy fool",
			'ad4' : "i dont know what else to type here"		
		};
		
				
		rand_ad_display();
		
		function rand_ad_display() {
		
			var ad_div = document.getElementById("ad");			
			var ad_keys = [];		
			var ad_key = "";
			
			/*
				ad_keys[0] = 'ad0';
				ad_keys[1] = 'ad1';		can use this for another
				ad_keys[2] = 'ad2';
				ad_keys[3] = 'ad3';
				ad_keys[4] = 'ad4';
			*/
			for ( ad_key in ad_metadata ) {
				ad_keys.push(ad_key);
			}
			
			var ad_keys_len = ad_keys.length;			
			var rand_ad_key = getRandAdKey(ad_keys_len);
			var ad_key_value = ad_keys[rand_ad_key];		
			var ad_metadata_value = ad_metadata[ad_key_value];		
		
			ad_div.innerHTML = ad_metadata_value;				
			document.title =(ad_metadata_value.substr(0,15));		/* takes the metadata and cuts it after 15 letters*/
				
		}
		
		
		function getRandAdKey( len ) {
			// gets random number, 0 to len(passed in)
			return Math.floor( Math.random()* len);		
		}
		
		
