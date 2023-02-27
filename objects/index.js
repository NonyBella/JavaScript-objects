// Question 1
function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes)
{
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
// Question 2
const firstPost = new InstagramPost('@Adichie','purpleHibiscus','https://en.wikipedia.org/wiki/Purple_Hibiscus', 10000, 500);
const secondPost = new InstagramPost('@Soyinka','theManDied','https://en.wikipedia.org/wiki/Wole_Soyinka', 5000, 100);
console.log(firstPost);
console.log(secondPost);
// Question 3
function createPerson(name,age,location){
    return {
        name:name,
        age:age,
        location:location
    }
}
const musa = createPerson('musa', 19, 'lekki,Lagos');
console.log(musa)
// 3b
function createJambScore(Eng,Govt,Lit,Crk){
    return {
        Eng:Eng,
        Govt:Govt,
        Lit:Lit,
        Crk:Crk
    }
}
musa.JambScore = createJambScore(70,85,82,94);
console.log(musa);
// Question 4
const object = { name: "Me", location: "Here" }
const objectCloneOne = Object.assign({}, object);
const objectCloneTwo = { ...object };
const objectCloneThree = JSON.parse(JSON.stringify(object));

// Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for(let party in presidentialCandidates) {
     console.log(presidentialCandidates[party] + 'is the presidential candidate of ' + party);
 }