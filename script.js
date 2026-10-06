const cardData = {
  profile: {
    file: "PROFILE.EXE",
    index: "01 / ABOUT",
    title: "About Me",
    content: `
      <ul>
        <li><strong>学校</strong><span>同济大学</span></li>
        <li><strong>家乡</strong><span>四川</span></li>
        <li><strong>年龄</strong><span>24 岁</span></li>
        <li><strong>MBTI</strong><span>ESFJ</span></li>
        <li><strong>星座</strong><span>巨蟹座</span></li>
      </ul>`
  },
  hobbies: {
    file: "HOBBIES.ZIP",
    index: "02 / HAPPY FILES",
    title: "Things I Love",
    content: `
      <p class="lead">我会反复爱上有生命力且鲜活的自己🌠</p>
      <ul>
        <li><span>看脱口秀，快乐是第一生产力</span></li>
        <li><span>R&amp;B 是日常续航 BGM</span></li>
        <li><span>看到美食会立刻心动</span></li>
        <li><span>电影与故事的忠实观众</span></li>
        <li><span>游泳是放松，也是充电</span></li>
      </ul>`
  },
  skills: {
    file: "SKILLS.APP",
    index: "03 / TOOLBOX",
    title: "How I Create",
    content: `
      <p class="lead">每天都是三好员工 好饿好累好想睡</p>
      <ul class="tag-list">
        <li>AI</li><li>PS</li><li>剪映</li><li>秀米</li><li>SPSS</li><li>Python</li>
      </ul>`
  },
  travel: {
    file: "TRAVEL.MAP",
    index: "01 / WHERE I'VE WANDERED",
    title: "",
    content: `
      <div class="travel-map-meta">
        <span><b>19</b> PLACES LIT UP</span>
        <span class="travel-map-quote">Run to the mountains and sea,<br>chase the wind and freedom.</span>
      </div>
      <div class="travel-map-stage">
        <div class="travel-map-brand" aria-label="小杨足迹">
          <img src="assets/travel-lamb-cutout.png" alt="" />
          <span>小杨足迹</span>
        </div>
        <div id="china-map" class="china-map" aria-live="polite">地图加载中…</div>
      </div>`
  },
  concert: {
    file: "LIVE.MEMORIES",
    index: "02 / NIGHTS I'VE SUNG ALONG",
    title: "",
    content: `
      <div class="concert-wall-heading">
        <div><b>MY LIVE ARCHIVE</b><span>7 shows · 7 nights to remember</span></div>
        <span class="concert-wall-stamp">LOUD HEARTS<br>LIVE FOREVER</span>
      </div>
      <div class="concert-wall">
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-wang-leehom.png" style="--crop-y: -16.5%;" alt="王力宏最好的地方 II 演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>王力宏 · 最好的地方 II</strong><span>杭州 · 2026/05/30</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-david-tao-shanghai.png" style="--crop-y: -19.3%;" alt="陶喆 Soul Power II 上海演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>陶喆 · Soul Power II</strong><span>上海 · 2026/05/23</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-jay-chou.png" style="--crop-y: -16.3%;" alt="周杰伦嘉年华演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>周杰伦 · 嘉年华</strong><span>武汉 · 2025/09/26</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-gem.png" style="--crop-y: -13.3%;" alt="邓紫棋 I'm Gloria 演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>邓紫棋 · I'm Gloria</strong><span>上海 · 2025/09/12</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-david-tao.png" style="--crop-y: -19.2%;" alt="陶喆 Soul Power II 演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>陶喆 · Soul Power II</strong><span>常州 · 2025/09/07</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-xusong.png" style="--crop-y: -17.4%;" alt="许嵩呼吸之野演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>许嵩 · 呼吸之野</strong><span>上海 · 2024/08/31</span></div></div>
        </article>
        <article class="concert-cabinet">
          <div class="concert-poster-frame"><img src="assets/concert-joker-xue.png" style="--crop-y: -16.8%;" alt="薛之谦天外来物演唱会海报" /></div>
          <div class="concert-caption"><span class="concert-dot"></span><div><strong>薛之谦 · 天外来物</strong><span>成都 · 2023/09/10</span></div></div>
        </article>
      </div>`
  },
  food: {
    file: "TASTE.LOG",
    index: "03 / FLAVORS I'VE FALLEN FOR",
    title: "",
    content: `
      <div class="food-plog-heading">
        <div>
          <span class="food-plog-kicker">FOOD_PLOG // VOL.01</span>
          <b>A TABLE FULL OF GOOD DAYS</b>
        </div>
        <span class="food-plog-stamp">9 BITES<br>NO REGRETS</span>
      </div>
      <div class="food-plog-grid" aria-label="九张喜欢的美食照片">
        <figure class="food-shot food-shot-01 film-polaroid">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-01.jpg" alt="米饭和像素小羊挂件" loading="eager" />
          <figcaption><b>01</b><span>WARM START</span><em>POLAROID 600</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-02 film-instax">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-02.jpg" alt="满桌香辣菜肴" loading="eager" />
          <figcaption><b>02</b><span>SPICE PARTY</span><em>INSTAX MINI</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-03 film-fuji">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-03.jpg" alt="可爱小熊杯套" loading="eager" />
          <figcaption><b>03</b><span>LITTLE CHEERS</span><em>FUJIFILM</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-04 film-night">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-04.jpg" alt="红椒湘菜与饮品" loading="eager" />
          <figcaption><b>04</b><span>RED-HOT TABLE</span><em>NIGHT EDITION</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-05 film-candy">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-05.jpg" alt="寿司与拌面" loading="eager" />
          <figcaption><b>05</b><span>SUSHI BREAK</span><em>CANDY FILM</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-06 film-silver">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-06.jpg" alt="绿色和蓝色甜点" loading="eager" />
          <figcaption><b>06</b><span>SWEET DAY</span><em>SILVER FRAME</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-07 film-blue">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-07.jpg" alt="香辣川菜拼桌" loading="eager" />
          <figcaption><b>07</b><span>HOT &amp; HAPPY</span><em>SKY BLUE</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-08 film-sun">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-08.jpg" alt="披萨蛋糕和家常菜聚餐" loading="eager" />
          <figcaption><b>08</b><span>FEAST MODE</span><em>SUNNY FILM</em></figcaption>
        </figure>
        <figure class="food-shot food-shot-09 film-rainbow">
          <span class="food-tape" aria-hidden="true"></span>
          <img src="assets/food-plog-09.jpg" alt="两碗海鲜盖饭" loading="eager" />
          <figcaption><b>09</b><span>OCEAN BOWLS</span><em>PRISM FILM</em></figcaption>
        </figure>
      </div>`
  },
  animals: {
    file: "ANIMAL.ROLL",
    index: "04 / CREATURES THAT HAVE MY HEART",
    title: "",
    content: `
      <div class="animal-board-heading">
        <div>
          <b>PAWS, WHISKERS &amp; LITTLE ENCOUNTERS</b>
        </div>
        <span class="animal-board-stamp">PINNED<br>WITH LOVE</span>
      </div>
      <div class="animal-corkboard" aria-label="十六张喜欢的动物照片">
        <figure class="animal-print animal-print-01 photo-paper-kodak">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-01.jpg" alt="橘猫近距离看向镜头" loading="eager" />
          <figcaption><em>KODAK GOLD 200</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-02 photo-paper-fuji">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-02.jpg" alt="夜晚街边被轻抚的橘猫" loading="eager" />
          <figcaption><em>FUJICOLOR C200</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-03 photo-paper-agfa">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-03.jpg" alt="坐在绿植旁的橘白猫" loading="eager" />
          <figcaption><em>AGFA VISTA 200</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-04 photo-paper-cinestill">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-04.jpg" alt="透明舱里的灰色小猫" loading="eager" />
          <figcaption><em>CINESTILL 400D</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-05 photo-paper-lomo">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-05.jpg" alt="阳光下眯着眼的小猫" loading="eager" />
          <figcaption><em>LOMOGRAPHY 100</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-06 photo-paper-ilford">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-06.jpg" alt="戴着墨镜的白色小狗" loading="eager" />
          <figcaption><em>ILFORD XP2</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-07 photo-paper-kodak">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-07.jpg" alt="被手指轻轻触碰的玳瑁猫" loading="eager" />
          <figcaption><em>KODAK PORTRA 400</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-08 photo-paper-fuji">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-08.jpg" alt="被摸着头的黑白猫" loading="eager" />
          <figcaption><em>FUJICOLOR PRO 400H</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-09 photo-paper-agfa">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-09.jpg" alt="坐在石桌上的棕色小狗" loading="eager" />
          <figcaption><em>AGFA OPTIMA 200</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-10 photo-paper-cinestill">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-10.jpg" alt="凑近镜头的橘猫" loading="eager" />
          <figcaption><em>CINESTILL 800T</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-11 photo-paper-lomo">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-11.jpg" alt="夜晚被轻抚的橘猫背影" loading="eager" />
          <figcaption><em>LOMOGRAPHY 800</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-12 photo-paper-kodak">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-12.jpg" alt="女孩与橘猫的合照" loading="eager" />
          <figcaption><em>KODAK ULTRAMAX 400</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-13 photo-paper-fuji">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-13.jpg" alt="被抚摸的白色长毛猫" loading="eager" />
          <figcaption><em>FUJICOLOR 100</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-14 photo-paper-agfa">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-14.jpg" alt="趴在电脑旁回头看的黑白小狗" loading="eager" />
          <figcaption><em>AGFA COLOR 100</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-15 photo-paper-ilford">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-15.jpg" alt="凑近镜头的黑白小狗" loading="eager" />
          <figcaption><em>ILFORD DELTA 400</em></figcaption>
        </figure>
        <figure class="animal-print animal-print-16 photo-paper-cinestill">
          <span class="animal-pin" aria-hidden="true"></span>
          <img src="assets/animal-board-16.jpg" alt="叼着骨头玩具的黑白小狗" loading="eager" />
          <figcaption><em>CINESTILL 50D</em></figcaption>
        </figure>
      </div>`
  },
  future: {
    file: "FUTURE_SELF.EXE",
    index: "04 / FUTURE CHECKLIST",
    title: "The Life I'm Building",
    content: `
      <ul class="future-goal-wall" aria-label="我的十个未来目标">
        <li><span class="goal-text">每年能够旅游三次，出国旅游至少一次</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-travel.png" alt="" /></li>
        <li><span class="goal-text">在 30 岁之前拥有百万存款</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-savings.png" alt="" /></li>
        <li><span class="goal-text">养一只自己的小猫</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-cat.png" alt="" /></li>
        <li><span class="goal-text">拥有一辆自己的小车</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-car.png" alt="" /></li>
        <li><span class="goal-text">每年完成一次全身体检</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-checkup.svg" alt="" /></li>
        <li><span class="goal-text">系统学习理财知识，学会合理投资</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-invest.svg" alt="" /></li>
        <li><span class="goal-text">管理好皮肤和身材，控制对美食的欲望</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-balance.svg" alt="" /></li>
        <li><span class="goal-text">拥有属于自己的小房子和小家</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-home.svg" alt="" /></li>
        <li><span class="goal-text">坚持锻炼，增加肌肉含量</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-strong.svg" alt="" /></li>
        <li><span class="goal-text">学好英语口语</span><img class="note-sticker note-sticker-art" src="assets/future-sticker-english.svg" alt="" /></li>
      </ul>`
  },
  message: {
    file: "MESSAGE.TXT",
    index: "04 / ONE MORE THING",
    title: "Keep Real ☺",
    content: `<p class="lead">我要做生活的嚼嚼者，<br>这辈子唯一放不下的就是筷子。</p>`
  }
};

