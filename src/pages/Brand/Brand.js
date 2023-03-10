import React, { useState } from 'react'
import { aboutData } from '../../Data/Data'
import Icon from '../../assets/About/6.svg'
import Image1 from '../../assets/About/1-img.png'
import Image2 from '../../assets/About/2-img.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Brand = () => {


    const [name, setName] = useState("")
    const [data, setData] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    let url = 'http://localhost:3002/showRoom'

    let handleSubmit = async (e) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: e.target[0].value,
                mobileNumber: e.target[1].value,
                data: e.target[2].value,
                message: e.target[3].value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    return (
        <section className='about'>
            <div className='container'>
                <FloatingWhatsApp />
                <div className='brand'>
                    <h1 className='brand-title'>О БРЕНДЕ</h1>
                    <div className='brand-img'></div>
                    <div className='brand-text'>
                        <h2 className='brand-text-title'>ELEAN</h2>
                        <p className='brand-text-p'>
                            Сегодня ELEAN - это первый в России магазин готового женского смокинга.
                            У нас каждая женщина может подобрать для себя образ со смокингом, такой же как
                            у голливудских див и звезд светской хроники.
                        </p>
                        <br />
                        <p className='brand-text-p'>
                            Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов,
                            успешных женщин-руководителей, представительниц научной и деловой элиты.
                        </p>
                        <br />
                        <p className='brand-text-p'>
                            История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с
                            мечты автора коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась
                            долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена
                            из 100% натурального шелка, в нее вошли жентсвенные платья и костюмы.
                        </p>
                        <br />
                        <p className='brand-text-p'>
                            В сентябре 2016 года впервые был показан женский костюм со смокингом.
                            В сентябре 2017 года в коллекции бренда было уже три модели женских смокингов на
                            разные типы фигуры и вкус.
                        </p>
                        <br />
                        <p className='brand-text-p'>
                            В 2018 году коллекцию пополнило еще 2 модели смокингов и сформирована полная капсула дополняющих
                            изделия, таких как блуза с бабочкой, топ с кружевом и даже тельняшка. Жемчужиной базовой
                            коллекции стало платье-смокинг.
                        </p>
                        <br />
                        <p className='brand-text-p'>
                            Кроме базовой коллекции смокингов, каждый сезон мы выпускаем капсулу из 7-12 вещей, которые
                            эффектно освежат ваш гардероб. Все коллекции бренда отшиваются только из натуральных тканей:
                            шерсть и шелк.
                        </p>
                    </div>
                    <div className='brand-block'>
                        <div className='brand-block-cards'>
                            <img src={Image1} alt='' />
                            <h2 className='brand-block-cards-title'>ЕЛЕНА ПИСАРЕВА</h2>
                            <p className='brand-block-cards-subtitle'>
                                Автор коллекции, лекал и технологии пошива в бренде ELEAN. Имеет высшее образование инженера -
                                технолога швейных изделий и опыт свыше 30 лет в разработке и пошиве изделий.
                            </p>
                        </div>
                        <div className='brand-block-cards'>
                            <img src={Image2} alt='' />
                            <h2 className='brand-block-cards-title'>АНАСТАСИЯ И АННА</h2>
                            <p className='brand-block-cards-subtitle'>
                                Дочери Елены, с детства впитывали мастерство мамы и взяли на себя роль в управлении и становлении бренда.
                                Анна является главным стилистом и операционным управляющей. Анастасия управляет отделом маркетинга и рекламы.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='our-adv'>
                    <h2 className='our-adv-title'>НАШИ ПРЕИМУЩЕСТВА</h2>
                    <div className='our-adv-row'>
                        {
                            aboutData.map((item) => (
                                <div className='our-adv-card'>
                                    <img src={item.icon} alt='' />
                                    <h3 className='our-adv-card-text'>{item.text}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className='registr'>
                        <div className='registr-block'>
                            <img className='registr-icon' src={Icon} alt='' />
                            <h4 className='registr-title'>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h4>
                            <form className='registr-form' action='/djkama' onSubmit={handleSubmit}>
                                <div className='registr-form-sections'>
                                    <input value={name} required type='text'
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='ВВЕДИТЕ ИМЯ' />
                                </div>
                                <div className='registr-form-sections'>
                                    <input required value={mobileNumber} type='number'
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        placeholder='ВВЕДИТЕ ТЕЛЕФОН' />
                                </div>
                                <div className='registr-form-sections'>
                                    <input required value={data} type='datetime-local'
                                        onChange={(e) => setData(e.target.value)}
                                        placeholder='ВВЕДИТЕ УДОБНОЕ ВРЕМЯ' />
                                </div>
                                <textarea className='registr-form-com' value={message} name="textArea"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='ДОБАВИТЬ КОММЕНТАРИЙ' id=''>
                                </textarea>
                            </form>
                            <button className='registr-form-btn' type='submit'>ОТПРАВИТЬ</button>
                            <p className='registr-p'>Поля отмеченные “*” обязательны для заполнения</p>
                            {/* <input type='file'/> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand
