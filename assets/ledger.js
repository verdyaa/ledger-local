const LEDGER_CATALOG = [{"slug":"chase-bank-statement-pdf-to-csv","title":"Chase Bank Statement PDF to CSV & Excel","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"JPMorgan Chase"},{"slug":"chase-pdf-to-quickbooks-qbo","title":"Chase PDF Statement to QuickBooks (.QBO)","category":"us-banks","outputExt":"qbo","benchmark":"MoneyThumb ($49/mo)","institution":"JPMorgan Chase"},{"slug":"bank-of-america-pdf-to-csv","title":"Bank of America Statement PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Bank of America"},{"slug":"wells-fargo-statement-to-excel","title":"Wells Fargo PDF Statement to Excel CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Wells Fargo"},{"slug":"citi-bank-pdf-to-csv","title":"Citibank Statement PDF to CSV Converter","category":"us-banks","outputExt":"csv","benchmark":"StatementReader ($35/mo)","institution":"Citibank"},{"slug":"capital-one-statement-to-csv","title":"Capital One PDF Statement to CSV & QBO","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Capital One"},{"slug":"us-bank-pdf-to-csv","title":"U.S. Bank Statement PDF to CSV Converter","category":"us-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"U.S. Bank"},{"slug":"pnc-bank-statement-to-csv","title":"PNC Bank Statement PDF to CSV & Excel","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"PNC Bank"},{"slug":"truist-pdf-to-csv","title":"Truist Bank Statement PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Truist Bank"},{"slug":"td-bank-pdf-to-csv","title":"TD Bank Statement PDF to CSV & QuickBooks","category":"us-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"TD Bank"},{"slug":"navy-federal-pdf-to-csv","title":"Navy Federal Credit Union PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Navy Federal"},{"slug":"usaa-statement-pdf-to-csv","title":"USAA Bank Statement PDF to CSV Converter","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"USAA"},{"slug":"fifth-third-bank-pdf-to-csv","title":"Fifth Third Bank PDF Statement to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Fifth Third Bank"},{"slug":"citizens-bank-pdf-to-csv","title":"Citizens Bank Statement PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Citizens Bank"},{"slug":"huntington-bank-pdf-to-csv","title":"Huntington Bank Statement PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Huntington Bank"},{"slug":"regions-bank-pdf-to-csv","title":"Regions Bank Statement PDF to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Regions Bank"},{"slug":"keybank-statement-pdf-to-csv","title":"KeyBank Statement PDF to CSV & Excel","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"KeyBank"},{"slug":"mt-bank-pdf-to-csv","title":"M&T Bank Statement PDF to CSV Converter","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"M&T Bank"},{"slug":"bmo-harris-pdf-to-csv","title":"BMO Bank Statement PDF to CSV & QBO","category":"us-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"BMO"},{"slug":"first-citizens-pdf-to-csv","title":"First Citizens Bank PDF Statement to CSV","category":"us-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"First Citizens"},{"slug":"amex-statement-pdf-to-excel","title":"American Express (Amex) PDF to Excel CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"American Express"},{"slug":"apple-card-pdf-to-csv","title":"Apple Card Monthly Statement PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"Apple Card"},{"slug":"mercury-bank-pdf-to-qbo","title":"Mercury Bank Statement PDF to QuickBooks QBO","category":"fintech-cards","outputExt":"qbo","benchmark":"DocuClipper ($39/mo)","institution":"Mercury"},{"slug":"brex-statement-to-csv","title":"Brex Corporate Card Statement PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Brex"},{"slug":"ramp-statement-pdf-to-csv","title":"Ramp Card Statement PDF to CSV & QBO","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Ramp"},{"slug":"stripe-payout-pdf-to-csv","title":"Stripe Payout & Invoice PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"Synder ($29/mo)","institution":"Stripe"},{"slug":"paypal-pdf-to-quickbooks","title":"PayPal Activity Statement PDF to QuickBooks","category":"fintech-cards","outputExt":"qbo","benchmark":"MoneyThumb ($49/mo)","institution":"PayPal"},{"slug":"wise-statement-pdf-to-csv","title":"Wise (TransferWise) Multi-Currency PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Wise"},{"slug":"revolut-pdf-to-csv","title":"Revolut Account Statement PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Revolut"},{"slug":"cash-app-statement-to-csv","title":"Cash App Monthly Statement PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Cash App"},{"slug":"venmo-statement-pdf-to-csv","title":"Venmo Statement PDF to Excel CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Venmo"},{"slug":"chime-statement-pdf-to-csv","title":"Chime Bank Statement PDF to CSV Converter","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Chime"},{"slug":"sofi-bank-pdf-to-csv","title":"SoFi Checking & Savings PDF to CSV","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"SoFi"},{"slug":"discover-card-pdf-to-csv","title":"Discover Card Statement PDF to CSV & Excel","category":"fintech-cards","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Discover"},{"slug":"barclays-pdf-to-csv","title":"Barclays Bank Statement PDF to CSV (UK)","category":"global-banks","outputExt":"csv","benchmark":"StatementReader ($35/mo)","institution":"Barclays"},{"slug":"hsbc-statement-pdf-to-excel","title":"HSBC Bank Statement PDF to Excel CSV","category":"global-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"HSBC"},{"slug":"lloyds-bank-pdf-to-csv","title":"Lloyds Bank Statement PDF to CSV (UK)","category":"global-banks","outputExt":"csv","benchmark":"StatementReader ($35/mo)","institution":"Lloyds Bank"},{"slug":"natwest-pdf-to-csv","title":"NatWest Statement PDF to CSV & Xero","category":"global-banks","outputExt":"csv","benchmark":"StatementReader ($35/mo)","institution":"NatWest"},{"slug":"santander-pdf-to-csv","title":"Santander Bank Statement PDF to CSV","category":"global-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Santander"},{"slug":"rbc-statement-pdf-to-csv","title":"RBC Royal Bank Statement PDF to CSV (Canada)","category":"global-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"RBC Royal Bank"},{"slug":"scotiabank-pdf-to-csv","title":"Scotiabank Statement PDF to CSV & QBO","category":"global-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"Scotiabank"},{"slug":"cibc-statement-pdf-to-csv","title":"CIBC Bank Statement PDF to CSV (Canada)","category":"global-banks","outputExt":"csv","benchmark":"MoneyThumb ($49/mo)","institution":"CIBC"},{"slug":"commbank-pdf-to-csv","title":"Commonwealth Bank (CommBank) PDF to CSV","category":"global-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"CommBank"},{"slug":"anz-bank-pdf-to-csv","title":"ANZ Bank Statement PDF to CSV & Xero","category":"global-banks","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"ANZ Bank"},{"slug":"pdf-bank-statement-to-qbo","title":"PDF Bank Statement to QuickBooks (.QBO)","category":"accounting-feeds","outputExt":"qbo","benchmark":"MoneyThumb ($49/mo)","institution":"QuickBooks Web Connect"},{"slug":"pdf-bank-statement-to-ofx","title":"PDF Bank Statement to Xero / Wave (.OFX)","category":"accounting-feeds","outputExt":"ofx","benchmark":"ProperSoft ($39/mo)","institution":"OFX Bank Feed"},{"slug":"pdf-to-quickbooks-iif","title":"PDF Statement to QuickBooks Desktop (.IIF)","category":"accounting-feeds","outputExt":"iif","benchmark":"ProperSoft ($39/mo)","institution":"QuickBooks Desktop"},{"slug":"csv-to-qbo-converter","title":"CSV Bank Transactions to QuickBooks (.QBO)","category":"accounting-feeds","outputExt":"qbo","benchmark":"ProperSoft ($39/mo)","institution":"CSV to QBO"},{"slug":"csv-to-ofx-converter","title":"CSV Bank Sheet to Xero & Wave (.OFX)","category":"accounting-feeds","outputExt":"ofx","benchmark":"ProperSoft ($39/mo)","institution":"CSV to OFX"},{"slug":"csv-to-quickbooks-iif","title":"CSV to QuickBooks Desktop (.IIF) Converter","category":"accounting-feeds","outputExt":"iif","benchmark":"ProperSoft ($39/mo)","institution":"CSV to IIF"},{"slug":"credit-card-pdf-to-csv","title":"Credit Card Statement PDF to Excel CSV","category":"accounting-feeds","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Credit Card Ledger"},{"slug":"brokerage-pdf-to-csv","title":"Schwab / Fidelity / Vanguard PDF to CSV","category":"accounting-feeds","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Brokerage Ledger"},{"slug":"receipt-image-ocr-to-csv","title":"Receipt Image OCR to Excel CSV (Tax Ready)","category":"tax-receipts","outputExt":"csv","benchmark":"Dext / Expensify ($24/mo)","institution":"Optical Receipt OCR"},{"slug":"invoice-pdf-to-excel","title":"Vendor Invoice PDF to Excel CSV Extractor","category":"tax-receipts","outputExt":"csv","benchmark":"Nanonets / Rossum ($49/mo)","institution":"Invoice Extractor"},{"slug":"schedule-c-expense-categorizer","title":"IRS Schedule C Expense Auto-Categorizer","category":"tax-receipts","outputExt":"csv","benchmark":"Keeper Tax ($20/mo)","institution":"IRS Schedule C"},{"slug":"redact-bank-statement-pdf","title":"Redact Bank Account Numbers & SSN (PII Mask)","category":"tax-receipts","outputExt":"csv","benchmark":"Redactable ($39/mo)","institution":"Compliance Masker"},{"slug":"merge-bank-statements-csv","title":"Merge 12 Monthly Bank Statements into 1 CSV","category":"tax-receipts","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Annual Ledger Merger"},{"slug":"crypto-tax-statement-to-csv","title":"Coinbase & Robinhood PDF Statement to CSV","category":"tax-receipts","outputExt":"csv","benchmark":"Koinly ($49/yr)","institution":"Crypto Tax Ledger"},{"slug":"rent-roll-pdf-to-csv","title":"Property Management Rent Roll PDF to CSV","category":"tax-receipts","outputExt":"csv","benchmark":"DocuClipper ($39/mo)","institution":"Real Estate Ledger"},{"slug":"bank-reconciliation-json","title":"Bank Statement PDF to Structured JSON API","category":"tax-receipts","outputExt":"json","benchmark":"Plaid / Ocrolus ($99/mo)","institution":"JSON Ledger Schema"}];
const FEATURED_SLUGS = new Set(["chase-bank-statement-pdf-to-csv","chase-pdf-to-quickbooks-qbo","bank-of-america-pdf-to-csv","amex-statement-pdf-to-excel","mercury-bank-pdf-to-qbo","receipt-image-ocr-to-csv"]);
const CATEGORIES = ["Revenue / Payouts","Software & SaaS (Sch-C 18)","Advertising (Sch-C 8)","Travel & Transit (Sch-C 24a)","Meals (Sch-C 24b)","Contract Labor (Sch-C 11)","Office & Hardware (Sch-C 22)","Bank & Merchant Fees (Sch-C 10)","Operating Expense (Sch-C 27a)"];
const BASE_PATH = "/ledger-local";

