const styles = {
    container: {
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '20px'
    },
    a: {
        fontSize: '20px',
        textAlign: 'center'
    },
    ul: {
        listStyleType: 'none',
        fontSize: '20px'
    },
    li: {
        textDecoration: 'none'
    },
    h2: {
        fontSize: '40px'
    },
    h4: {
        fontSize: '30px'
    },
    frontend: {
        border: 'solid 1px darkslategray',
        flexDirection: 'row',
        padding: '20px',
        margin: '20px',
        backgroundColor: '#F7C9B6',
        borderRadius: '5px',
        boxShadow: '10px 10px 5px darkslategray',
    }
}

const resume = () => {
    return (
        <div className='container' style={styles.container}>
            <a href="https://drive.google.com/file/d/19rLqXdLJPOfO8YnMC8eqHKOvBLKOHgC4/view?usp=sharing" style={styles.a}>
                RESUME HERE
            </a>
            <h2 style={styles.h2}>
                Software development skills
            </h2>
            <div className="frontend" style={styles.frontend}>
                <h4 style={styles.h4}>
                    Frontend
                </h4>
                <ul style={styles.ul}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ul>
            </div>
            <div className="backend" style={styles.frontend}>
                <h4 style={styles.h4}>
                    Backend
                </h4>
                <ul style={styles.ul}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>API's</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}

export default resume;