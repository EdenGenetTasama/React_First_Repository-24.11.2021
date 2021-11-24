import React from "react";
import "./App.css";
// import Media from "./Components/Media";
// import Cars from "./Components/Car";
// import NameAndAge from "./Components/NameAndAge";
import Employee from "./Employee";
import Food from "./Food";
import PeopleVisit from "./PeopleVisit";

class App extends React.Component {
  render() {
    return (
      <div className="divHoldDive">
        {/* <Cars
          link="https://player.vimeo.com/external/521707474.hd.mp4?s=98c57d8ee2f46544e481fb54aa2b1ee767fbd97d&profile_id=174"
          // ! img="data:image/jpeg;base64,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"
        />
        
        <NameAndAge name="Eden" age="25"/> */}

        {/* <Employee
          img="https://clipart-best.com/img/chef/chef-clip-art-186.png"
          name="Moshe baba"
          part="main Chef"
        />
        <Employee
          img="https://vistapointe.net/images/chef-4.jpg"
          name="Moshe baba"
          part="main Chef"
        />
        <Employee
          img="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Moshe baba"
          part="main Chef"
        />
        <Employee
          img="https://vistapointe.net/images/chef-4.jpg"
          name="Moshe baba"
          part="main Chef"
        /> */}

        {/* <Food
          header="Pizza"
          paragraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          img="https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86"
        />
        <Food
          header="Pasta"
          paragraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          img="https://www.condeli.at/wp-content/uploads/2020/05/carbonara.png"
        />
        <Food
          header="Hamburger"
          paragraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          img="https://www.pngall.com/wp-content/uploads/5/Hamburger-PNG-Free-Image.png"
        /> */}


        <PeopleVisit peopleImg="https://img.mako.co.il/2016/11/17/erez6_i.jpg" namePeople="" info=""/>
        <PeopleVisit peopleImg="https://images1.ynet.co.il/picserver5/crop_images/2021/05/27/S1W5Vs3ht00/S1W5Vs3ht00_742_139_1471_1471_0_large.jpg" namePeople="" info=""/>
        <PeopleVisit peopleImg="https://img.lifehackk.com/images/chat/381/Is-It-Normal-To-Talk-To-Random-People-Online_2.jpg" namePeople="" info=""/>

      </div>
    );
  }
}

export default App;