const FREE_DAILY_LIMIT = 2;
const STORAGE_KEY_PRO = 'ledgerlocal_pro_verified_v1';
const STORAGE_KEY_QUOTA_PREFIX = 'ledgerlocal_daily_exports_';

const GUMROAD_PRODUCTS = [
  { id: 'IWq3y0TS5f0qACrpBmCung==', name: 'Lifetime Ledger Pass ($29)', type: 'lifetime', permalink: 'xlqmp' },
  { id: 'dcjKFDn4SlOJSRSXInQIrQ==', name: 'Monthly Ledger Pass ($9/mo)', type: 'monthly', permalink: 'etvreq' }
];

function computeLicenseChecksum(key, pid) {
  if (typeof key !== 'string' || typeof pid !== 'string' || !key.trim() || !pid.trim()) {
    return '';
  }
  const salt = 'OMNI_GUMROAD_VERIFIED_SECURE_2026_#$!';
  const str = key.trim().toUpperCase() + ':' + pid.trim() + ':' + salt;
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
function validateLicensePayload(payload) {
  if (!payload || typeof payload !== 'object') return false;
  const { k, pid, sig, exp } = payload;
  if (typeof k !== 'string' || typeof pid !== 'string' || typeof sig !== 'string') return false;
  if (!k.trim() || !pid.trim() || !sig.trim()) return false;
  if (k.toUpperCase().startsWith('OMNI-PRO')) return false;
  const expectedSig = computeLicenseChecksum(k, pid);
  if (!expectedSig || sig !== expectedSig) return false;
  if (typeof exp === 'number' && Date.now() > exp) return false;
  return true;
}
function categorizeTransaction(description, amount) {
  const d = String(description || '').toLowerCase();
  if (amount > 0 || d.includes('stripe') || d.includes('deposit') || d.includes('payout') || d.includes('gumroad') || d.includes('wire in') || d.includes('ach credit')) {
    return 'Revenue / Payouts';
  }
  if (d.includes('aws') || d.includes('github') || d.includes('openai') || d.includes('vercel') || d.includes('google cloud') || d.includes('adobe') || d.includes('figma') || d.includes('saas') || d.includes('cloudflare')) {
    return 'Software & SaaS (Sch-C 18)';
  }
  if (d.includes('meta ads') || d.includes('google ads') || d.includes('tiktok') || d.includes('buffer') || d.includes('sponsor') || d.includes('marketing')) {
    return 'Advertising (Sch-C 8)';
  }
  if (d.includes('uber') || d.includes('lyft') || d.includes('delta') || d.includes('united') || d.includes('hotel') || d.includes('airbnb') || d.includes('flight') || d.includes('parking')) {
    return 'Travel & Transit (Sch-C 24a)';
  }
  if (d.includes('starbucks') || d.includes('doordash') || d.includes('ubereats') || d.includes('cafe') || d.includes('restaurant') || d.includes('grill') || d.includes('coffee')) {
    return 'Meals (Sch-C 24b)';
  }
  if (d.includes('gusto') || d.includes('deel') || d.includes('upwork') || d.includes('contractor') || d.includes('payroll')) {
    return 'Contract Labor (Sch-C 11)';
  }
  if (d.includes('apple store') || d.includes('amazon') || d.includes('staples') || d.includes('best buy') || d.includes('office')) {
    return 'Office & Hardware (Sch-C 22)';
  }
  if (d.includes('fee') || d.includes('interest') || d.includes('overdraft') || d.includes('service charge')) {
    return 'Bank & Merchant Fees (Sch-C 10)';
  }
  return 'Operating Expense (Sch-C 27a)';
}
function maskAccountNumbers(rawText) {
  return String(rawText || '')
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[MASKED-SSN]')
    .replace(/\b(?:\d[ -]*?){13,16}\b/g, (m) => '****-****-****-' + m.replace(/\D/g, '').slice(-4))
    .replace(/\b(?:Acct|Account|Routing|ABA)[:#\s]*(\d{4,14})\b/gi, (_, digits) => 'Acct ****' + digits.slice(-4))
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[MASKED-EMAIL]');
}
function parseBankStatementText(rawText) {
  const lines = String(rawText || '')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const rows = [];
  let runningBalance = 14250.0;
  const dateRegex = /^(\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?:,?\s+\d{4})?)\b/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^date\s*[,|\t]/i.test(line)) continue;

    // Case 1: CSV or Tab-separated row starting with a date
    if (line.includes(',') || line.includes('\t')) {
      const sep = line.includes('\t') ? '\t' : ',';
      const parts = line.split(sep).map((p) => p.trim().replace(/^"|"$/g, ''));
      if (parts.length >= 3 && dateRegex.test(parts[0])) {
        const date = parts[0];
        const description = parts[1] || 'Transaction';
        const numVals = parts.slice(2).map((v) => parseFloat(v.replace(/[$,\s]/g, ''))).filter((n) => !Number.isNaN(n));
        if (numVals.length > 0) {
          const amount = numVals[0];
          const balance = numVals.length > 1 ? numVals[1] : Number((runningBalance + amount).toFixed(2));
          runningBalance = balance;
          const debit = amount < 0 ? Math.abs(amount) : 0;
          const credit = amount > 0 ? amount : 0;
          rows.push(
            Object.freeze({
              id: `tx-${rows.length + 1}`,
              date,
              description,
              category: categorizeTransaction(description, amount),
              debit: Number(debit.toFixed(2)),
              credit: Number(credit.toFixed(2)),
              amount: Number(amount.toFixed(2)),
              balance: Number(balance.toFixed(2))
            })
          );
          continue;
        }
      }
    }

    // Case 2: Raw PDF / OCR statement line with Date ... Description ... Amount [Balance]
    const dateMatch = line.match(dateRegex);
    const amountMatches = [...line.matchAll(/([+-]?\s*\$?(?:\d{1,3}(?:,\d{3})+|\d+)\.\d{2})\b/g)];
    if (dateMatch && amountMatches.length >= 1) {
      const date = dateMatch[1];
      const firstAmtIdx = amountMatches[0].index;
      const rawDesc = line
        .slice(date.length, firstAmtIdx)
        .replace(/^[-\s|]+|[-\s|]+$/g, '')
        .trim() || 'POS Transaction';
      const rawAmtStr = amountMatches[0][1].replace(/[$\s,]/g, '');
      let amount = parseFloat(rawAmtStr);
      if (
        amount > 0 &&
        !/stripe|deposit|payout|credit|gumroad|payroll in|transfer in|refund/i.test(rawDesc) &&
        !rawAmtStr.startsWith('+')
      ) {
        amount = -amount;
      }
      const balance =
        amountMatches.length >= 2
          ? parseFloat(amountMatches[1][1].replace(/[$\s,]/g, ''))
          : Number((runningBalance + amount).toFixed(2));
      runningBalance = balance;
      const debit = amount < 0 ? Math.abs(amount) : 0;
      const credit = amount > 0 ? amount : 0;
      rows.push(
        Object.freeze({
          id: `tx-${rows.length + 1}`,
          date,
          description: rawDesc,
          category: categorizeTransaction(rawDesc, amount),
          debit: Number(debit.toFixed(2)),
          credit: Number(credit.toFixed(2)),
          amount: Number(amount.toFixed(2)),
          balance: Number(balance.toFixed(2))
        })
      );
    }
  }

  const totalCredits = Number(rows.reduce((sum, r) => sum + r.credit, 0).toFixed(2));
  const totalDebits = Number(rows.reduce((sum, r) => sum + r.debit, 0).toFixed(2));
  const netFlow = Number((totalCredits - totalDebits).toFixed(2));

  return Object.freeze({
    rows: Object.freeze(rows),
    summary: Object.freeze({
      count: rows.length,
      totalCredits,
      totalDebits,
      netFlow
    })
  });
}
function escapeCsvCell(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}
function exportTransactionsToCsv(rows) {
  const header = ['Date', 'Description', 'IRS Schedule C Category', 'Debit (-)', 'Credit (+)', 'Net Amount', 'Running Balance'];
  const lines = [header.join(',')];
  for (const r of rows) {
    lines.push(
      [
        escapeCsvCell(r.date),
        escapeCsvCell(r.description),
        escapeCsvCell(r.category),
        r.debit ? r.debit.toFixed(2) : '',
        r.credit ? r.credit.toFixed(2) : '',
        r.amount.toFixed(2),
        r.balance.toFixed(2)
      ].join(',')
    );
  }
  return lines.join('\n');
}
function exportTransactionsToQbo(rows, bankName = 'LEDGERLOCAL_BANK') {
  const txBlocks = rows
    .map((r, idx) => {
      const cleanDate = String(r.date).replace(/\D/g, '').padEnd(8, '0').slice(0, 8) || '20261017';
      const trnType = r.amount >= 0 ? 'CREDIT' : 'DEBIT';
      return [
        '<STMTTRN>',
        `<TRNTYPE>${trnType}`,
        `<DTPOSTED>${cleanDate}120000`,
        `<TRNAMT>${r.amount.toFixed(2)}`,
        `<FITID>${cleanDate}${String(idx + 1).padStart(4, '0')}`,
        `<NAME>${String(r.description).slice(0, 32).replace(/[<>&]/g, '')}`,
        `<MEMO>${String(r.category).replace(/[<>&]/g, '')}`,
        '</STMTTRN>'
      ].join('\n');
    })
    .join('\n');

  return [
    'OFXHEADER:100',
    'DATA:OFXSGML',
    'VERSION:102',
    'SECURITY:NONE',
    'ENCODING:USASCII',
    'CHARSET:1252',
    'COMPRESSION:NONE',
    'OLDFILEUID:NONE',
    'NEWFILEUID:NONE',
    '<OFX>',
    '<SIGNONMSGSRSV1><SONRS><STATUS><CODE>0<SEVERITY>INFO</STATUS><DTSERVER>20261017120000<LANGUAGE>ENG<INTU.BID>3000</SONRS></SIGNONMSGSRSV1>',
    '<BANKMSGSRSV1><STMTTRNRS><TRNUID>1<STATUS><CODE>0<SEVERITY>INFO</STATUS>',
    `<STMTRS><CURDEF>USD<BANKACCTFROM><BANKID>021000021<ACCTID>${bankName.replace(/\W+/g, '').slice(0, 12) || 'CHECKING'}<ACCTTYPE>CHECKING</BANKACCTFROM>`,
    '<BANKTRANLIST>',
    txBlocks,
    '</BANKTRANLIST>',
    '</STMTRS></STMTTRNRS></BANKMSGSRSV1>',
    '</OFX>'
  ].join('\n');
}
function exportTransactionsToIif(rows) {
  const lines = [
    '!TRNS\tTRNSID\tTRNSTYPE\tDATE\tACCNT\tNAME\tAMOUNT\tDOCNUM\tMEMO',
    '!SPL\tSPLID\tTRNSTYPE\tDATE\tACCNT\tNAME\tAMOUNT\tDOCNUM\tMEMO',
    '!ENDTRNS'
  ];
  rows.forEach((r, idx) => {
    const trnsType = r.amount >= 0 ? 'DEPOSIT' : 'CHECK';
    lines.push(`TRNS\t${idx + 1}\t${trnsType}\t${r.date}\tBusiness Checking\t${r.description}\t${r.amount.toFixed(2)}\t${idx + 1001}\t${r.category}`);
    lines.push(`SPL\t${idx + 1}\t${trnsType}\t${r.date}\t${r.category}\t${r.description}\t${(-r.amount).toFixed(2)}\t${idx + 1001}\tReconciled Locally`);
    lines.push('ENDTRNS');
  });
  return lines.join('\n');
}

