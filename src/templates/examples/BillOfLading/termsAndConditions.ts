// Static display-only text; not part of the credential data.
export interface TermsPart {
  title: string;
  items: { h?: string; p: string[] }[];
}

export const TERMS_HEADER = {
  title: "ChainDoX Term and Condition CDX TradeTrust eBL System Rulebook",
  provider: "ChainDoX Pte Ltd",
  system: "ChainDoX TradeTrust Enabled eBL System (“CDX System”)",
};

export const TERMS_PARTS: TermsPart[] = [
  {
    title: "Part A – Definitions",
    items: [
      { h: "1. Carrier", p: ["A User who is the carrier as described in the bill of lading or its authorised representative."] },
      { h: "2. Consignee", p: ["A User who is the consignee as described in the bill of lading and recipient of the shipped goods."] },
      { h: "3. Delivery Order", p: ["A document given by the Carrier in exchange for a bill of lading containing an undertaking by the Carrier to the person identified in the document, to deliver the goods to which the document relates, to that person."] },
      { h: "4. eBL", p: ["An electronic bill of lading issued, signed and transferred within the CDX System."] },
      { h: "5. Harmful Components", p: ["Technologically harmful programs, phishing, data or code including but not limited to viruses, trojan horses, worms, time-bombs, keystroke loggers, spyware or adware."] },
      { h: "6. IG", p: ["The International Group of P&I Clubs."] },
      { h: "7. Model eBL Terms", p: ["The Model Terms contained in Part C of this document derived from the TradeTrust Model Terms published by the Infocomm Media Development Authority of Singapore."] },
      { h: "8. Model User Agreement Terms", p: ["The Model Terms contained in Part B of this document derived from the TradeTrust Model Terms."] },
      { h: "9. Originating User", p: ["The Carrier who issues and signs the TradeTrust eBL within the CDX System."] },
      { h: "10. Previous TradeTrust eBL System", p: ["A TradeTrust Enabled eBL System used prior to the CDX System to issue, sign or transfer possession of the same TradeTrust eBL."] },
      { h: "11. Previous User", p: ["A User of a Previous TradeTrust Enabled eBL System or the CDX System who previously held the same TradeTrust eBL."] },
      { h: "12. Service Provider", p: ["ChainDoX Pte Ltd, the provider and operator of the CDX System."] },
      { h: "13. Shipper", p: ["A User who is the shipper of the goods as described in the bill of lading."] },
      { h: "14. Subsequent TradeTrust eBL System", p: ["A TradeTrust Enabled eBL System used after the CDX System to transfer possession of the same TradeTrust eBL."] },
      { h: "15. Subsequent User", p: ["A User of a Subsequent TradeTrust eBL System or the CDX System who becomes the holder of the same TradeTrust eBL."] },
      { h: "16. TradeTrust Adopter", p: ["Any system provider that has integrated TradeTrust Software and operates a TradeTrust Enabled eBL System."] },
      { h: "17. TradeTrust eBL", p: ["An electronic bill of lading that is subject to a governing law which gives legal recognition to it as equivalent to a paper bill of lading and issued, signed or transferred within the CDX System or other TradeTrust Enabled eBL Systems which incorporates Part C (TradeTrust eBL Provisions) of these Terms and Conditions."] },
      { h: "18. TradeTrust Enabled eBL System", p: ["An eBL system which has integrated TradeTrust Software and is interoperable with other TradeTrust Enabled eBL Systems and which incorporates these Model User Agreement Terms and requires every electronic Bill of Lading issued or processed through the CDX System to incorporate Part C (TradeTrust eBL Provisions) of these Terms and Conditions."] },
      { h: "19. TradeTrust Software", p: ["Open-source software developed and made available through the TradeTrust framework by the Infocomm Media Development Authority of Singapore."] },
      { h: "20. User", p: ["Any individual, company or entity that accesses and uses the CDX System."] },
      { h: "21. User Agreement", p: ["An agreement between ChainDoX Pte Ltd and the User governing access and use of the CDX System."] },
      { h: "22. CDX System", p: ["The ChainDoX TradeTrust Enabled eBL System operated by ChainDoX Pte Ltd which enables the issuance, signing, transfer and surrender of TradeTrust eBLs."] },
    ],
  },
  {
    title: "Part B – User Agreement Terms and Conditions",
    items: [
      {
        h: "1. Preamble",
        p: [
          "1.1 ChainDoX Pte Ltd operates the CDX System which integrates TradeTrust Software to enable the issuance, signing, holding and transfer of electronic bills of lading.",
          "1.2 The User wishes to use the CDX System and ChainDoX Pte Ltd agrees to provide such services subject to these Terms and Conditions.",
        ],
      },
      {
        h: "2. eBL Clausing",
        p: ["Notwithstanding details provided by the Shipper to the Carrier for issuing the TradeTrust eBL, the Carrier may clause the eBL with remarks as to the leading marks, number, quantity, weight and/or apparent good order and condition of the goods. Such clausing may only take place before issuance of the eBL to the Shipper. The Service Provider accepts no responsibility for any such remarks which the Carrier may choose to make."],
      },
      {
        h: "3. Rejection of the EBL",
        p: ["Without prejudice to the Previous Users' legal rights and obligations, any User being the lawful holder of the TradeTrust eBL may reject the transfer of the eBL, thereby transferring possession of the eBL back to the Previous User who last had possession of the eBL."],
      },
      {
        h: "4. Switch to Paper",
        p: [
          "At any time prior to the delivery of the goods covered by the TradeTrust eBL, the Originating User undertakes, at the request of any Subsequent User who is then the holder of the TradeTrust eBL, to accept the return by way of transfer of possession of the TradeTrust eBL and issue a paper bill of lading in its place.",
          "Upon acceptance of the return of the TradeTrust eBL, the TradeTrust eBL shall be made inoperative and cease to have any effect or validity and no further transfer of possession shall be permitted.",
          "The paper bill of lading shall accurately reflect the wording of the TradeTrust eBL together with the terms and conditions contained in or incorporated by reference in the TradeTrust eBL.",
          "The paper bill of lading shall state the date of issue of the TradeTrust eBL, the date of conversion to paper and shall be accompanied by a printout of the electronic record of holders between the date of issue and the date of conversion.",
          "The paper bill of lading will contain the following statement: \"This is a paper bill of lading issued and signed by the Carrier in compliance with a request from the lawful holder of the TradeTrust eBL on [date] to switch to paper. Pursuant to the governing law of Singapore, being an MLETR-compliant jurisdiction, the change of medium shall not affect the rights and obligations of the parties. The TradeTrust eBL has been made inoperative and has ceased to have any effect or validity and no further endorsement or transfer of possession of the TradeTrust eBL shall be permitted.",
        ],
      },
      {
        h: "5. Surrender, Delivery and Accomplishment",
        p: [
          "5.1 Before a User who is the holder of the TradeTrust eBL is entitled to physical delivery of cargo, the User must surrender the TradeTrust eBL by transferring possession to the Carrier upon which (subject to any legal exception or impediment to this obligation) the Carrier is obliged to physically deliver the cargo [or provide a Delivery Order] to that User. The Carrier shall be entitled to require reasonable proof of identity from the party taking delivery of the goods. The Service Provider does not warrant the accuracy of such identity information and accepts no liability in respect thereof whatsoever in this regard.",
          "5.2 Upon acceptance of the surrender of the TradeTrust eBL and after delivery of the cargo [or provision of a Delivery Order] to the User in clause 5.1, the TradeTrust eBL shall be made inoperative and ceases to have any effect or validity in transferring title to the cargo and no further transfer of possession of the eBL shall be permitted. The Carrier shall then record the status of the eBL as accomplished.",
        ],
      },
      {
        h: "6. Liability of Service Provider for Errors, Malfunction and Corrections",
        p: [
          "6.1 The Service Provider has no liability whatsoever to any User for [any loss, damage or delay of whatsoever nature whether direct or indirect, physical or financial due to a cause or combination of causes, any of which is beyond the reasonable control of the Service Provider].",
          "6.2 The Service Provider does not represent or warrant that its TradeTrust Enabled eBL System will be [error-free, free of Harmful Components or that defects will be corrected or that the defects will always be accessible to be corrected. However, should any errors or defects occur, or any Harmful Components be discovered, the Service Provider shall be entitled to a reasonable amount of system downtime in order to use all reasonable efforts to correct such errors or defects and/or remove such Harmful Components].",
          "6.3 The Service Provider does not warrant or represent that [the information available on or through its TradeTrust Enabled eBL System will be correct, accurate, timely, or otherwise reliable].",
          "6.4 Notwithstanding clauses 6.2 and 6.3 above and subject to clauses 6.1 above and 6.5 below, the Service Provider accepts liability, up to, but not exceeding, the limit of liability in clause 7 below, in the event that the User suffers loss, damage or delay solely and directly caused by failure of CDX System, subject to such losses not being reasonably avoidable and/or mitigatable by the User. It is agreed that such reasonable avoidance and mitigation shall include the User requesting or agreeing to the Carrier switching the TradeTrust eBL to paper pursuant to clause 4.",
          "6.5 Notwithstanding any provision in this agreement, the Service Provider does not accept any liability whatsoever to any User who is not either a Carrier, Shipper, Consignee and/or lawful holder of the TradeTrust eBL.",
        ],
      },
      {
        h: "7. Limit of Liability",
        p: [
          "The Service Provider shall not be liable to any User for more than USD 100,000 per event.",
          "The Service Provider shall procure and maintain appropriate liability insurance covering system operation.",
        ],
      },
      {
        h: "8. Interoperability",
        p: ["The CDX System is designed for and will interoperate with other TradeTrust Enabled eBL Systems in so far as the TradeTrust Software allows."],
      },
      {
        h: "9. Dispute Resolution",
        p: [
          "Any dispute arising out of or in connection with these Terms and Conditions shall be referred to arbitration administered by the Singapore International Arbitration Centre.",
          "Seat of arbitration: Singapore. Tribunal: Three arbitrators. Language: English.",
        ],
      },
      {
        h: "10. Governing Law",
        p: ["These Terms and Conditions shall be governed by and construed in accordance with the laws of Singapore."],
      },
    ],
  },
  {
    title: "Part C – TradeTrust eBL Provisions",
    items: [
      {
        h: "Note",
        p: ["For originating systems which govern and operate the Carrier's issuing of the eBL, the NOTICE should be in a prominent position on the first page of the bill of lading. Also, care should be taken to ensure that if adapting standard form eBL clauses (for example where the eBL is on liner terms 1) or standard terms and incorporated charterparty terms (for example where the Carrier is issuing a bill of lading with the contract of carriage mainly contained in a voyage or time charterparty and then incorporated by reference to the charterparty in the bill of lading 2) that the Model eBL Terms are consistent with these clauses. This is particularly the case with dispute resolution provisions which may be different in standard form charterparties or bills of lading on liner terms to the provisions recommended below. 3 In the event of a conflict these clauses should prevail."],
      },
      {
        h: "Notice",
        p: ["This is a TradeTrust eBL governed by the law of [Singapore] which has adopted the UNCITRAL Model Law on Electronic Transferable Records (\"MLETR\"). This TradeTrust eBL meets the requirements of the MLETR as implemented under [Singapore law] which gives legal recognition to it as equivalent to a paper bill of lading."],
      },
      {
        h: "Carrier's Right to Receive Back",
        p: ["This TradeTrust eBL has been issued and signed using the CDX System. The Carrier has the right to receive this eBL back on the CDX System when it is surrendered for discharge of cargo."],
      },
      {
        h: "Switch to Paper",
        p: ["At any time prior to the delivery of the goods covered by the TradeTrust eBL, the Carrier undertakes, at the request of any lawful holder of the TradeTrust eBL, to accept the return by way of transfer of possession of the TradeTrust eBL and issue a paper bill of lading in its place. Upon acceptance of the return of the TradeTrust eBL, the TradeTrust eBL shall be made inoperative and ceases to have any effect or validity and no further transfer of possession of the TradeTrust eBL shall be permitted. The paper bill of lading shall accurately reflect the wording of the TradeTrust eBL together with the terms and conditions contained in and/or incorporated by reference in the TradeTrust eBL. The change of medium in accordance with this paragraph shall not affect the rights and obligations of the parties. The paper bill of lading shall state the date of issue in accordance with the TradeTrust eBL, the date of conversion to paper and the paper bill of lading shall be accompanied by a printout of the electronic record of holders between the date of issue and the date of conversion to paper."],
      },
      {
        h: "Surrender and Delivery",
        p: ["Upon surrender of the TradeTrust eBL by the lawful holder to the Carrier and, subject to any legal exception or impediment, upon delivery of the cargo or provision of a Delivery Order, the TradeTrust eBL shall be made inoperative and cease to have any effect or validity. No further transfer of possession of the TradeTrust eBL shall be permitted. The Carrier shall record the status of the TradeTrust eBL as accomplished."],
      },
      {
        h: "Dispute Resolution",
        p: ["Disputes relating to this TradeTrust eBL shall be resolved by arbitration seated in Singapore."],
      },
      {
        h: "Governing Law",
        p: ["These provisions shall be governed by the laws of Singapore."],
      },
    ],
  },
];
