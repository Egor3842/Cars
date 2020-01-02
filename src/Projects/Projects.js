import React from 'react'
import s from './Projects.module.scss'
import c1 from '../Charger_Customs_Free_Psd_Template-assets/chad-kirchoff-202731.png'
import c2 from '../Charger_Customs_Free_Psd_Template-assets/paul-bence-310970.png'
import c3 from '../Charger_Customs_Free_Psd_Template-assets/pietro-de-grandi-254800.png'
import c4 from '../Charger_Customs_Free_Psd_Template-assets/pexels-photo-204605.png'
import c5 from '../Charger_Customs_Free_Psd_Template-assets/peter-kisteman-229911.png'
import c6 from '../Charger_Customs_Free_Psd_Template-assets/389488_shevrole_kamaro_krasnyj_muskul-kar_Chevrolet_5184x3456_www.Gde-Fon.com.png'
import c7 from '../Charger_Customs_Free_Psd_Template-assets/photo_2017-10-26_23-39-16.png'
import c8 from '../Charger_Customs_Free_Psd_Template-assets/Ford-GT-1.png'
import c9 from '../Charger_Customs_Free_Psd_Template-assets/wallpaper.wiki-1970-Dodge-Charger-HD-Wallpaper-PIC-WPD0014651.png'



const Projects = () => {

    return (
        <div className={s.Projects}>
             <div className={s.Name}>Projects</div>
             <div className={s.firstcars}>
                <img src={c1} className={s.car1}/>
                <img src={c2} className={s.car2}/>
                <img src={c3} className={s.car3}/>
                <img src={c4} className={s.car4}/>
             </div>
             <div className={s.secondcars}>   
                 <img src={c5} className={s.car5}/>
               <img src={c6} className={s.car6}/>
               <img src={c7} className={s.car7}/>
               <img src={c8} className={s.car8}/>
                <img src={c9} className={s.car9}/>
             </div>
             
            <div className={s.buttons}><button href='https://yandex.ru/images/search?text=cars&from=tabbar' className={s.button}><a >MORE</a></button></div>  
        </div>
        
    )
}
export default Projects