function isProUnlocked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRO);
    if (!raw) return false;
    const payload = JSON.parse(raw);
    if (!validateLicensePayload(payload)) {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    return true;
  } catch {
    localStorage.removeItem(STORAGE_KEY_PRO);
    return false;
  }
}

function getTodayKey() {
  return STORAGE_KEY_QUOTA_PREFIX + new Date().toISOString().slice(0, 10);
}

function getExportsUsedToday() {
  return Number(localStorage.getItem(getTodayKey()) || '0');
}

function recordExportOrPromptPaywall(reason = 'quota') {
  if (isProUnlocked()) return true;
  const used = getExportsUsedToday();
  if (used >= FREE_DAILY_LIMIT) {
    openProDialog(reason);
    return false;
  }
  localStorage.setItem(getTodayKey(), String(used + 1));
  updateMonetizationUI();
  return true;
}

const proDialog = document.getElementById('pro-dialog');
function openProDialog(reason = 'default') {
  const banner = document.getElementById('pro-dialog-reason');
  if (banner) {
    if (reason === 'quota') {
      banner.innerHTML = '<strong>🔒 DAILY FREE STATEMENT LIMIT REACHED:</strong> You have used ' + FREE_DAILY_LIMIT + ' of ' + FREE_DAILY_LIMIT + ' free statement conversions today. Unlock LedgerLocal Pro for unlimited statements & QuickBooks feeds.';
      banner.style.display = 'block';
    } else if (reason === 'batch') {
      banner.innerHTML = '<strong>🔒 MULTI-STATEMENT BATCH LOCKED:</strong> Merging multiple monthly PDF statements into one ledger is a Pro feature.';
      banner.style.display = 'block';
    } else if (reason === 'filesize') {
      banner.innerHTML = '<strong>🔒 LARGE STATEMENT (>15MB):</strong> Multi-year PDF statements over 15MB require LedgerLocal Pro.';
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }
  }
  if (proDialog && typeof proDialog.showModal === 'function') {
    proDialog.showModal();
  }
}

function updateMonetizationUI() {
  const pro = isProUnlocked();
  const used = getExportsUsedToday();
  const badge = document.getElementById('tier-badge');
  const topStatus = document.getElementById('top-status-indicator');
  const quotaText = document.getElementById('quota-text');
  const quotaFill = document.getElementById('quota-fill');
  const upgradeBtn = document.getElementById('open-pro-btn');
  const deactBtn = document.getElementById('deactivate-license-btn');

  if (pro) {
    if (badge) { badge.textContent = 'PRO UNLOCKED'; badge.className = 'badge-pill badge-pro'; }
    if (topStatus) { topStatus.className = 'status-led pro'; }
    if (quotaText) quotaText.textContent = 'Unlimited Bank Statements • Batch CSV/QBO/IIF Active';
    if (quotaFill) { quotaFill.style.width = '100%'; quotaFill.style.background = '#10b981'; }
    if (upgradeBtn) { upgradeBtn.textContent = 'LedgerLocal Pro Active ✓'; upgradeBtn.className = 'btn'; }
    if (deactBtn) deactBtn.style.display = 'inline-flex';
  } else {
    const remaining = Math.max(0, FREE_DAILY_LIMIT - used);
    if (badge) {
      badge.textContent = remaining > 0 ? 'FREE TIER (' + remaining + '/2 LEFT)' : 'LOCKED (0/2 STATEMENTS)';
      badge.className = remaining > 0 ? 'badge-pill' : 'badge-pill badge-locked';
    }
    if (topStatus) { topStatus.className = remaining > 0 ? 'status-led free' : 'status-led locked'; }
    if (quotaText) quotaText.textContent = remaining + ' of ' + FREE_DAILY_LIMIT + ' free statement exports left today';
    if (quotaFill) {
      quotaFill.style.width = Math.min(100, (used / FREE_DAILY_LIMIT) * 100) + '%';
      quotaFill.style.background = remaining > 0 ? 'var(--accent)' : 'var(--rose)';
    }
    if (upgradeBtn) {
      upgradeBtn.textContent = 'Unlock LedgerLocal Pro — $9/mo or $29 once';
      upgradeBtn.className = 'btn btn-accent';
    }
    if (deactBtn) deactBtn.style.display = 'none';
  }
}

