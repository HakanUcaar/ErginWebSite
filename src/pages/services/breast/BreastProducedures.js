import React from "react";
import { Link } from 'react-router-dom';
import SectionLayout from "../../../components/layout/sectionLayout";

const BreastProducedures = () => {
  return (
    <SectionLayout title="Göğüs işlemleri">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-6">
          <a href="#home" className="nav-link scroll">
            <img
              src="/assets/img/breast.png"
              srcset="/assets/img/breast.png"
              alt=""
            />
          </a>
        </div>
        <div class="col-12 md:col-6 lg:col-6">
          <p className="lead fs-lg">
            Meme büyüklüğü ve şekline ilişkin her türlü dönüşümü gerçekleştirmek
            için köklü ameliyatlar mevcuttur. En yaygın olanları meme büyütme,
            meme küçültme ve mastopeksi (memenin dikleştirilmesi ve
            sıkılaştırılması) veya bunların bir kombinasyonudur.
          </p>

          <ul className="flex flex-column">
            <li className="nav-item">
              <div className="flex align-items-center">
                <i className="pi pi-check-circle"></i>
                <Link
                    to='/services/breast'
                    className="dropdown-item"
                    >
                    Göğüs Büyütme 
                </Link>  
              </div>                               
            </li> 
            <li className="nav-item">
              <div className="flex align-items-center">
                <i className="pi pi-check-circle"></i>
                <Link
                    to='/services/breast'
                    className="dropdown-item"
                    >
                    Meme Dikleştirme 
                </Link>  
              </div>                               
            </li> 
            <li className="nav-item">
              <div className="flex align-items-center">
                <i className="pi pi-check-circle"></i>
                <Link
                    to='/services/breast'
                    className="dropdown-item"
                    >
                    Meme Küçültme
                </Link>  
              </div>                               
            </li>           
          </ul>



          {/* <h2>Göğüs Büyütme</h2>
          <p className="lead fs-lg">
            Meme Büyütme İşlemi Genel bir tanım yapmak gerekirse gögüs büyütme
            küçük boydaki göğüslerin, protezler ya da yağ enjeksiyonu yaparak
            daha büyük görünmesini sağlayan bir operasyon işlemidir. Bu
            ameliyatın temel amacı esetik kaygılardır. Kliniğimizde, hacmen
            küçük göğüslere etkili çözümler sunmaktayız.
          </p>
          <br></br>
          <h2>Meme Dikleştirme</h2>
          <p className="lead fs-lg">
            Göğüslerin doğal yapısı, farklı nedenlere bağlı olarak değişebilir.
            Sarkmanın birçok nedeni olabilir. Yer çekimi, yaş ilerlemesi, çok
            sık kilo alıp verme en temel nedenlerdendir. Ayrıca doğum ve emzirme
            de sarkma nedenidir. Ancak göğüslerde ortalamadan fazla büyüklük
            olması da sarkma nedeni olabilmektedir. Meme dikleştirme ameliyatı
            sonrasında sarkmalar son bulabilmektedir.
          </p>
          <br></br>
          <h2>Meme Küçültme</h2>
          <p className="lead fs-lg">
            Kadınlar meme küçültme operasyonlarına genellikle yaşadıkları bir
            sıkıntı ya da görsel estetik rahatsızlığı nedenleriyle başvuru
            yapmaktadır. Örneğin büyük göğüsler boyun ve sırt ağrılarına neden
            oluyorsa sağlık problemi nedeniyle ameliyatı gerektirebilir. Büyük
            memeler, bazı fiziksel aktiviteleri kısıtlayabilmektedir. Ayrıca
            bedene göre çok büyükse istenne kıyafetleri giyerken sıkıntı
            çıkarabilmektedir. Ter ve pişik ile kötü koku gibi durumlara da
            neden olabilen büyük memeler bazen de sütyen askısının iz yapması
            nedeniyle küçültülmek istenebilir.
          </p> */}
        </div>
      </div>
    </SectionLayout>
  );
};

export default BreastProducedures;
