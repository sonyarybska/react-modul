import './component2.css';

function Films({oneFilm}) {
    const {title, image, description} = oneFilm;

    let cls;
    if (title === 'Shameless') cls = 'shame';
    if (title === 'Chilling Adventures of Sabrina') cls = 'sabrina';
    if (title === 'The 100') cls = 'the100'

    return <div className={cls}>
        <h1>
            {title}
        </h1>
        <div>
            <div>
                <img src={image} alt=""/>
            </div>
            <p>
                {description}
            </p>
        </div>
    </div>
}

export default Films;