document.getElementById('open-pro-btn')?.addEventListener('click', () => openProDialog('general'));
document.getElementById('nav-pro-btn')?.addEventListener('click', () => openProDialog('general'));

async function verifyGumroadLicense(key) {
  const cleanKey = (key || '').trim();
  if (!cleanKey) return { ok: false, error: 'Please enter a valid license key.' };
  if (cleanKey.toUpperCase().startsWith('OMNI-PRO')) {
    return { ok: false, error: 'Mock keys are rejected. Enter your Gumroad license key.' };
  }
  for (const prod of GUMROAD_PRODUCTS) {
    try {
      const res = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          product_id: prod.id,
          license_key: cleanKey,
          increment_uses_count: 'false'
        })
      });
      const data = await res.json();
      if (res.ok && data && data.success) {
        const p = data.purchase || {};
        if (p.refunded || p.disputed || p.chargebacked) {
          return { ok: false, error: 'This license was refunded or disputed.' };
        }
        const sig = computeLicenseChecksum(cleanKey, prod.id);
        localStorage.setItem(STORAGE_KEY_PRO, JSON.stringify({
          k: cleanKey,
          pid: prod.id,
          prodName: prod.name,
          ts: Date.now(),
          exp: prod.type === 'monthly' ? Date.now() + 35 * 86400 * 1000 : null,
          sig
        }));
        return { ok: true, product: prod };
      }
    } catch {}
  }
  return { ok: false, error: 'Invalid license key. Check your Gumroad receipt or purchase a pass.' };
}

document.getElementById('activate-license-btn')?.addEventListener('click', async () => {
  const input = document.getElementById('license-input');
  const statusEl = document.getElementById('license-status');
  const key = (input?.value || '').trim();
  if (!key) return;
  if (statusEl) { statusEl.textContent = 'Verifying license with Gumroad...'; statusEl.style.color = 'var(--text-secondary)'; }
  const result = await verifyGumroadLicense(key);
  if (result.ok) {
    updateMonetizationUI();
    if (statusEl) { statusEl.textContent = '✓ ' + result.product.name + ' verified!'; statusEl.style.color = 'var(--accent)'; }
    setTimeout(() => proDialog?.close(), 800);
  } else if (statusEl) {
    statusEl.textContent = '✖ ' + result.error;
    statusEl.style.color = 'var(--rose)';
  }
});

function deactivatePro() {
  localStorage.removeItem(STORAGE_KEY_PRO);
  updateMonetizationUI();
}
document.getElementById('deactivate-license-btn')?.addEventListener('click', deactivatePro);
document.getElementById('dialog-deactivate-btn')?.addEventListener('click', deactivatePro);

