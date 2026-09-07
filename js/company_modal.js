const companies = {
  "yoshimi-group": {
    name: "吉見グループ株式会社",
    category: "持株会社",
    desc: "物流を中核に、人材サービス・不動産・パレット製造など多様な事業を展開し、地域社会とともに新たな価値を創造します。",
    url: "https://yoshimi-net.co.jp/",
    logo: "images/common/group/yoshimi-group.svg",
  },
  "yoshimi-shoji": {
    name: "吉見商事株式会社",
    category: "食品卸売事業",
    desc: "食品の調達・販売・流通を担う総合食品商社として、地域の食を支えます。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yoshimi-shoji.svg",
  },
  yamaichi: {
    name: "株式会社ヤマイチ",
    category: "物流事業",
    desc: "3PLを中心とした物流全般の受託とロジスティクス提案で、お客様の課題解決に貢献します。",
    url: "https://www.yamaichi-y.jp/",
    logo: "images/common/group/yamaichi.svg",
  },
  yoshimifoods: {
    name: "株式会社ヨシミフーズ",
    category: "食品事業",
    desc: "食品関連事業を通じて、安全・安心な食の供給と地域の食文化を支えます。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yoshimifoods.svg",
  },
  skillplaza: {
    name: "株式会社スキルプラザ",
    category: "人材サービス事業",
    desc: "総合人材サービスとして、採用から定着までを支援し、企業の人事課題解決に取り組みます。",
    url: "https://skillplaza.co.jp/",
    logo: "images/common/group/skillplaza.svg",
  },
  yasuuemon: {
    name: "株式会社松本安右衛門商店",
    category: "グループ事業",
    desc: "吉見グループの一員として、地域とともに事業を展開しています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yasuuemon.svg",
  },
  asentrust: {
    name: "株式会社アゼントラスト",
    category: "製造事業",
    desc: "木製パレットのオーダーメイド製造・販売、不要パレットの回収・リサイクルを通じた環境配慮型の物流支援で持続可能な社会に貢献します。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/asentrust.svg",
  },
  sanei: {
    name: "三栄実業株式会社",
    category: "グループ事業",
    desc: "吉見グループの一員として、地域とともに事業を展開しています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/sanei.svg",
  },
};

const list = document.getElementById("topAboutList");
const modal = document.getElementById("companyModal");
const closeBtn = document.getElementById("companyModalClose");
const logoEl = document.getElementById("companyModalLogo");
const categoryEl = document.getElementById("companyModalCategory");
const titleEl = document.getElementById("companyModalTitle");
const descEl = document.getElementById("companyModalDesc");
const linkEl = document.getElementById("companyModalLink");
const CLOSE_MS = 320;

function setupMarquee() {
  if (!list) return;

  const items = [...list.children];
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("button").forEach((btn) => {
      btn.setAttribute("tabindex", "-1");
    });
    list.appendChild(clone);
  });

  list.classList.add("is-ready");
}

function openCompanyModal(companyId) {
  const data = companies[companyId];
  if (!data || !modal) return;

  logoEl.src = data.logo;
  logoEl.alt = data.name;
  categoryEl.textContent = data.category;
  titleEl.textContent = data.name;
  descEl.textContent = data.desc;

  if (data.url) {
    linkEl.href = data.url;
    linkEl.hidden = false;
  } else {
    linkEl.removeAttribute("href");
    linkEl.hidden = true;
  }

  list?.classList.add("is-paused");
  modal.classList.remove("is-closing");
  modal.showModal();
}

function closeCompanyModal() {
  if (!modal?.open || modal.classList.contains("is-closing")) return;

  modal.classList.add("is-closing");

  const panel = modal.querySelector(".company-modal__panel");
  let finished = false;

  const finish = () => {
    if (finished) return;
    finished = true;
    panel?.removeEventListener("animationend", onEnd);
    modal.close();
    modal.classList.remove("is-closing");
  };

  const onEnd = (event) => {
    if (event.animationName !== "company-modal-panel-out") return;
    finish();
  };

  panel?.addEventListener("animationend", onEnd);
  window.setTimeout(finish, CLOSE_MS);
}

setupMarquee();

list?.addEventListener("click", (event) => {
  const btn = event.target.closest(".top-aboutList__btn");
  if (!btn) return;
  openCompanyModal(btn.dataset.company);
});

closeBtn?.addEventListener("click", closeCompanyModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeCompanyModal();
});

modal?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCompanyModal();
});

modal?.addEventListener("close", () => {
  list?.classList.remove("is-paused");
});