const modal = document.querySelector(".modal-layer");
const card = document.querySelector(".info-card");
const cardFile = document.querySelector("#card-file");
const cardIndex = document.querySelector("#card-index");
const cardTitle = document.querySelector("#card-title");
const cardContent = document.querySelector("#card-content");
let lastTrigger = null;

// 旅行足迹配置：以后新增地点时，在这里加入“简称: 颜色”即可自动点亮。
const visitedPlaces = {
  "甘肃": "#ffc9c9",
  "青海": "#bcdfff",
  "四川": "#ffe7a3",
  "云南": "#c7efcf",
  "贵州": "#d9cbff",
  "陕西": "#ffd1a8",
  "上海": "#ffc7de",
  "北京": "#c9e4ff",
  "浙江": "#c1eee2",
  "天津": "#ffd9d9",
  "江苏": "#dcefb8",
  "辽宁": "#e6cff5",
  "山东": "#fff0b6",
  "澳门": "#f7cadd",
  "福建": "#c5ebf1",
  "江西": "#dcefc0",
  "湖北": "#cfd8ff",
  "湖南": "#e9c9ef",
  "重庆": "#ffd9b0"
};

const provinceShortNames = {
  "北京市": "北京", "天津市": "天津", "河北省": "河北", "山西省": "山西",
  "内蒙古自治区": "内蒙古", "辽宁省": "辽宁", "吉林省": "吉林", "黑龙江省": "黑龙江",
  "上海市": "上海", "江苏省": "江苏", "浙江省": "浙江", "安徽省": "安徽",
  "福建省": "福建", "江西省": "江西", "山东省": "山东", "河南省": "河南",
  "湖北省": "湖北", "湖南省": "湖南", "广东省": "广东", "广西壮族自治区": "广西",
  "海南省": "海南", "重庆市": "重庆", "四川省": "四川", "贵州省": "贵州",
  "云南省": "云南", "西藏自治区": "西藏", "陕西省": "陕西", "甘肃省": "甘肃",
  "青海省": "青海", "宁夏回族自治区": "宁夏", "新疆维吾尔自治区": "新疆",
  "台湾省": "台湾", "香港特别行政区": "香港", "澳门特别行政区": "澳门"
};