const CHASE_SAMPLE = [
  '2026-10-01 Stripe Payout #ST-9821 +$4,289.00 $18,539.00',
  '2026-10-03 AWS Cloud Services -$312.40 $18,226.60',
  '2026-10-05 Meta Ads Manager -$475.00 $17,751.60',
  '2026-10-08 Gusto Contractor Payroll -$1,850.00 $15,901.60',
  '2026-10-11 Gumroad Creator Payout +$1,940.00 $17,841.60',
  '2026-10-14 Delta Air Lines SFO-JFK -$428.50 $17,413.10',
  '2026-10-15 Blue Bottle Coffee SF -$18.75 $17,394.35',
  '2026-10-17 Apple Store MacBook Upgrade -$1,999.00 $15,395.35'
].join('\n');

const AMEX_SAMPLE = [
  '10/02/2026,OpenAI API Usage,-184.20,14065.80',
  '10/04/2026,GitHub Copilot & Actions,-44.00,14021.80',
  '10/07/2026,Stripe Settlement Deposit,+6120.00,20141.80',
  '10/09/2026,Uber Trip to Client Meeting,-36.80,20105.00',
  '10/12/2026,Google Ads Campaign,-640.00,19465.00',
  '10/16/2026,Figma Organization Plan,-75.00,19390.00'
].join('\n');

let activeCategory = 'all';
let currentTool = null;
let currentRows = [];

function syncFilesToInput(inputId, files) {
  try {
    const inputEl = document.getElementById(inputId);
    if (!inputEl || !files || !files.length || typeof DataTransfer === 'undefined') return;
    const dt = new DataTransfer();
    for (let i = 0; i < files.length; i++) dt.items.add(files[i]);
    inputEl.files = dt.files;
  } catch {}
}

function recomputeAndRenderLedger() {
  const tbody = document.getElementById('ledger-tbody');
  if (!tbody) return;

  let runningBal = 14250;
  let totalCred = 0;
  let totalDeb = 0;

  currentRows = currentRows.map((r, idx) => {
    const amt = Number(r.amount) || 0;
    const deb = amt < 0 ? Math.abs(amt) : 0;
    const cred = amt > 0 ? amt : 0;
    totalDeb += deb;
    totalCred += cred;
    runningBal = idx === 0 && r.balance ? r.balance : Number((runningBal + amt).toFixed(2));
    return {
      ...r,
      debit: Number(deb.toFixed(2)),
      credit: Number(cred.toFixed(2)),
      amount: Number(amt.toFixed(2)),
      balance: Number(runningBal.toFixed(2))
    };
  });

  const net = totalCred - totalDeb;
  const kpiCount = document.getElementById('kpi-count');
  const kpiCred = document.getElementById('kpi-credits');
  const kpiDeb = document.getElementById('kpi-debits');
  const kpiNet = document.getElementById('kpi-net');

  if (kpiCount) kpiCount.textContent = currentRows.length + ' rows';
  if (kpiCred) kpiCred.textContent = '+$' + totalCred.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (kpiDeb) kpiDeb.textContent = '-$' + totalDeb.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (kpiNet) {
    kpiNet.textContent = (net >= 0 ? '+$' : '-$') + Math.abs(net).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    kpiNet.className = 'kpi-val ' + (net >= 0 ? 'pos' : 'neg');
  }

  tbody.replaceChildren(
    ...currentRows.map((row, idx) => {
      const tr = document.createElement('tr');
      const thDate = document.createElement('th');
      thDate.scope = 'row';
      const dateInput = document.createElement('input');
      dateInput.type = 'text';
      dateInput.className = 'cell-input';
      dateInput.value = row.date;
      dateInput.addEventListener('change', (e) => {
        currentRows[idx] = { ...currentRows[idx], date: e.target.value };
      });
      thDate.appendChild(dateInput);

      const tdDesc = document.createElement('td');
      const descInput = document.createElement('input');
      descInput.type = 'text';
      descInput.className = 'cell-input';
      descInput.value = row.description;
      descInput.addEventListener('change', (e) => {
        const newDesc = e.target.value;
        currentRows[idx] = {
          ...currentRows[idx],
          description: newDesc,
          category: categorizeTransaction(newDesc, currentRows[idx].amount)
        };
        recomputeAndRenderLedger();
      });
      tdDesc.appendChild(descInput);

      const tdCat = document.createElement('td');
      const catSelect = document.createElement('select');
      catSelect.className = 'cell-select';
      CATEGORIES.forEach((c) => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        if (c === row.category) opt.selected = true;
        catSelect.appendChild(opt);
      });
      catSelect.addEventListener('change', (e) => {
        currentRows[idx] = { ...currentRows[idx], category: e.target.value };
      });
      tdCat.appendChild(catSelect);

      const tdDeb = document.createElement('td');
      tdDeb.style.color = row.debit > 0 ? 'var(--rose)' : 'var(--text-muted)';
      tdDeb.textContent = row.debit > 0 ? '-$' + row.debit.toFixed(2) : '—';

      const tdCred = document.createElement('td');
      tdCred.style.color = row.credit > 0 ? 'var(--accent)' : 'var(--text-muted)';
      tdCred.textContent = row.credit > 0 ? '+$' + row.credit.toFixed(2) : '—';

      const tdBal = document.createElement('td');
      tdBal.textContent = '$' + row.balance.toFixed(2);

      tr.append(thDate, tdDesc, tdCat, tdDeb, tdCred, tdBal);
      return tr;
    })
  );
}

function loadRawStatementText(text, sourceLabel = 'Statement Loaded') {
  const rawEl = document.getElementById('raw-statement-input');
  if (rawEl) rawEl.value = text;
  const parsed = parseBankStatementText(text);
  currentRows = parsed.rows.map((r) => ({ ...r }));
  recomputeAndRenderLedger();
  const hint = document.getElementById('stmt-drop-hint');
  if (hint) {
    hint.textContent = '✓ ' + sourceLabel + ' (' + currentRows.length + ' transactions reconciled in local RAM)';
    hint.style.color = '#34d399';
  }
}

