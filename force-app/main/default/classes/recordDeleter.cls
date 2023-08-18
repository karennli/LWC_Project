public with sharing class recordDeleter {
  @AuraEnabled
  public static void deleteRecords(List<sObject> records) {
    try {
      delete records;
    } catch (DmlException e) {
      System.debug(e);
    }
  }
}
