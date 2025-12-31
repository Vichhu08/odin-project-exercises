function camelize (str){
    return (str.split('-')
               .map(
                    (word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1)
                )
               .join('') );
}

console.log(camelize("backgrond-color"));
console.log(camelize('text-with-infos'));
console.log(camelize("-text-and"));
