import CardwCarousel from "./CardwCarousel";
import neredeyiyelim_favoritespage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_favoritespage.jpeg";
import neredeyiyelim_loading from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_loading.jpeg";
import neredeyiyelim_mainpage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_mainpage.jpeg";
import neredeyiyelim_restaurantdetail from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_restoranpage.jpeg";
import neredeyiyelim_settingspage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_settingspage.jpeg";

import java_password_holder1 from "../assets/project_images/java-password-holder/java_password_holder.png";
import java_password_holder2 from "../assets/project_images/java-password-holder/java_password_holder2.png";
import java_password_holder3 from "../assets/project_images/java-password-holder/java_password_holder3.png";
import java_password_holder4 from "../assets/project_images/java-password-holder/java_password_holder4.png";
import java_password_holder5 from "../assets/project_images/java-password-holder/java_password_holder5.png";

import cerrah_vinly_contactus from "../assets/project_images/web-development-project/cerrah_vinly_contactus.png";
import cerrah_vinly_homepage from "../assets/project_images/web-development-project/cerrah_vinly_mainpage.png";
import cerrah_vinly_productpage from "../assets/project_images/web-development-project/cerrah_vinly_diskpage.png";
import cerrah_vinly_sepet from "../assets/project_images/web-development-project/cerrah_vinly_sepet.png";
import cerrah_vinly_hero from "../assets/project_images/web-development-project/cerrah_vinly_herosection.png";

import chat_application1 from "../assets/project_images/chat-application-java/chatt_application_image_1.png";
import chat_application2 from "../assets/project_images/chat-application-java/chatt_application_image_2.png";
import chat_application3 from "../assets/project_images/chat-application-java/chatt_application_image_3.png";
import chat_application4 from "../assets/project_images/chat-application-java/chatt_application_image_4.png";
import chat_application5 from "../assets/project_images/chat-application-java/chatt_application_image_5.png";


function ProjectComponent() {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-6xl font-bold text-primary mb-8">Öne Çıkan Çalışmalar</div>
      <div className="text-lg text-base-content mb-12 dark:text-slate-400">
        <p>Burada <span className="dark:text-primary">öne çıkan</span> bazı çalışmalarım yer almaktadır.Diğer çalışmalarımı görmek için <span className="dark:text-primary">Projelerim</span> yazan butona tıklayabilirsiniz.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <CardwCarousel 
          carouselId={1} 
          image3={neredeyiyelim_favoritespage} 
          image2={neredeyiyelim_loading} 
          image1={neredeyiyelim_mainpage} 
          image4={neredeyiyelim_restaurantdetail} 
          image5={neredeyiyelim_settingspage} 
          title="Neredeyiyelim Mobil Uygulaması" 
          description="İnsanlara en yakın restoranları gösteren, kullanıcı dostu bir mobil uygulama." 
          buttonLink="https://github.com/feagy/nerede-yiyelim.git" />

        <CardwCarousel 
        carouselId={3} 
        image1={java_password_holder1} 
        image2={java_password_holder2} 
        image3={java_password_holder3} 
        image4={java_password_holder4}
        image5={java_password_holder5}  
        title="Java Password Holder" 
        description="Java'da Swing kütüphanesi kullanılarak geliştirilen, kullanıcıların şifrelerini güvenli bir şekilde saklamalarını sağlayan bir masaüstü uygulaması." 
        buttonLink="https://github.com/DoritosLover1/PasswordHolder.git" />

        <CardwCarousel 
        carouselId={4} 
        image1={cerrah_vinly_homepage} 
        image2={cerrah_vinly_hero} 
        image3={cerrah_vinly_productpage}
        image4={cerrah_vinly_sepet}
        image5={cerrah_vinly_contactus} 
        title="Cerrah Vinly E-Ticaret Sitesi Projesi" 
        description="Vinyl plak satan bir e-ticaret sitesi. Kullanıcıların ürünleri inceleyebileceği, sepetlerine ekleyebileceği ve iletişim kurabileceği modern bir web uygulaması." 
        buttonLink="https://github.com/DoritosLover1/Web-Project/tree/main-w-backend" />

        <CardwCarousel
        carouselId={5} 
          image1={chat_application1} 
          image2={chat_application2} 
          image3={chat_application3}
          image4={chat_application4}
          image5={chat_application5}
          title="Chat Uygulaması" 
          description="Kullanıcılar arasında gerçek zamanlı sohbet imkanı sunan bir chat uygulamasıdır." 
          buttonLink="https://github.com/DoritosLover1/MyOwnChatApplication/tree/encryption-imp"
          />

      </div>
    </div>
  );
}

export default ProjectComponent;
