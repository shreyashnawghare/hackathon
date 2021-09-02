
  var final = document.createElement('div');
final.setAttribute('class','container-fluid');

var box = document.createElement('div');
box.setAttribute('class','box');











 
 async function getdata(){
    var data = await fetch("https://cataas.com/api/cats");
    var datares = await data.json();
    

    // for(let i=0;i<15;i++){
    //     var res = datares[i].brand+" "+datares[i].name+" "+datares[i].price+" "+datares[i].api_featured_image+" "+datares[i].product_link+" "+datares[i].description ;
    //     console.log(res)
    // }

    for(let i=0;i<datares.length;i++){

  

 var brand = document.createElement('h3');
 brand.setAttribute('class','cname');
 brand.innerHTML='id :'+' '+datares[i].id;

 var name1 = document.createElement('h3');
 name1.setAttribute('class','cname1');
 name1.innerHTML='created_at :'+' '+datares[i].created_at;

 var price = document.createElement('h3');
 price.setAttribute('class','cname2');
 price.innerHTML='tags :'+' '+datares[i].tags;












 

 box.append(brand,name1,price);
  
 final.append(box);
 document.body.append(final);

    }

}
getdata();


function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}






 
  var users = [
    'cute',
    'sleepy',
    'fat',
    'lazy',
    'tinny',
    'kitten',
    'black',
    'white'
  ];
  
  ul = document.getElementById("users-list");
  
  var render_lists = function(lists){
    var li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  render_lists(users);
  
  // lets filters it
  input = document.getElementById('filter_users');
  
  var filterUsers = function(event){
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_users);
  }
  
  input.addEventListener('keyup', filterUsers);
  
  




