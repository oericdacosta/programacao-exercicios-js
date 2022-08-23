function whatAnimalIs(w1, w2, w3){
    if(w1 === "vertebrado"){
        if(w2 === "ave"){
            return (w3 === "carnivoro") ? "aguia" : "pomba";
        }
        return (w3 === "onivoro") ? "homem" : "vaca";
    }
    if(w2 === "inseto"){
        return (w3 === "hematofago") ? "pulga" : "lagarta";
    }
    return (w3 === "onivoro") ? "minhoca" : "Sanguessuga";
}

function main(){
    let word1;
    word1 = word1 ?? "vertebrado";

    let word2;
    word2 = word2 ?? "mamifero";

    let word3;
    word3 = word3 ?? "onivoro";

    if(word1 !== "vertebrado" && word1 !== "invertebrado") return;
    if(word2 !== "ave" && word2 !== "mamifero" && word2 !== "inseto" && word2 !== "anelideo") return;
    if(word3 !== "carnivoro" && word3 !== "onivoro" && word3 !== "herbivoro" && word3 !== "hematofago") return

    let animal = whatAnimalIs(word1, word2, word3);
    console.log(animal);
}

main();