function doc(name, place, element, description) {
    name = document.createElement(element)
    document.querySelector(place).appendChild(name);
    name.textContent = description
}

doc('p', 'header', 'p', 'Music effects us all in different ways and some of us develop attachments to specific songs that help us cope to hard times in life, have relations to your life , or have a message tha you take away. For me those songs are:')

doc('ul', 'header', 'ul', '')
doc('li', 'header > ul', 'li', "You're On Your Own Kid - Taylor Swift")
doc('li', 'header > ul', 'li', 'Opalite - Taylor Swift')
doc('li', 'header > ul', 'li', 'Forget - Marina Diamandis')

doc('h1', '#midnights', 'h1', "You're On Your Own Kid - Taylor Swift - Midnights")

doc('p', '#midnights', 'p', "I feel like specifically these last three paragraphs mean a lot to me, it describes my journey in jiu jitsu, as well as normal struggles in life. Throughout the starting phases there was a lot of challenges, social anxiety, hard learning curves, and a lot of physical effort. A lot of late nights leaving the gym, learning new techniques and trying to bend my brain to understand them and having adhd made it way worse because sometimes I just cannot focus. Out of the learning phase I started competing and was met with back to back loses 8 times in a row but I never gave up and I just kept doing it. Competition was where all of this mattered the most, it shows you who you really are when you are scared and brought of of your comfort zone, something I have come to learn to love is when they say 'fight', it's like a mental gate shutting behind you and you cannot run from your fears. Months(and a lot of money(classes and competing can get expensive)) later I finally took second place and at that point it came an addiction, gym, train, compete, win/lose, repeat. I plan to never stop doing jiu jitsu. what this song means to me is to never give up and keep moving, through the hardships. Keep my head up and learn from every loss.")


doc('h1', '#tloas', 'h1', 'Opalite - Taylor Swift - The Life Of A Showgirl')


doc('p', '#tloas', 'p', "I ended up going to see her lyric movies and something she said about this song was 'opatlie is man made' and 'sometimes you have to manufacture your own happiness'. I already loved this song and that made me love it even more, it's my crack at this point. I interpret this as sometimes you just have to go out there and get what you want. You cant just keep waiting around for something to happen. One thing I get from this song specifically is from a line where she says 'failure brings you freedom', I take this as you cannot be scared to fail. a lot of the times I don't do things because I am scared that I am going to mess up, or people will judge me if I don't do something right, and this honestly holds me back in my career. But I have come to realize making mistake is normal and it makes us all human, failing can get you to think differently to eventually make the right choices to succeed")


doc('h1', '#froot', 'h1', 'Forget - Marina - Froot')


doc('p', '#froot', 'p', "I think most of us relate to this entire song. This has a similar meaning as the previous songs. Most of the time I usually doubt myself or abilities I have, especially with jiu jitsu and coding. I am usually always holding things against myself like taking loses, or making mistakes in my automotive career path, along with feeling like I am way too old to finally start learning how to code and these ar still ongoing. I always have doubts in my mind about both topics as well as thinking I am moving way too slow when I am learning something new. This song has been burned into the back of my mind and it just screams at me keep going, don't stop, and don't look behind. There will always be challenges but they'll only make me better at what I am doing")
