public with sharing class IncomeController {
  @AuraEnabled(cacheable=true)
  public static List<Income__c> incomeList() {
    try {
      return [
        SELECT Name, Income_Amount__c, CreatedDate
        FROM Income__c
        ORDER BY Income_Amount__c DESC
        LIMIT 3
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
