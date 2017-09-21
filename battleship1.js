var battleship = {
	createBoard: function(x, y){
		var createTable = document.getElementById("table");
		for (var i = 0; i < x; i++) {
		    var row = document.createElement('tr');
		    row.setAttribute("row", i);
		    row.setAttribute("class", "row");
		    for (var j = 0; j < y; j++) {
		       	var cell = document.createElement('td');
		       	row.appendChild(cell);
		       	cell.setAttribute("onclick", "battleship.play(this)");
		       	cell.setAttribute("cell", j);
		       	cell.setAttribute("class", "cell");
		    };
			createTable.appendChild(row);
		};
		document.body.appendChild(table);
    },
    board: [],

    shipArr: [],

    // moveState: function(x, y){
    // 	for(var i = 0; i < x; i++){
    // 		var arr = [];
    // 		this.board.push(arr);
    // 		for(k = 0; k < y; k++){
    // 			this.board[i].push(null);
    // 		}
    // 	}

    // },
    play: function(box) {
		var row = box.parentElement.getAttribute('row');
		var cell = box.getAttribute('cell');
		//if(this.board[row][cell] == null) {	
			if(this.shipArr[row][cell] === "ship"){
				//this.board[row][cell] === "ship";
				this.hit++;
				alert("you hit the ship!");
			}
			else{alert("you missed")
				this.miss++;
			}
		//} //else { alert('cant go there');
		  //}
		
		box.innerHTML = this.shipArr[row][cell];
		this.hitMiss();
		this.gameOver();
	},


	clickThis: function() {	
	var row = document.getElementById("row").value;
	window.row = row;
	window.cell = row;
	},
	
	clicky: function(){
		this.createBoard(row, cell);
		//this.moveState(row, cell);
		this.shipBoard(row, cell);
	},

	shipBoard: function(row, cell){
    	for(var i = 0; i < row; i++){
    		var arr = [];
    		this.shipArr.push(arr);
    		for(k = 0; k < cell; k++){
    			if(Math.random() < 0.3){
    			this.shipArr[i].push("ship");
    			this.ship++
    			}
    			else{this.shipArr[i].push(null)
    			}
    		}
    	}

	},
	hit: 0,
	miss: 0,
	ship: 0,

	gameOver: function(){
		var result;
		if(this.ship == this.hit){
			result = document.getElementById("gameover").innerHTML = 'all ships are destroyed';
		}
		return result;
	},

	hitMiss: function(){
		var result;
		result = this.hit/this.miss;
		document.getElementById('ratio').innerHTML = result.toFixed(2);
		return result;
	}

};