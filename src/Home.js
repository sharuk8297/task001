import React from "react";
import "./Home.css";
import Profile from "./Profile";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        

        <div className="home__row">
          <Profile
            id="1"
            name="Leanne Graham"
            email="Sincere@april.biz"
            phone="1-770-736-8031 "
            language="http://hildegard.org"
            image="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
          />
          <Profile
            id="2"
            name="Ervin Howell"
            email="Sincere@april.biz"
            phone="1-770-736-8031 "
            language="http://hildegard.org"
            image="https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy"
          />
          <Profile
            id="3"
            name="Clementine Bauch"
            email="Nathan@yesenia.net "
            phone="1-463-123-4447"
            language="http://ramiro.info"
            image="https://avatars.dicebear.com/v2/avataaars/Maxime_Nienow.svg?options[mood][]=happy"
          />
        </div>

        <div className="home__row">
          <Profile
            id="4"
            name="Patricia Lebsack"
            email="Julianne.OConner@kory.org"
            phone="493-170-9623"
            language="http://kale.biz"
            image="https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy"
          />
          <Profile
            id="5"
            name="Chelsey Dietrich"
            email="Lucio_Hettinger@annie.ca"
            phone="8-790-766-8031"
            language="http://demarco.info"
            image="https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy"
          />
          <Profile
            id="6"
            name="Mrs. Dennis Schulist"
            email="Karley_Dach@jasper.info"
            phone="1-879-976-8031"
            language="http://ola.org"
            image="https://avatars.dicebear.com/v2/avataaars/Kamren.svg?options[mood][]=happy"
          />
        </div>

        <div className="home__row">
          <Profile
            id="7"
            name="Kurtis Weissnat"
            email="Telly.Hoeger@billy.biz"
            phone="210.067.6132"
            language="http://elvis.io"
            image="https://avatars.dicebear.com/v2/avataaars/Elwyn.Skiles.svg?options[mood][]=happy"
          />

        <Profile
            id="8"
            name="Nicholas Runolfsdottir V"
            email="Sherwood@rosamond.me"
            phone="586.493.6943 "
            language="http://jacynthe.com"
            image="https://avatars.dicebear.com/v2/avataaars/Leopoldo_Corkery.svg?options[mood][]=happy"
          />

            <Profile
            id="9"
            name="Glenna Reichert"
            email="Chaim_McDermott@dana.io"
            phone="(775)976-6794"
            language="http://conrad.com"
            image="https://avatars.dicebear.com/v2/avataaars/Delphine.svg?options[mood][]=happy"
          />
          
        </div>
        <div className="home__row">

            <Profile
            id="10"
            name="Clementina DuBuque"
            email="   Rey.Padberg@karina.biz"
            phone="  024-648-3804"
            language="http://ambrose.net"
            image="https://avatars.dicebear.com/v2/avataaars/Moriah.Stanton.svg?options[mood][]=happy"
            />
          
          
        </div>

      </div>
    </div>
  );
}

export default Home;