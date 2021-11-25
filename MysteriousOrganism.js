// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

const pAequorFactory = (id, strandArr) => {
  return {
      specimenNum : id,
      dna : strandArr,
      mutate(){
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        const newBase = returnRandBase();
        while (newBase === this.dna[index]){
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
      compareDNA(pAequorOther){
          const dnaLength = this.dna.length;
          let simRate = 0;

          for( counter = 0; counter < dnaLength; counter++){
              if(this.dna[counter] === pAequorOther.dna[counter]){
                simRate++;
              }
          }
          const simPercentage = Math.floor((simRate / dnaLength) * 100);

          return `Specimen #${this.specimenNum} and Specimen #${pAequorOther.specimenNum} have ${simPercentage}% DNA in common`;
      }, 
      willLikelySurvive(){
        let AandGCounter = 0;
        const dnaLength = this.dna.length;
        const survivalThreshold = dnaLength * 60 / 100;

        for (base of this.dna){
          if(base === 'C' || base === 'G'){
            AandGCounter++;
          }
        }
        return (AandGCounter >= survivalThreshold);
      }

  };
}

let survivingSpecimens = [];
for (let counter = 1; counter < 31; counter++){
  let newSpecimen = pAequorFactory(counter,mockUpStrand());
  if(newSpecimen.willLikelySurvive()){
      survivingSpecimens.push(newSpecimen);
  }
}




