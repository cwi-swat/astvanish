//@@ src/main/rascal/astvanish/demo/ql/ql.av: run($ql)

form "Loan Approval" {
  "What is your full name?" fullName: str
  "How old are you?" age: int
  "Do you have a driver's license?" hasLicense: bool
  
  if (age < 18) {
    "Are you currently in school?" inSchool: bool
    if (inSchool) {
      "What is your current grade?" grade: int
    }
  } else {
    if (age >= 18 && age <= 65) {
      "Are you currently employed?" employed: bool
      
      if (employed) {
        "What is your job title?" jobTitle: str
        "How many years have you worked in your current job?" yearsInJob: int
        "What is your monthly salary?" monthlySalary: int
        "What is your total monthly expenses?" monthlyExpenses: int

        "Your annual savings" annualSavings: int = (monthlySalary - monthlyExpenses) * 12
      } else {
        "Are you actively looking for a job?" lookingForJob: bool
      }
    } else {
      "Are you retired?" retired: bool
      if (retired) {
        "How long have you been retired?" yearsRetired: int
        "What is your annual pension?" annualPension: int
        "What is your annual healthcare expense?" healthcareExpenses: int

        "Net annual pension after healthcare" netPension: int = annualPension - healthcareExpenses
      }
    }
  }

  "Are you eligible for a senior citizen discount?" seniorDiscount: bool = age >= 65 && retired
  
  "What is your annual income?" income: int
  "What are your monthly debts?" monthlyDebts: int
  "Do you have a co-signer for loans?" hasCoSigner: bool
  
  "Desired loan amount" loanAmount: int
  "Loan interest rate (percentage)" interestRate: int
  "Loan term (years)" loanTerm: int
  
  "Total interest to be paid" totalInterest: int = (loanAmount * interestRate * loanTerm) / 100
  "Total amount to be repaid" totalRepayment: int = loanAmount + totalInterest
  "Your monthly loan payment" monthlyPayment: int = totalRepayment / (loanTerm * 12)
  
  "Loan approval status" loanApproved: bool = (income > 50000 && monthlyDebts < 10000) || hasCoSigner

  if (loanApproved) {
    "Congratulations! Your loan has been approved." approvalMessage: str = "Approved"
  } else {
    "Unfortunately, your loan application was not successful." not_approvalMessage: str = "Not Approved"
  }
}