const mapLabelOffsets = {
  "北京": [-10, -24], "天津": [26, 16], "河北": [21, -7], "上海": [31, 5],
  "江苏": [18, -14], "浙江": [21, 14], "安徽": [-12, 14], "山东": [20, -15],
  "河南": [-8, 16], "湖北": [-14, 13], "湖南": [-12, 16], "江西": [18, 17],
  "福建": [22, 16], "辽宁": [16, -16], "吉林": [16, -11], "香港": [24, 18],
  "澳门": [-28, 19], "重庆": [-20, 19], "宁夏": [-18, 12], "海南": [0, 20]
};

let chinaMapData = null;

function geometryToPath(geometry, project) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.map((polygon) => polygon.map((ring) => {
    const points = ring.map((coordinate, index) => {
      const [x, y] = project(coordinate);
      return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
    return `${points} Z`;
  }).join(" ")).join(" ");
}

async function renderTravelMap() {
  const mount = document.querySelector("#china-map");
  if (!mount) return;

  try {
    if (!chinaMapData) {
      if (window.CHINA_PROVINCES) {
        chinaMapData = window.CHINA_PROVINCES;
        mount.dataset.mapSource = "embedded";
      } else {
        const response = await fetch("assets/china-provinces.geojson");
        if (!response.ok) throw new Error(`Map data failed: ${response.status}`);
        chinaMapData = await response.json();
        mount.dataset.mapSource = "fetch";
      }
    }

    const features = chinaMapData.features.filter((feature) => provinceShortNames[feature.properties.name]);
    // A stable mainland-focused frame keeps remote island geometry from shrinking the map.
    const minLongitude = 73.5;
    const maxLongitude = 135.2;
    const minLatitude = 18;
    const maxLatitude = 53.7;
    const width = 1000;
    const height = 620;
    const padding = 24;
    const mercator = (latitude) => Math.log(Math.tan(Math.PI / 4 + latitude * Math.PI / 360));
    const minMercator = mercator(minLatitude);
    const maxMercator = mercator(maxLatitude);
    const project = ([longitude, latitude]) => [
      padding + (longitude - minLongitude) / (maxLongitude - minLongitude) * (width - padding * 2),
      padding + (maxMercator - mercator(latitude)) / (maxMercator - minMercator) * (height - padding * 2)
    ];

    const regions = features.map((feature) => {
      const shortName = provinceShortNames[feature.properties.name];
      const fill = visitedPlaces[shortName] || "#fffaf7";
      const path = geometryToPath(feature.geometry, project);
      return `<path class="map-region${visitedPlaces[shortName] ? " is-visited" : ""}" data-place="${shortName}" d="${path}" fill="${fill}"><title>${shortName}${visitedPlaces[shortName] ? " · 去过" : ""}</title></path>`;
    }).join("");

    const labels = features.map((feature) => {
      const shortName = provinceShortNames[feature.properties.name];
      const center = feature.properties.center || feature.properties.centroid;
      if (!center) return "";
      const [baseX, baseY] = project(center);
      const [offsetX, offsetY] = mapLabelOffsets[shortName] || [0, 0];
      const labelX = baseX + offsetX;
      const labelY = baseY + offsetY;
      const leader = offsetX || offsetY ? `<line class="map-leader" x1="${baseX.toFixed(1)}" y1="${baseY.toFixed(1)}" x2="${labelX.toFixed(1)}" y2="${labelY.toFixed(1)}" />` : "";
      return `${leader}<circle class="map-point" cx="${baseX.toFixed(1)}" cy="${baseY.toFixed(1)}" r="4.5" /><circle class="map-point-core" cx="${baseX.toFixed(1)}" cy="${baseY.toFixed(1)}" r="1.7" /><text class="map-label" x="${labelX.toFixed(1)}" y="${(labelY - 9).toFixed(1)}">${shortName}</text>`;
    }).join("");

    mount.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="china-map-title china-map-desc"><title id="china-map-title">中国旅行足迹地图</title><desc id="china-map-desc">彩色区域为去过的省级行政区，白色区域为尚未点亮的地方。</desc><g fill-rule="evenodd">${regions}</g><g>${labels}</g></svg>`;
  } catch (error) {
    console.error(error);
    mount.innerHTML = "<p class=\"map-error\">地图暂时没有加载成功，请刷新页面重试。</p>";
  }
}

function openCard(key, trigger) {
  const data = cardData[key];
  if (!data) return;
  lastTrigger = trigger;
  cardFile.textContent = data.file;
  cardIndex.textContent = data.index;
  cardTitle.textContent = data.title;
  cardContent.innerHTML = data.content;
  card.classList.toggle("map-card", key === "travel");
  card.classList.toggle("concert-card", key === "concert");
  card.classList.toggle("food-card", key === "food");
  card.classList.toggle("animals-card", key === "animals");
  card.classList.toggle("future-card", key === "future");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (key === "travel") renderTravelMap();
  requestAnimationFrame(() => card.focus());
}

function closeCard() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastTrigger) lastTrigger.focus();
}

document.querySelectorAll("[data-open-card]").forEach((trigger) => {
  trigger.addEventListener("click", () => openCard(trigger.dataset.openCard, trigger));
});

document.querySelectorAll("[data-close-card]").forEach((trigger) => {
  trigger.addEventListener("click", closeCard);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeCard();
});

document.querySelectorAll("[data-scroll-to]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    document.getElementById(trigger.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" });
  });
});

const tracks = [
  { title: "爱你但说不出口", artist: "Karencici", file: "assets/爱你但说不出口 - Karencici.mp3" },
  { title: "别问很可怕", artist: "J.Sheon", file: "assets/别问很可怕 - J.Sheon.mp3" },
  { title: "零距离的思念", artist: "Tiny7", file: "assets/零距离的思念 - Tiny7.mp3" },
  { title: "疲惫的爱", artist: "step.jad依加", file: "assets/疲惫的爱 - step.jad依加.mp3" }
];

for (let index = tracks.length - 1; index > 0; index -= 1) {
  const randomIndex = Math.floor(Math.random() * (index + 1));
  [tracks[index], tracks[randomIndex]] = [tracks[randomIndex], tracks[index]];
}

const musicPlayer = document.querySelector("[data-music-player]");
const musicToggle = document.querySelector(".music-toggle");
const musicAudio = document.querySelector("#background-music");
const playlist = document.querySelector(".playlist");
const currentTrackLabel = document.querySelector(".current-track");
const modeButtons = document.querySelectorAll("[data-play-mode]");
const previousTrackButton = document.querySelector("[data-previous-track]");
const nextTrackButton = document.querySelector("[data-next-track]");
const panelPlayToggle = document.querySelector("[data-panel-play-toggle]");
const playbackProgress = document.querySelector(".playback-progress");
const playbackProgressFill = document.querySelector(".playback-progress-fill");
const elapsedTime = document.querySelector(".elapsed-time");
const durationTime = document.querySelector(".duration-time");
const volumeToggle = document.querySelector("[data-volume-toggle]");
const volumeSteps = document.querySelectorAll("[data-volume-level]");
const volumeReadout = document.querySelector(".volume-readout");
let currentTrackIndex = 0;
let playMode = "order";
const VOLUME_STORAGE_KEY = "forever-young-volume-v1";
let lastAudibleVolume = 0.6;

function readSavedVolume() {
  try {
    const savedValue = localStorage.getItem(VOLUME_STORAGE_KEY);
    if (savedValue === null) return 0.6;
    const parsedValue = Number(savedValue);
    return Number.isFinite(parsedValue) && parsedValue >= 0 && parsedValue <= 1 ? parsedValue : 0.6;
  } catch (error) {
    return 0.6;
  }
}

function saveVolume(volume) {
  try {
    localStorage.setItem(VOLUME_STORAGE_KEY, String(volume));
  } catch (error) {
    // The player still works when storage is unavailable.
  }
}

function updateVolumeUI() {
  if (!musicAudio) return;
  const volume = musicAudio.volume;
  const percentage = Math.round(volume * 100);
  volumeSteps.forEach((step) => {
    const level = Number(step.dataset.volumeLevel);
    step.classList.toggle("is-on", volume > 0 && level <= volume + 0.001);
    step.setAttribute("aria-pressed", String(Math.abs(level - volume) < 0.001));
  });
  if (volumeReadout) volumeReadout.textContent = `${percentage}%`;
  if (volumeToggle) {
    const isMuted = volume === 0;
    volumeToggle.textContent = isMuted ? "MUTED" : "VOL";
    volumeToggle.classList.toggle("is-muted", isMuted);
    volumeToggle.setAttribute("aria-label", isMuted ? "恢复背景音乐音量" : "静音背景音乐");
  }
}

function setMusicVolume(volume) {
  if (!musicAudio) return;
  const normalizedVolume = Math.min(1, Math.max(0, volume));
  musicAudio.volume = normalizedVolume;
  if (normalizedVolume > 0) lastAudibleVolume = normalizedVolume;
  saveVolume(normalizedVolume);
  updateVolumeUI();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function updatePlaybackProgress() {
  if (!musicAudio || !playbackProgress || !playbackProgressFill || !elapsedTime || !durationTime) return;
  const duration = Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0;
  const elapsed = Number.isFinite(musicAudio.currentTime) ? musicAudio.currentTime : 0;
  const progress = duration > 0 ? Math.min(100, Math.max(0, (elapsed / duration) * 100)) : 0;
  playbackProgressFill.style.width = `${progress}%`;
  playbackProgress.setAttribute("aria-valuenow", String(Math.round(progress)));
  playbackProgress.setAttribute("aria-valuetext", `${formatTime(elapsed)} / ${formatTime(duration)}`);
  elapsedTime.textContent = formatTime(elapsed).replace("--:--", "0:00");
  durationTime.textContent = formatTime(duration);
}

function renderPlaylist() {
  if (!playlist) return;
  playlist.innerHTML = tracks.map((track, index) => `
    <li>
      <button class="track-button${index === currentTrackIndex ? " is-current" : ""}" type="button" data-track-index="${index}">
        <strong>${track.title}</strong><span>${track.artist}</span>
      </button>
    </li>`).join("");
}

function updateMusicState(isPlaying) {
  if (!musicPlayer || !musicToggle) return;
  musicPlayer.classList.toggle("is-playing", isPlaying);
  musicPlayer.classList.toggle("is-paused", !isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "暂停背景音乐" : "播放背景音乐");
  if (panelPlayToggle) {
    panelPlayToggle.textContent = isPlaying ? "Ⅱ" : "▶";
    panelPlayToggle.setAttribute("aria-label", isPlaying ? "暂停当前歌曲" : "继续播放当前歌曲");
  }
}

function loadTrack(index) {
  if (!musicAudio || !currentTrackLabel) return;
  currentTrackIndex = (index + tracks.length) % tracks.length;
  const track = tracks[currentTrackIndex];
  musicAudio.src = new URL(track.file, document.baseURI).href;
  currentTrackLabel.textContent = `${track.title} — ${track.artist}`;
  updatePlaybackProgress();
  renderPlaylist();
}

async function playCurrentTrack() {
  if (!musicAudio) return false;
  try {
    await musicAudio.play();
    musicPlayer?.classList.remove("autoplay-blocked");
    updateMusicState(true);
    return true;
  } catch (error) {
    updateMusicState(false);
    musicPlayer?.classList.add("autoplay-blocked");
    return false;
  }
}

function chooseNextTrack() {
  if (playMode === "loop") return currentTrackIndex;
  if (playMode === "shuffle" && tracks.length > 1) {
    let nextIndex = currentTrackIndex;
    while (nextIndex === currentTrackIndex) nextIndex = Math.floor(Math.random() * tracks.length);
    return nextIndex;
  }
  return (currentTrackIndex + 1) % tracks.length;
}

function chooseManualTrack(direction) {
  if (playMode === "shuffle" && tracks.length > 1) {
    let nextIndex = currentTrackIndex;
    while (nextIndex === currentTrackIndex) nextIndex = Math.floor(Math.random() * tracks.length);
    return nextIndex;
  }
  return (currentTrackIndex + direction + tracks.length) % tracks.length;
}

async function changeTrack(direction) {
  loadTrack(chooseManualTrack(direction));
  await playCurrentTrack();
}

if (musicAudio && musicToggle) {
  const initialVolume = readSavedVolume();
  musicAudio.volume = initialVolume;
  if (initialVolume > 0) lastAudibleVolume = initialVolume;
  updateVolumeUI();
  loadTrack(0);
  playCurrentTrack();

  musicToggle.addEventListener("click", async () => {
    if (musicAudio.paused) {
      await playCurrentTrack();
    } else {
      musicAudio.pause();
      updateMusicState(false);
    }
  });

  playlist?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-track-index]");
    if (!button) return;
    loadTrack(Number(button.dataset.trackIndex));
    await playCurrentTrack();
  });

  previousTrackButton?.addEventListener("click", () => changeTrack(-1));
  nextTrackButton?.addEventListener("click", () => changeTrack(1));
  panelPlayToggle?.addEventListener("click", async () => {
    if (musicAudio.paused) await playCurrentTrack();
    else musicAudio.pause();
  });

  volumeSteps.forEach((step) => {
    step.addEventListener("click", () => setMusicVolume(Number(step.dataset.volumeLevel)));
  });
  volumeToggle?.addEventListener("click", () => {
    setMusicVolume(musicAudio.volume === 0 ? lastAudibleVolume : 0);
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playMode = button.dataset.playMode;
      modeButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
    });
  });

  musicAudio.addEventListener("ended", async () => {
    loadTrack(chooseNextTrack());
    await playCurrentTrack();
  });

  musicAudio.addEventListener("pause", () => {
    if (!musicAudio.ended) updateMusicState(false);
  });
  musicAudio.addEventListener("play", () => updateMusicState(true));
  musicAudio.addEventListener("loadedmetadata", updatePlaybackProgress);
  musicAudio.addEventListener("durationchange", updatePlaybackProgress);
  musicAudio.addEventListener("timeupdate", updatePlaybackProgress);
  musicAudio.addEventListener("emptied", updatePlaybackProgress);
  musicAudio.addEventListener("volumechange", updateVolumeUI);
}

const LOVE_STORAGE_KEY = "forever-young-love-given-v1";
const loveButton = document.querySelector(".love-button");
const loveLabel = loveButton?.querySelector(".love-label");
const loveIcon = loveButton?.querySelector(".love-icon");
const loveBurst = document.querySelector(".love-burst");

function setLoveReceived() {
  if (!loveButton || !loveLabel || !loveIcon) return;
  loveButton.classList.add("is-liked");
  loveButton.disabled = true;
  loveLabel.textContent = "LOVE RECEIVED — THANK YOU";
  loveIcon.textContent = "♥";
}

function playLoveBurst() {
  if (!loveBurst) return;
  const particles = [
    { x: -76, r: -24, d: 0 },
    { x: -42, r: 16, d: 70 },
    { x: -8, r: -10, d: 20 },
    { x: 28, r: 20, d: 95 },
    { x: 58, r: -15, d: 45 }
  ];

  particles.forEach(({ x, r, d }, index) => {
    const particle = document.createElement("span");
    particle.className = "love-particle";
    particle.textContent = index % 2 ? "♡" : "♥";
    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--rotation", `${r}deg`);
    particle.style.setProperty("--delay", `${d}ms`);
    loveBurst.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  });
}

if (loveButton) {
  try {
    if (localStorage.getItem(LOVE_STORAGE_KEY) === "yes") setLoveReceived();
  } catch (error) {
    console.warn("Love reaction storage is unavailable.", error);
  }

  loveButton.addEventListener("click", () => {
    if (loveButton.disabled) return;
    playLoveBurst();
    try { localStorage.setItem(LOVE_STORAGE_KEY, "yes"); } catch (error) {
      console.warn("Love reaction could not be saved.", error);
    }
    setLoveReceived();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 6, 4) * 70}ms`;
  observer.observe(element);
});

if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("has-custom-cursor");
  const cursor = document.querySelector(".cursor-pointer");
  const interactiveSelector = "a, button, [role='button'], input, select, textarea, summary, .contact-peek";

  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.remove("is-hidden");
  });

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest(interactiveSelector)) cursor.classList.add("is-hovering");
  });

  document.addEventListener("mouseout", (event) => {
    const leavingInteractive = event.target.closest(interactiveSelector);
    const enteringInteractive = event.relatedTarget?.closest?.(interactiveSelector);
    if (leavingInteractive && !enteringInteractive) cursor.classList.remove("is-hovering");
  });

  window.addEventListener("mousedown", (event) => {
    if (event.button === 0) cursor.classList.add("is-pressing");
  });
  window.addEventListener("mouseup", () => cursor.classList.remove("is-pressing"));
  document.documentElement.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
  window.addEventListener("blur", () => cursor.classList.add("is-hidden"));
}

