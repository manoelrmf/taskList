import React from 'react'
import './style.css'

function Header(){
    return(
        <header className="navbar">
            <section>
                <div>
                    <img className="perfil" src="https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-9/p960x960/56757379_1987872754654791_6277004160898433024_o.jpg?_nc_cat=102&_nc_eui2=AeGUQZGvUk7bFG-rqQWKAJJ1RS0cpJfARQeKpa5uddR3vRsRyVI18RmwCW5lsxx9_yrQN6-hG-zq1-qPrHo4hAmeZ_fqyuMCzoX8yZebuSqhvw&_nc_ohc=d5RACO1GpGYAX9VcFGu&_nc_ht=scontent.fsdu11-1.fna&_nc_tp=6&oh=4f65341a03896a6da6d251217f84a8e1&oe=5EB79D7C" />
                    <p>Manoel Ribeiro</p>
                </div>
            </section>
        </header>
    )
}

export default Header