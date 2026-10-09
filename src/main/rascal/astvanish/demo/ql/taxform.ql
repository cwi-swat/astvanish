//@@ src/main/rascal/astvanish/demo/ql/ql.av: run($ql)

form "Tax Office example" { 
  "Did you buy a house in 2010?"
    hasBoughtHouse: bool
  
  "Did you enter a loan?"
    hasMaintLoan: bool
    
  "Did you sell a house in 2010?"
    hasSoldHouse: bool    
   
  if (hasSoldHouse) {
    "What was the selling price?"
      sellingPrice: int
    "Private debts for the sold house:"
      privateDebt: int
    "Value residue:"
      valueResidue: int = sellingPrice - privateDebt
  }
}