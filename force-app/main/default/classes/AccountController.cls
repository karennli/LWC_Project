public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> accountList() {
    return [
      SELECT Id, Name, AccountNumber, Amount_of_Bills__c
      FROM Account
      ORDER BY Amount_of_Bills__c DESC
    ];
  }
}
