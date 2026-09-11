const companies = {
  "yoshimi-shoji": {
    name: "吉見商事株式会社",
    category: "食品卸売事業",
    desc: "グループ各社との連携を通じて経営基盤を支え、グループ全体の円滑な運営に貢献しています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yoshimi-shoji.svg",
  },
  yamaichi: {
    name: "株式会社ヤマイチ",
    category: "物流事業",
    desc: "物流を基軸に、3PLとロジスティクスコンサルティングを通じて物流の最適化を支援しています。",
    url: "https://www.yamaichi-y.jp/",
    logo: "images/common/group/yamaichi.svg",
  },
  yoshimifoods: {
    name: "株式会社ヨシミフーズ",
    category: "食品事業",
    desc: "冷凍・冷蔵食品のコールドチェーンを基盤に、安全・安心な食品流通を支えています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yoshimifoods.svg",
  },
  skillplaza: {
    name: "株式会社スキルプラザ",
    category: "人材サービス事業",
    desc: "人材派遣・職業紹介・業務請負を通じ、企業と働く人双方のニーズに応えています。",
    url: "https://skillplaza.co.jp/",
    logo: "images/common/group/skillplaza.svg",
  },
  yasuuemon: {
    name: "株式会社松本安右衛門商店",
    category: "グループ事業",
    desc: "1882年創業、熊谷に根差す「街の不動産屋」として、土地・建物のニーズに応えています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yasuuemon.svg",
  },
  asentrust: {
    name: "株式会社アゼントラスト",
    category: "製造事業",
    desc: "木製パレットを中心とした木材・資材を扱い、資源循環と環境負荷の低減に取り組んでいます。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/asentrust.svg",
  },
  sanei: {
    name: "三栄実業株式会社",
    category: "グループ事業",
    desc: "木製パレットの製造を中心に、培った技術と経験を活かしたものづくりに取り組んでいます。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/sanei.svg",
  },
  yoshimiyashoten: {
    name: "合資会社吉見屋商店",
    category: "グループ事業",
    desc: "1924年創業、100年以上の歴史を持つ吉見グループの原点として、不動産事業を担っています。",
    url: "https://yoshimi-net.co.jp/business/",
    logo: "images/common/group/yoshimiyashoten.svg",
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
