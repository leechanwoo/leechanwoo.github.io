// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_VDom_Types = require("../Halogen.VDom.Types/index.js");
var withKeys_ = function (ctor) {
    return function (children) {
        var v = ctor([  ]);
        if (v instanceof Halogen_VDom_Types.Elem) {
            return new Halogen_VDom_Types.Keyed(v.value0, children);
        };
        return v;
    };
};
var withKeys = function (ctor) {
    return function (props) {
        return function (children) {
            var v = ctor(props)([  ]);
            if (v instanceof Halogen_VDom_Types.Elem) {
                return new Halogen_VDom_Types.Keyed(v.value0, children);
            };
            return v;
        };
    };
};
var keyedNS = function ($8) {
    return Halogen_HTML_Core.keyed(Control_Applicative.pure(Data_Maybe.applicativeMaybe)($8));
};
var keyed = Halogen_HTML_Core.keyed(Data_Maybe.Nothing.value);
var elementNS = function ($9) {
    return Halogen_HTML_Core.element(Control_Applicative.pure(Data_Maybe.applicativeMaybe)($9));
};
var element = Halogen_HTML_Core.element(Data_Maybe.Nothing.value);
var em = element("em");
var em_ = em([  ]);
var embed = element("embed");
var embed_ = embed([  ]);
var fieldset = element("fieldset");
var fieldset_ = fieldset([  ]);
var figcaption = element("figcaption");
var figcaption_ = figcaption([  ]);
var figure = element("figure");
var figure_ = figure([  ]);
var footer = element("footer");
var footer_ = footer([  ]);
var form = element("form");
var form_ = form([  ]);
var h1 = element("h1");
var h1_ = h1([  ]);
var h2 = element("h2");
var h2_ = h2([  ]);
var h3 = element("h3");
var h3_ = h3([  ]);
var h4 = element("h4");
var h4_ = h4([  ]);
var h5 = element("h5");
var h5_ = h5([  ]);
var h6 = element("h6");
var h6_ = h6([  ]);
var head = element("head");
var head_ = head([  ]);
var header = element("header");
var header_ = header([  ]);
var hr = function (props) {
    return element("hr")(props)([  ]);
};
var hr_ = hr([  ]);
var html = element("html");
var html_ = html([  ]);
var i = element("i");
var i_ = i([  ]);
var iframe = function (props) {
    return element("iframe")(props)([  ]);
};
var img = function (props) {
    return element("img")(props)([  ]);
};
var input = function (props) {
    return element("input")(props)([  ]);
};
var ins = element("ins");
var ins_ = ins([  ]);
var kbd = element("kbd");
var kbd_ = kbd([  ]);
var label = element("label");
var label_ = label([  ]);
var legend = element("legend");
var legend_ = legend([  ]);
var li = element("li");
var li_ = li([  ]);
var link = function (props) {
    return element("link")(props)([  ]);
};
var main = element("main");
var main_ = main([  ]);
var map = element("map");
var map_ = map([  ]);
var mark = element("mark");
var mark_ = mark([  ]);
var menu = element("menu");
var menu_ = menu([  ]);
var menuitem = element("menuitem");
var menuitem_ = menuitem([  ]);
var meta = function (props) {
    return element("meta")(props)([  ]);
};
var meter = element("meter");
var meter_ = meter([  ]);
var nav = element("nav");
var nav_ = nav([  ]);
var noscript = element("noscript");
var noscript_ = noscript([  ]);
var object = element("object");
var object_ = object([  ]);
var ol = element("ol");
var ol_ = ol([  ]);
var optgroup = element("optgroup");
var optgroup_ = optgroup([  ]);
var option = element("option");
var option_ = option([  ]);
var output = element("output");
var output_ = output([  ]);
var p = element("p");
var p_ = p([  ]);
var param = function (props) {
    return element("param")(props)([  ]);
};
var pre = element("pre");
var pre_ = pre([  ]);
var progress = element("progress");
var progress_ = progress([  ]);
var q = element("q");
var q_ = q([  ]);
var rp = element("rp");
var rp_ = rp([  ]);
var rt = element("rt");
var rt_ = rt([  ]);
var ruby = element("ruby");
var ruby_ = ruby([  ]);
var samp = element("samp");
var samp_ = samp([  ]);
var script = element("script");
var script_ = script([  ]);
var section = element("section");
var section_ = section([  ]);
var select = element("select");
var select_ = select([  ]);
var small = element("small");
var small_ = small([  ]);
var source = function (props) {
    return element("source")(props)([  ]);
};
var span = element("span");
var span_ = span([  ]);
var strong = element("strong");
var strong_ = strong([  ]);
var style = element("style");
var style_ = style([  ]);
var sub = element("sub");
var sub_ = sub([  ]);
var summary = element("summary");
var summary_ = summary([  ]);
var sup = element("sup");
var sup_ = sup([  ]);
var table = element("table");
var table_ = table([  ]);
var tbody = element("tbody");
var tbody_ = tbody([  ]);
var td = element("td");
var td_ = td([  ]);
var textarea = function (es) {
    return element("textarea")(es)([  ]);
};
var tfoot = element("tfoot");
var tfoot_ = tfoot([  ]);
var th = element("th");
var th_ = th([  ]);
var thead = element("thead");
var thead_ = thead([  ]);
var time = element("time");
var time_ = time([  ]);
var title = element("title");
var title_ = title([  ]);
var tr = element("tr");
var tr_ = tr([  ]);
var track = function (props) {
    return element("track")(props)([  ]);
};
var u = element("u");
var u_ = u([  ]);
var ul = element("ul");
var ul_ = ul([  ]);
var $$var = element("var");
var var_ = $$var([  ]);
var video = element("video");
var video_ = video([  ]);
var wbr = function (props) {
    return element("wbr")(props)([  ]);
};
var dt = element("dt");
var dt_ = dt([  ]);
var dl = element("dl");
var dl_ = dl([  ]);
var div = element("div");
var div_ = div([  ]);
var dialog = element("dialog");
var dialog_ = dialog([  ]);
var dfn = element("dfn");
var dfn_ = dfn([  ]);
var details = element("details");
var details_ = details([  ]);
var del = element("del");
var del_ = del([  ]);
var dd = element("dd");
var dd_ = dd([  ]);
var datalist = element("datalist");
var datalist_ = datalist([  ]);
var command = function (props) {
    return element("command")(props)([  ]);
};
var colgroup = element("colgroup");
var colgroup_ = colgroup([  ]);
var col = function (props) {
    return element("col")(props)([  ]);
};
var code = element("code");
var code_ = code([  ]);
var cite = element("cite");
var cite_ = cite([  ]);
var caption = element("caption");
var caption_ = caption([  ]);
var canvas = function (props) {
    return element("canvas")(props)([  ]);
};
var button = element("button");
var button_ = button([  ]);
var br = function (props) {
    return element("br")(props)([  ]);
};
var br_ = br([  ]);
var body = element("body");
var body_ = body([  ]);
var blockquote = element("blockquote");
var blockquote_ = blockquote([  ]);
var bdo = element("bdo");
var bdo_ = bdo([  ]);
var bdi = element("bdi");
var bdi_ = bdi([  ]);
var base = function (props) {
    return element("base")(props)([  ]);
};
var b = element("b");
var b_ = b([  ]);
var audio = element("audio");
var audio_ = audio([  ]);
var aside = element("aside");
var aside_ = aside([  ]);
var article = element("article");
var article_ = article([  ]);
var area = function (props) {
    return element("area")(props)([  ]);
};
var address = element("address");
var address_ = address([  ]);
var abbr = element("abbr");
var abbr_ = abbr([  ]);
var a = element("a");
var a_ = a([  ]);
module.exports = {
    element: element,
    elementNS: elementNS,
    keyed: keyed,
    keyedNS: keyedNS,
    withKeys: withKeys,
    withKeys_: withKeys_,
    a: a,
    a_: a_,
    abbr: abbr,
    abbr_: abbr_,
    address: address,
    address_: address_,
    area: area,
    article: article,
    article_: article_,
    aside: aside,
    aside_: aside_,
    audio: audio,
    audio_: audio_,
    b: b,
    b_: b_,
    base: base,
    bdi: bdi,
    bdi_: bdi_,
    bdo: bdo,
    bdo_: bdo_,
    blockquote: blockquote,
    blockquote_: blockquote_,
    body: body,
    body_: body_,
    br: br,
    br_: br_,
    button: button,
    button_: button_,
    canvas: canvas,
    caption: caption,
    caption_: caption_,
    cite: cite,
    cite_: cite_,
    code: code,
    code_: code_,
    col: col,
    colgroup: colgroup,
    colgroup_: colgroup_,
    command: command,
    datalist: datalist,
    datalist_: datalist_,
    dd: dd,
    dd_: dd_,
    del: del,
    del_: del_,
    details: details,
    details_: details_,
    dfn: dfn,
    dfn_: dfn_,
    dialog: dialog,
    dialog_: dialog_,
    div: div,
    div_: div_,
    dl: dl,
    dl_: dl_,
    dt: dt,
    dt_: dt_,
    em: em,
    em_: em_,
    embed: embed,
    embed_: embed_,
    fieldset: fieldset,
    fieldset_: fieldset_,
    figcaption: figcaption,
    figcaption_: figcaption_,
    figure: figure,
    figure_: figure_,
    footer: footer,
    footer_: footer_,
    form: form,
    form_: form_,
    h1: h1,
    h1_: h1_,
    h2: h2,
    h2_: h2_,
    h3: h3,
    h3_: h3_,
    h4: h4,
    h4_: h4_,
    h5: h5,
    h5_: h5_,
    h6: h6,
    h6_: h6_,
    head: head,
    head_: head_,
    header: header,
    header_: header_,
    hr: hr,
    hr_: hr_,
    html: html,
    html_: html_,
    i: i,
    i_: i_,
    iframe: iframe,
    img: img,
    input: input,
    ins: ins,
    ins_: ins_,
    kbd: kbd,
    kbd_: kbd_,
    label: label,
    label_: label_,
    legend: legend,
    legend_: legend_,
    li: li,
    li_: li_,
    link: link,
    main: main,
    main_: main_,
    map: map,
    map_: map_,
    mark: mark,
    mark_: mark_,
    menu: menu,
    menu_: menu_,
    menuitem: menuitem,
    menuitem_: menuitem_,
    meta: meta,
    meter: meter,
    meter_: meter_,
    nav: nav,
    nav_: nav_,
    noscript: noscript,
    noscript_: noscript_,
    object: object,
    object_: object_,
    ol: ol,
    ol_: ol_,
    optgroup: optgroup,
    optgroup_: optgroup_,
    option: option,
    option_: option_,
    output: output,
    output_: output_,
    p: p,
    p_: p_,
    param: param,
    pre: pre,
    pre_: pre_,
    progress: progress,
    progress_: progress_,
    q: q,
    q_: q_,
    rp: rp,
    rp_: rp_,
    rt: rt,
    rt_: rt_,
    ruby: ruby,
    ruby_: ruby_,
    samp: samp,
    samp_: samp_,
    script: script,
    script_: script_,
    section: section,
    section_: section_,
    select: select,
    select_: select_,
    small: small,
    small_: small_,
    source: source,
    span: span,
    span_: span_,
    strong: strong,
    strong_: strong_,
    style: style,
    style_: style_,
    sub: sub,
    sub_: sub_,
    summary: summary,
    summary_: summary_,
    sup: sup,
    sup_: sup_,
    table: table,
    table_: table_,
    tbody: tbody,
    tbody_: tbody_,
    td: td,
    td_: td_,
    textarea: textarea,
    tfoot: tfoot,
    tfoot_: tfoot_,
    th: th,
    th_: th_,
    thead: thead,
    thead_: thead_,
    time: time,
    time_: time_,
    title: title,
    title_: title_,
    tr: tr,
    tr_: tr_,
    track: track,
    u: u,
    u_: u_,
    ul: ul,
    ul_: ul_,
    "var": $$var,
    var_: var_,
    video: video,
    video_: video_,
    wbr: wbr
};
