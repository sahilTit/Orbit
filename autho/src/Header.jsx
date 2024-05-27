import { Navbar, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <ul className="list-unstyled components pt-0">
        <li>
          <a href="#/admin/dashboard">
            <i className="fa fa-th-large mr-3"></i>Dashboards
          </a>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle collapsed"
            data-toggle="collapse"
            href="#homeSubmenu1"
          >
            <i className="fa fa-empire mr-3"></i> Master
          </a>
          <ul
            className="list-unstyled sub_nav collapse"
            id="homeSubmenu1"
          >
            <li>
              <a href="#/admin/categoryMaster">
                <i className="fa fa-circle-o mr-3 "></i> Item Category{" "}
              </a>
            </li>
            <li className="">
              <a href="#/admin/itemMaster">
                <i className="fa fa-circle-o mr-3 "></i> Item
              </a>
            </li>
            <li>
              <a href="#/admin/tankMaster">
                <i className="fa fa-circle-o mr-3 "></i> Tank
              </a>
            </li>
            <li>
              <a href="#/admin/dispenserMaster">
                <i className="fa fa-circle-o mr-3 "></i> Dispenser
              </a>
            </li>
            <li>
              <a href="#/admin/nozzleMaster">
                <i className="fa fa-circle-o mr-3 "></i> Nozzle{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/pricelistMaster">
                <i className="fa fa-circle-o mr-3 "></i> Price List{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/locationMaster">
                <i className="fa fa-circle-o mr-3 "></i> Location
              </a>
            </li>
            <li>
              <a href="#/admin/customerMaster">
                <i className="fa fa-circle-o mr-3 "></i> Customer
              </a>
            </li>
            <li>
              <a href="#/admin/openingStockMaster">
                <i className="fa fa-circle-o mr-3 "></i> Opening Stock{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/cardMasterComponent">
                <i className="fa fa-circle-o mr-3 "></i> Cards/Wallets{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/paygate">
                <i className="fa fa-circle-o mr-3 "></i> Payment Gateway
              </a>
            </li>
            <li>
              <a href="#/admin/designationMasterComponent">
                <i className="fa fa-circle-o mr-3 "></i> Designations{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/employeeMasterComponent">
                <i className="fa fa-circle-o mr-3 "></i> Employees{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/offerMaster">
                <i className="fa fa-circle-o mr-3 "></i> Offers{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/bozerMaster">
                <i className="fa fa-circle-o mr-3 "></i> Bozer
              </a>
            </li>
            <li>
              <a href="#/admin/reminderMasterComponent">
                <i className="fa fa-circle-o mr-3 "></i> Reminders{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/customercenter">
                <i className="fa fa-circle-o mr-3 "></i> Customer Group
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu2"
          >
            <i className="fa fa-empire mr-3"></i> Pump Transaction
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu2">
            <li>
              <a href="#/admin/shiftSaleEntry">
                <i className="fa fa-circle-o mr-3 "></i> Shift Sale Transaction
              </a>
            </li>
            <li>
              <a href="#/admin/creditInvoice">
                <i className="fa fa-circle-o mr-3 "></i> Credit Invoice List
              </a>
            </li>
            <li>
              <a href="#/admin/othercreditInvoice">
                <i className="fa fa-circle-o mr-3 "></i> GST Invoice
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu3"
          >
            <i className="fa fa-empire mr-3"></i> Purchase
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu3">
            <li>
              <a href="#/admin/purchaseList">
                <i className="fa fa-circle-o mr-3 "></i> Purchase List
              </a>
            </li>
            <li>
              <a href="#/admin/creditNoteList">
                <i className="fa fa-circle-o mr-3 "></i> Credit Note List
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu4"
          >
            <i className="fa fa-empire mr-3"></i> Customer Approvals
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu4">
            <li>
              <a href="#/admin/userMaster">
                <i className="fa fa-circle-o mr-3 "></i> Indent Users Request
              </a>
            </li>
            <li>
              <a href="#/admin/userPrivileges">
                <i className="fa fa-circle-o mr-3 "></i> User Privileges
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu5"
          >
            <i className="fa fa-empire mr-3"></i> Accounts
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu5">
            <li>
              <a href="#/admin/groupMaster">
                <i className="fa fa-circle-o mr-3 "></i> Group{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/ledgerMaster">
                <i className="fa fa-circle-o mr-3 "></i> Ledger{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/paymentVoucher">
                <i className="fa fa-circle-o mr-3 "></i> Payment Voucher{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/receiptVoucher">
                <i className="fa fa-circle-o mr-3 "></i> Receipt Voucher{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/contraVoucher">
                <i className="fa fa-circle-o mr-3 "></i> Contra Voucher{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/journalVoucher">
                <i className="fa fa-circle-o mr-3 "></i> Journal Voucher{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/bankReconciliation">
                <i className="fa fa-circle-o mr-3 "></i> Bank Reconciliation{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/stockVariation">
                <i className="fa fa-circle-o mr-3 "></i> Stock Variation{" "}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu6"
          >
            <i className="fa fa-empire mr-3"></i> Account Report{" "}
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu6">
            <li>
              <a href="#/admin/ledgerReport">
                <i className="fa fa-circle-o mr-3 "></i> Ledger Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/customerBillToBillReport">
                <i className="fa fa-circle-o mr-3 "></i> Customer Ledger ( Bill
                ) Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/trialBalance">
                <i className="fa fa-circle-o mr-3 "></i> Trial Balance{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/bill-to-bill-outstanding">
                <i className="fa fa-circle-o mr-3 "></i> Bill To Bil Outstanding{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/customer_outstanding">
                <i className="fa fa-circle-o mr-3 "></i> Customer Outstanding{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/customer_ageing">
                <i className="fa fa-circle-o mr-3 "></i> Customer Ageing
              </a>
            </li>
            <li>
              <a href="#/admin/profitAndLoss">
                <i className="fa fa-circle-o mr-3 "></i> Profit &amp; Loss
              </a>
            </li>
            <li>
              <a href="#/admin/groupoutstand">
                <i className="fa fa-circle-o mr-3 "></i> Customer Group
                Outstanding
              </a>
            </li>
            <li>
              <a href="#/admin/balanceSheet">
                <i className="fa fa-circle-o mr-3 "></i> Balance Sheet
              </a>
            </li>
            <li>
              <a href="#/admin/dsmreport">
                <i className="fa fa-circle-o mr-3 "></i> DSM Report
              </a>
            </li>
            <li>
              <a href="#/admin/dsmsum">
                <i className="fa fa-circle-o mr-3 "></i> DSM Wise Sale Report
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu7"
          >
            <i className="fa fa-empire mr-3"></i> Sale Report{" "}
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu7">
            <li>
              <a href="#/admin/dailyreport">
                <i className="fa fa-circle-o mr-3 "></i> Daily Credit Sale
              </a>
            </li>
            <li>
              <a href="#/admin/custreport1">
                <i className="fa fa-circle-o mr-3 "></i> Customize Report 1
              </a>
            </li>
            <li>
              <a href="#/admin/unbilled">
                <i className="fa fa-circle-o mr-3 "></i> Unbilled Report
              </a>
            </li>
            <li>
              <a href="#/admin/shiftReport">
                <i className="fa fa-circle-o mr-3 "></i> Shift Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/allCustomerCreditWise">
                <i className="fa fa-circle-o mr-3 "></i> All Customer CSR{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/selectedCustomerCreditWise">
                <i className="fa fa-circle-o mr-3 "></i> Selected Customer CSR{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/customer_statement">
                <i className="fa fa-circle-o mr-3 "></i> Customer Statement{" "}
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-circle-o mr-3 "></i> GSTR 1
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-circle-o mr-3 "></i> GSTR 3 B
              </a>
            </li>
            <li>
              <a href="#/admin/saleDsr">
                <i className="fa fa-circle-o mr-3 "></i> DSR
              </a>
            </li>
            <li>
              <a href="#/admin/gst_sale_reoport">
                <i className="fa fa-circle-o mr-3 "></i> Sale GST Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/miscCustomerStatement">
                <i className="fa fa-circle-o mr-3 "></i> Miscellaneous Customer
                Statement
              </a>
            </li>
            <li>
              <a href="#/admin/saleCashCreditReport">
                <i className="fa fa-circle-o mr-3 "></i> Sale Cash Credit Report{" "}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu8"
          >
            <i className="fa fa-empire mr-3"></i> Inventory Report{" "}
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu8">
            <li>
              <a href="#/admin/itemListReport">
                <i className="fa fa-circle-o mr-3 "></i> Item List Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/stockSummaryReport">
                <i className="fa fa-circle-o mr-3 "></i> Stock Statement{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/itemWiseSalePurchaseReport">
                <i className="fa fa-circle-o mr-3 "></i> Item Wise Sale/Purchase
                Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/stockTransferReport">
                <i className="fa fa-circle-o mr-3 "></i> Stock Transfer Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/locationWiseStockReport">
                <i className="fa fa-circle-o mr-3 "></i> Location Wise Stock
                Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/groupWiseSaleReport">
                <i className="fa fa-circle-o mr-3 "></i> Group Wise Sale Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/bowzerstock">
                <i className="fa fa-circle-o mr-3 "></i> Bowser Stock
              </a>
            </li>
            <li>
              <a href="#/admin/purchaseReport">
                <i className="fa fa-circle-o mr-3 "></i> Purchase Report{" "}
              </a>
            </li>
            <li>
              <a href="#/admin/stockItemSummary">
                <i className="fa fa-circle-o mr-3 "></i> Stock Summary Report{" "}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-expanded="false"
            className="dropdown-toggle"
            data-toggle="collapse"
            href="#homeSubmenu9"
          >
            <i className="fa fa-empire mr-3"></i> Common Master
          </a>
          <ul className="collapse list-unstyled sub_nav" id="homeSubmenu9">
            <li>
              <a href="#/admin/cityMaster">
                <i className="fa fa-circle-o mr-3 "></i> City Master
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Header;