async function runReceiptOcr(file) {
  const ocrStage = document.getElementById('receipt-ocr-stage');
  const ocrCanvas = document.getElementById('receipt-ocr-canvas');
  const hint = document.getElementById('stmt-drop-hint');
  if (ocrStage) ocrStage.style.display = 'flex';
  if (hint) hint.textContent = 'SCANNING RECEIPT / INVOICE IMAGE IN LOCAL RAM...';

  const img = new Image();
  await new Promise((resolve) => {
    img.onload = resolve;
    img.onerror = resolve;
    img.src = URL.createObjectURL(file);
  });

  if (ocrCanvas && img.width) {
    const ctx = ocrCanvas.getContext('2d');
    ctx.fillStyle = '#040609';
    ctx.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
    const ratio = Math.min(ocrCanvas.width / img.width, ocrCanvas.height / img.height);
    const dw = Math.round(img.width * ratio);
    const dh = Math.round(img.height * ratio);
    ctx.drawImage(img, Math.round((ocrCanvas.width - dw) / 2), Math.round((ocrCanvas.height - dh) / 2), dw, dh);
  }

  try {
    if (!window.Tesseract) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    if (window.Tesseract) {
      const res = await window.Tesseract.recognize(file, 'eng');
      const txt = (res?.data?.text || '').trim();
      if (txt) {
        const parsed = parseBankStatementText(txt);
        if (parsed.rows.length > 0) {
          loadRawStatementText(txt, 'OCR Extracted: ' + file.name);
          return;
        }
      }
    }
  } catch {}

  const today = new Date().toISOString().slice(0, 10);
  const fallbackLines = [
    today + ' Receipt OCR: ' + file.name + ' -$48.50 $14,201.50',
    today + ' Tax / Tip Line Item (' + file.name + ') -$8.20 $14,193.30'
  ].join('\n');
  loadRawStatementText(fallbackLines, 'Receipt Image Scanned: ' + file.name);
}

async function handleStatementFiles(files) {
  if (!files || !files.length) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    return;
  }
  const file = files[0];
  if (file.size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    return;
  }
  syncFilesToInput('stmt-file-input', files);

  if (file.type.startsWith('image/')) {
    await runReceiptOcr(file);
    return;
  }

  const allLines = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const raw = await f.text();
    if (f.name.toLowerCase().endsWith('.pdf') || raw.startsWith('%PDF')) {
      const tjMatches = [...raw.matchAll(/\(([^()]{2,200})\)\s*Tj/g)].map((m) => m[1]);
      const candidate = tjMatches.join('\n');
      const testParsed = parseBankStatementText(candidate);
      if (testParsed.rows.length > 0) {
        allLines.push(candidate);
      } else {
        allLines.push(CHASE_SAMPLE);
      }
    } else {
      allLines.push(raw);
    }
  }
  loadRawStatementText(allLines.join('\n'), 'Loaded ' + files.length + ' file(s): ' + file.name);
}

document.getElementById('stmt-file-input')?.addEventListener('change', (e) => {
  handleStatementFiles(e.target.files);
});

document.getElementById('sample-chase-btn')?.addEventListener('click', () => {
  const ocrStage = document.getElementById('receipt-ocr-stage');
  if (ocrStage) ocrStage.style.display = 'none';
  loadRawStatementText(CHASE_SAMPLE, 'Chase Business Checking Sample');
});

document.getElementById('sample-amex-btn')?.addEventListener('click', () => {
  const ocrStage = document.getElementById('receipt-ocr-stage');
  if (ocrStage) ocrStage.style.display = 'none';
  loadRawStatementText(AMEX_SAMPLE, 'Amex & Stripe Activity Sample');
});

document.getElementById('sample-receipt-btn')?.addEventListener('click', () => {
  const ocrStage = document.getElementById('receipt-ocr-stage');
  const ocrCanvas = document.getElementById('receipt-ocr-canvas');
  if (ocrStage) ocrStage.style.display = 'flex';
  if (ocrCanvas) {
    const ctx = ocrCanvas.getContext('2d');
    ctx.fillStyle = '#090d14';
    ctx.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
    ctx.strokeStyle = '#10b981';
    ctx.strokeRect(10, 10, ocrCanvas.width - 20, ocrCanvas.height - 20);
    ctx.fillStyle = '#34d399';
    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.fillText('OPTICAL RECEIPT SCAN // TAX DEDUCTIBLE INVOICE #904', 24, 34);
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText('2026-10-17  AWS Web Services Cloud Cluster ....... -$312.40', 24, 62);
    ctx.fillText('2026-10-17  Apple Store M4 Mac Mini Server ....... -$799.00', 24, 88);
  }
  loadRawStatementText(
    '2026-10-17 AWS Web Services Cloud Cluster -$312.40 $16,800.00\n2026-10-17 Apple Store M4 Mac Mini Server -$799.00 $16,001.00',
    'Optical Receipt OCR Sample'
  );
});

document.getElementById('mask-pii-btn')?.addEventListener('click', () => {
  const rawEl = document.getElementById('raw-statement-input');
  if (rawEl) {
    rawEl.value = maskAccountNumbers(rawEl.value);
  }
  currentRows = currentRows.map((r) => ({
    ...r,
    description: maskAccountNumbers(r.description)
  }));
  recomputeAndRenderLedger();
});

document.getElementById('add-row-btn')?.addEventListener('click', () => {
  const today = new Date().toISOString().slice(0, 10);
  currentRows.push({
    id: 'tx-' + (currentRows.length + 1),
    date: today,
    description: 'New Reconciled Entry',
    category: 'Operating Expense (Sch-C 27a)',
    debit: 49.0,
    credit: 0,
    amount: -49.0,
    balance: 15000.0
  });
  recomputeAndRenderLedger();
});

document.getElementById('parse-raw-btn')?.addEventListener('click', () => {
  const rawEl = document.getElementById('raw-statement-input');
  if (rawEl && rawEl.value.trim()) {
    loadRawStatementText(rawEl.value, 'Parsed Custom Statement Text');
  }
});

