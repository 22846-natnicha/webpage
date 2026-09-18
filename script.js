function playMusic() {

    alert(
        "🎵 ใส่ไฟล์เพลงของคุณใน JavaScript ได้เลย 💗"
    );

}


/* ✨ ทำให้ Card ค่อย ๆ ปรากฏตอน Scroll */

const cards =
    document.querySelectorAll(".card");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            entry.target.style.transform
                                .replace(
                                    "translateY(25px)",
                                    ""
                                );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(
    (card) => {

        card.style.opacity =
            "0";

        card.style.transform +=
            " translateY(25px)";

        observer.observe(card);

    }
);
