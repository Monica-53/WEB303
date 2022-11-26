function sort_fname()
{
 var table=$('#mytable');
 var tbody =$('#table1');

 tbody.find('tr').sort(function(a, b) 
 {
  if($('#fname_order').val()=='asc') 
  {
   return $('td:first', a).text().localeCompare($('td:first', b).text());
  }
  else 
  {
   return $('td:first', b).text().localeCompare($('td:first', a).text());
  }
		
 }).appendTo(tbody);
	
 var sort_order=$('#fname_order').val();
 if(sort_order=="asc")
 {
  document.getElementById("fname_order").value="desc";
 }
 if(sort_order=="desc")
 {
  document.getElementById("fname_order").value="asc";
 }
}


function sort_lname()
{
 var table=$('#mytable');
 var tbody =$('#table1');

 tbody.find('tr').sort(function(a, b) 
 {
  if($('#lname_order').val()=='asc') 
  {
   return $('td:first', a).text().localeCompare($('td:first', b).text());
  }
  else 
  {
   return $('td:first', b).text().localeCompare($('td:first', a).text());
  }
		
 }).appendTo(tbody);
	
 var sort_order=$('#lname_order').val();
 if(sort_order=="asc")
 {
  document.getElementById("lname_order").value="desc";
 }
 if(sort_order=="desc")
 {
  document.getElementById("lname_order").value="asc";
 }
}

function sort_dofbirth() 
{
 var table=$('#mytable');
 var tbody =$('#table1');

 tbody.find('tr').sort(function(a, b) 
 {
  if($('#dofbirth_order').val()=='asc') 
  {
   return $('td:last', a).text().localeCompare($('td:last', b).text());
  }
  else 
  {
   return $('td:last', b).text().localeCompare($('td:last', a).text());
  }
		
 }).appendTo(tbody);
	
 var sort_order=$('#dofbirth_order').val();
 if(sort_order=="asc")
 {
  document.getElementById("dofbirth_order").value="desc";
 }
 if(sort_order=="desc")
 {
  document.getElementById("dofbirth_order").value="asc";
 }


 $tbody.empty();
 cache.forEach((character) => {
     const $row = $(`<tr>
         <td>${FirstName}</td>
         <td>${character.LastName}</td>
         <td>${character.Profession}</td>
         <td>${character.Personality}</td>
         <td>${character.BestEpisodes}</td>
         <td><img style="width: 100px" src="img/${character.Photo}"/></td>
     </tr>`);
     if (character.FirstName.toLowerCase().includes(searchingKeyWords)) {
         $row.css({ background: 'darkgreen', color: 'white' })
     }
     $tbody.append($row)
 })
}





