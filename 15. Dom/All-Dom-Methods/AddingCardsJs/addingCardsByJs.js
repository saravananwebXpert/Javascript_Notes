let TripData = [
    {
      img: "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=480",
      title: "Gokarna",
      discription: "393 kilometers away",
      color: "#DE3151",
    },
    {
      img: "https://a0.muscache.com/im/pictures/9fb3e0bc-29ad-41cf-823d-30e2ff583753.jpg?im_w=480",
      title: "Madikeri",
      discription: "209 kilometers away",
      color: "#D93B30",
    },
    {
      img: "https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=480",
      title: "Chikmagalur",
      discription: "199 kilometers away",
      color: "#CC2D4A",
    },
    {
      img: "https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=480",
      title: "Ooty",
      discription: "199 kilometers away",
      color: "#BC1A6E",
    },
  ];
  
  let tripContent = document.getElementById("tripBlock");
  let output = [];
  TripData.forEach((trip, index) => {
    output += `<div class="tripContainer" style="background:${trip.color}" >
                    <figure>
                            <img  src=${trip.img} alt=${trip.title}/>
                    </figure>

                    <h1>${trip.title}</h1>
                    <P>${trip.discription}</P>
              </div>`;
            });
  tripContent.innerHTML = output;
  tripContent.style.display="flex";
