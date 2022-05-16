
for(var i=0; i<teamRecords.length; i++){
    // console.log(teamRecords[i].length)
     for(var j=0; j<teamRecords.length; j++){
         if(teamRecords[i].id != teamRecords[j].id){
             console.log('{ "home": ' + teamRecords[i].id + ', "away": ' +teamRecords[j].id + '},');
         }
     }
 }