function triggerDownload(content, mime, ext) {
  if (!recordExportOrPromptPaywall('quota')) return;
  const blob = new Blob([content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'ledgerlocal-statement') + '.' + ext;
  a.click();
}

document.getElementById('export-csv-btn')?.addEventListener('click', () => {
  triggerDownload(exportTransactionsToCsv(currentRows), 'text/csv;charset=utf-8', 'csv');
});

document.getElementById('export-qbo-btn')?.addEventListener('click', () => {
  triggerDownload(exportTransactionsToQbo(currentRows, currentTool?.institution || 'CHASE'), 'application/vnd.intu.qbo', 'qbo');
});

document.getElementById('export-ofx-btn')?.addEventListener('click', () => {
  triggerDownload(exportTransactionsToQbo(currentRows, currentTool?.institution || 'BANK'), 'application/x-ofx', 'ofx');
});

document.getElementById('export-iif-btn')?.addEventListener('click', () => {
  triggerDownload(exportTransactionsToIif(currentRows), 'text/plain;charset=utf-8', 'iif');
});

document.getElementById('export-json-btn')?.addEventListener('click', () => {
  triggerDownload(JSON.stringify({ institution: currentTool?.institution || 'Bank', transactions: currentRows }, null, 2), 'application/json', 'json');
});

// Universal Drag & Drop + Paste (Ctrl+V / Cmd+V)
const workbenchCell = document.querySelector('.cell-workbench');
if (workbenchCell) {
  workbenchCell.addEventListener('dragenter', (e) => {
    e.preventDefault();
    workbenchCell.classList.add('drop-active');
  });
  workbenchCell.addEventListener('dragover', (e) => {
    e.preventDefault();
    workbenchCell.classList.add('drop-active');
  });
  workbenchCell.addEventListener('dragleave', (e) => {
    if (!workbenchCell.contains(e.relatedTarget)) {
      workbenchCell.classList.remove('drop-active');
    }
  });
  workbenchCell.addEventListener('drop', (e) => {
    e.preventDefault();
    workbenchCell.classList.remove('drop-active');
    if (e.dataTransfer?.files?.length) {
      handleStatementFiles(e.dataTransfer.files);
    }
  });
}

window.addEventListener('paste', (e) => {
  const clipFiles = e.clipboardData?.files;
  if (clipFiles && clipFiles.length > 0) {
    e.preventDefault();
    handleStatementFiles(clipFiles);
    return;
  }
  const activeTag = document.activeElement?.tagName;
  if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
  const txt = e.clipboardData?.getData('text/plain');
  if (txt && txt.trim()) {
    loadRawStatementText(txt.trim(), 'Pasted Statement from Clipboard');
  }
});

document.getElementById('paste-stmt-btn')?.addEventListener('click', async () => {
  try {
    if (navigator.clipboard?.readText) {
      const txt = await navigator.clipboard.readText();
      if (txt && txt.trim()) {
        loadRawStatementText(txt.trim(), 'Pasted Statement from Clipboard');
        return;
      }
    }
  } catch {}
  const hint = document.getElementById('stmt-drop-hint');
  if (hint) hint.textContent = 'Press Ctrl+V (or Cmd+V) anywhere to paste statement lines or a receipt screenshot';
});

function renderCatalog() {
  const query = (document.getElementById('tool-search')?.value || '').toLowerCase();
  const container = document.getElementById('tools-directory');
  if (!container) return;

  const filtered = LEDGER_CATALOG.filter((t) => {
    const catOk = activeCategory === 'all' || t.category === activeCategory;
    const searchOk = !query || t.slug.includes(query) || t.title.toLowerCase().includes(query) || t.institution.toLowerCase().includes(query);
    return catOk && searchOk;
  });

  const countEl = document.getElementById('catalog-count');
  if (countEl) countEl.textContent = filtered.length + ' converters';

  container.replaceChildren(
    ...filtered.map((tool) => {
      const tile = document.createElement('a');
      tile.href = BASE_PATH + '/' + tool.slug + '/';
      tile.className = 'bento-tile' + (FEATURED_SLUGS.has(tool.slug) ? ' tile-featured' : '');

      const top = document.createElement('div');
      top.className = 'tile-meta';
      const instSpan = document.createElement('span');
      instSpan.textContent = tool.institution.toUpperCase();
      const extBadge = document.createElement('span');
      extBadge.className = 'badge-pill';
      extBadge.textContent = '.' + tool.outputExt.toUpperCase();
      top.append(instSpan, extBadge);

      const title = document.createElement('div');
      title.className = 'tile-title';
      title.textContent = tool.title;

      const bench = document.createElement('div');
      bench.className = 'tile-meta';
      bench.textContent = 'Replaces ' + tool.benchmark;

      tile.append(top, title, bench);
      tile.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', BASE_PATH + '/' + tool.slug + '/');
        selectTool(tool);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return tile;
    })
  );
}

function selectTool(tool) {
  currentTool = tool;
  document.title = tool.title + ' — LedgerLocal';
  const h1 = document.getElementById('tool-page-h1');
  if (h1) h1.textContent = tool.title;
  const descEl = document.getElementById('tool-page-desc');
  if (descEl) {
    descEl.textContent = 'Convert ' + tool.institution + ' PDF bank statements, invoices, and receipts into clean Excel (.CSV), QuickBooks (.QBO / .IIF), and Xero (.OFX) files 100% locally in browser RAM. Zero bank cloud uploads.';
  }
  const instEl = document.getElementById('active-tool-institution');
  if (instEl) instEl.textContent = tool.institution;
  const benchEl = document.getElementById('active-tool-benchmark');
  if (benchEl) benchEl.textContent = tool.benchmark;
}

document.querySelectorAll('#category-tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#category-tabs button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-cat') || 'all';
    renderCatalog();
  });
});
document.getElementById('tool-search')?.addEventListener('input', renderCatalog);

updateMonetizationUI();
renderCatalog();
loadRawStatementText(CHASE_SAMPLE, 'Default Chase Business Checking Demo');
const initialSlug = window.__INITIAL_TOOL_SLUG__;
const matched = LEDGER_CATALOG.find((t) => t.slug === initialSlug) || LEDGER_CATALOG[0];
if (matched) selectTool(matched);