document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    element.style.translate = `${x}px ${y}px`;
  });
  element.addEventListener("mouseleave", () => { element.style.translate = "0 0"; });
});

const portrait = document.querySelector(".portrait-wrap");
window.addEventListener("scroll", () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const offset = Math.min(window.scrollY * 0.045, 28);
  portrait.style.marginTop = `${offset}px`;
}, { passive: true });

const hero = document.querySelector(".hero");
const exploreButton = document.querySelector(".explore-button");
const scrollNote = document.querySelector(".scroll-note");
const desktopActions = matchMedia("(min-width: 681px)");

function alignScrollNoteWithButton() {
  if (!desktopActions.matches) {
    scrollNote.style.top = "";
    return;
  }

  const heroRect = hero.getBoundingClientRect();
  const buttonRect = exploreButton.getBoundingClientRect();
  const noteRect = scrollNote.getBoundingClientRect();
  const alignedTop = buttonRect.bottom - heroRect.top - noteRect.height;
  scrollNote.style.top = `${alignedTop}px`;
}

alignScrollNoteWithButton();
window.addEventListener("resize", alignScrollNoteWithButton, { passive: true });
document.fonts?.ready.then(alignScrollNoteWithButton);
exploreButton.addEventListener("transitionend", (event) => {
  if (event.propertyName === "transform") alignScrollNoteWithButton();
});
