public with sharing class BillController {
  @AuraEnabled(cacheable=true)
  public static List<Bill__c> billList() {
    try {
      return [
        SELECT Id, Name, Amount_Remaining_on_Bill__c, Due_Date__c
        FROM Bill__c
        WHERE Paid__c = FALSE
        ORDER BY Amount_Remaining_on_Bill__c DESC
        LIMIT 3
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
