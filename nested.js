// var users=[
//     {
//       user_id: 1,
//       name: "Chris Rivers",
//       mention_name: "chris",
//       email: "chris@hipchat.com",
//       title: "Developer",
//       photo_url: "https:\/\/www.hipchat.com\/chris.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "away",
//       status_message: "gym, bbl",
//       is_group_admin :1,
//       is_deleted :0
//     },
//     {
//       user_id: 3,
//       name: "Peter Curley",
//       mention_name: "pete",
//       email: "pete@hipchat.com",
//       title: "Designer",
//       photo_url: "https:\/\/www.hipchat.com\/pete.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "offline",
//       status_message: "",
//       is_group_admin: 1,
//       is_deleted: 0
//     },
//     {
//       user_id: 5,
//       name: "Garret Heaton",
//       mention_name: "garret",
//       email: "garret@hipchat.com",
//       title: "Co-founder",
//       photo_url: "https:\/\/www.hipchat.com\/garret.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "available",
//       status_message: "Come see what I'm working on!",
//       is_group_admin: 1,
//       is_deleted: 0
//     }
//   ];
// for (let i=0; i<users.length; i++){
//   if (users[i].user_id===1){
//     console.log(users[i].email);
//   }
//   if (users[i].user_id===5){
//     console.log(users[i].title);
//   }
//   if(i===0){
//     console.log(users[i].user_id);
//   }
// }
//
// var graphObject = {
//   version:1,
//   graph:{
//     viewport:{
//       xmin:-10,
//       ymin:-3.367158671586716,
//       xmax:10,
//       ymax:3.367158671586716
//     }
//   },
//   expressions:{
//     list:[
//       {
//         id:"1",
//         type:"expression",
//         latex:"y=x",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#C0504D",
//         style:"normal"
//       }, {
//         id:"2",
//         type:"expression",
//         latex:"y=2x",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#4F81BD",
//         style:"normal"
//       }, {
//         id:"4",
//         type:"text",
//         text:"Access me!"
//       }, {
//         id:"5",
//         type:"expression",
//         latex:"",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#8064A2",
//         style:"normal"
//       }
//     ]
//   }
// };
// console.log(graphObject.expressions.list[2].text);
//
//
//
//
//
//
//
//
var superheroes=[];
superheroes[0]={};
superheroes[0].name='Spider-man';
superheroes[0].alterego= {
  firstname:'Peter',
  lastname:'Parker'
};
superheroes[0].age=15;
superheroes[0].address={
  country: 'USA',
  city: 'New York'
};
superheroes[0].favoritecolors=['red', 'black'];

superheroes[1]={};
superheroes[1].name='Batman';
superheroes[1].alterego= {
  firstname:'Bruce',
  lastname:'Wayne'
};
superheroes[1].age=32;
superheroes[1].address={
  country: 'USA',
  city: 'Gotham'
};
superheroes[1].favoritecolors=['black', 'yellow'];

superheroes[2]={};
superheroes[2].name='Iron Man';
superheroes[2].alterego= {
  firstname:'Tony',
  lastname:'Stark'
};
superheroes[2].age=30;
superheroes[2].address={
  country: 'USA',
  city: 'New York'
};
superheroes[2].favoritecolors=['red', 'yellow'];
console.log(superheroes);
