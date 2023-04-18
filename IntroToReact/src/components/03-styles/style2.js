import React from 'react';

const Style2 = () => {

    const styles = {
        border: "1px solid red",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
    };

    const styles2 = {
        fontSize: "2rem",
        color: "green",
        fontWeight: "normal",
        margin: "0",
    };

    // console.log({
    //     ...styles2,
    //     padding: "1rem"
    // })

    return (
        <section style={styles}>
            <h2 style={styles2}>React Loops</h2>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde? Harum omnis tempore maiores rerum molestias nam eum facere magnam, id delectus aperiam. Iste consequatur, quo sed nemo consequuntur voluptatibus?
            </article>
            {/* INTERNAL & INLINE STYLING TOGETHER */}
            <h2 style={{
                ...styles2,
                padding: "1rem"
            }}>
                React Hooks
            </h2>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem sint nostrum sed illo obcaecati laborum pariatur? Ipsa quos eligendi repudiandae voluptas unde dolore error, iste facilis esse? Culpa, unde!
            </article>
        </section>
    )
};

export default Style2;