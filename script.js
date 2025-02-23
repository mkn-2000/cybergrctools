function calcularNivel() {
    // Função Govern (GV) - 30 controles
    let gv_oc_01 = Number(document.getElementById("gv_oc_01").value);
    let gv_oc_02 = Number(document.getElementById("gv_oc_02").value);
    let gv_oc_03 = Number(document.getElementById("gv_oc_03").value);
    let gv_oc_04 = Number(document.getElementById("gv_oc_04").value);
    let gv_oc_05 = Number(document.getElementById("gv_oc_05").value);
    let gv_rm_01 = Number(document.getElementById("gv_rm_01").value);
    let gv_rm_02 = Number(document.getElementById("gv_rm_02").value);
    let gv_rm_03 = Number(document.getElementById("gv_rm_03").value);
    let gv_rm_04 = Number(document.getElementById("gv_rm_04").value);
    let gv_rm_05 = Number(document.getElementById("gv_rm_05").value);
    let gv_rm_06 = Number(document.getElementById("gv_rm_06").value);
    let gv_rm_07 = Number(document.getElementById("gv_rm_07").value);
    let gv_rr_01 = Number(document.getElementById("gv_rr_01").value);
    let gv_rr_02 = Number(document.getElementById("gv_rr_02").value);
    let gv_rr_03 = Number(document.getElementById("gv_rr_03").value);
    let gv_rr_04 = Number(document.getElementById("gv_rr_04").value);
    let gv_po_01 = Number(document.getElementById("gv_po_01").value);
    let gv_po_02 = Number(document.getElementById("gv_po_02").value);
    let gv_ov_01 = Number(document.getElementById("gv_ov_01").value);
    let gv_ov_02 = Number(document.getElementById("gv_ov_02").value);
    let gv_ov_03 = Number(document.getElementById("gv_ov_03").value);
    let gv_sc_01 = Number(document.getElementById("gv_sc_01").value);
    let gv_sc_02 = Number(document.getElementById("gv_sc_02").value);
    let gv_sc_03 = Number(document.getElementById("gv_sc_03").value);
    let gv_sc_04 = Number(document.getElementById("gv_sc_04").value);
    let gv_sc_05 = Number(document.getElementById("gv_sc_05").value);
    let gv_sc_06 = Number(document.getElementById("gv_sc_06").value);
    let gv_sc_07 = Number(document.getElementById("gv_sc_07").value);
    let gv_sc_08 = Number(document.getElementById("gv_sc_08").value);
    let gv_sc_09 = Number(document.getElementById("gv_sc_09").value);
    let gv_sc_10 = Number(document.getElementById("gv_sc_10").value);

    // Função Identify (ID) - 21 controles
    let id_am_01 = Number(document.getElementById("id_am_01").value);
    let id_am_02 = Number(document.getElementById("id_am_02").value);
    let id_am_03 = Number(document.getElementById("id_am_03").value);
    let id_am_04 = Number(document.getElementById("id_am_04").value);
    let id_am_05 = Number(document.getElementById("id_am_05").value);
    let id_am_07 = Number(document.getElementById("id_am_07").value);
    let id_am_08 = Number(document.getElementById("id_am_08").value);
    let id_ra_01 = Number(document.getElementById("id_ra_01").value);
    let id_ra_02 = Number(document.getElementById("id_ra_02").value);
    let id_ra_03 = Number(document.getElementById("id_ra_03").value);
    let id_ra_04 = Number(document.getElementById("id_ra_04").value);
    let id_ra_05 = Number(document.getElementById("id_ra_05").value);
    let id_ra_06 = Number(document.getElementById("id_ra_06").value);
    let id_ra_07 = Number(document.getElementById("id_ra_07").value);
    let id_ra_08 = Number(document.getElementById("id_ra_08").value);
    let id_ra_09 = Number(document.getElementById("id_ra_09").value);
    let id_ra_10 = Number(document.getElementById("id_ra_10").value);
    let id_im_01 = Number(document.getElementById("id_im_01").value);
    let id_im_02 = Number(document.getElementById("id_im_02").value);
    let id_im_03 = Number(document.getElementById("id_im_03").value);
    let id_im_04 = Number(document.getElementById("id_im_04").value);

    // Função Protect (PR) - 22 controles
    let pr_aa_01 = Number(document.getElementById("pr_aa_01").value);
    let pr_aa_02 = Number(document.getElementById("pr_aa_02").value);
    let pr_aa_03 = Number(document.getElementById("pr_aa_03").value);
    let pr_aa_04 = Number(document.getElementById("pr_aa_04").value);
    let pr_aa_05 = Number(document.getElementById("pr_aa_05").value);
    let pr_aa_06 = Number(document.getElementById("pr_aa_06").value);
    let pr_at_01 = Number(document.getElementById("pr_at_01").value);
    let pr_at_02 = Number(document.getElementById("pr_at_02").value);
    let pr_ds_01 = Number(document.getElementById("pr_ds_01").value);
    let pr_ds_02 = Number(document.getElementById("pr_ds_02").value);
    let pr_ds_10 = Number(document.getElementById("pr_ds_10").value);
    let pr_ds_11 = Number(document.getElementById("pr_ds_11").value);
    let pr_ps_01 = Number(document.getElementById("pr_ps_01").value);
    let pr_ps_02 = Number(document.getElementById("pr_ps_02").value);
    let pr_ps_03 = Number(document.getElementById("pr_ps_03").value);
    let pr_ps_04 = Number(document.getElementById("pr_ps_04").value);
    let pr_ps_05 = Number(document.getElementById("pr_ps_05").value);
    let pr_ps_06 = Number(document.getElementById("pr_ps_06").value);
    let pr_pt_01 = Number(document.getElementById("pr_pt_01").value);
    let pr_pt_02 = Number(document.getElementById("pr_pt_02").value);
    let pr_pt_03 = Number(document.getElementById("pr_pt_03").value);
    let pr_pt_04 = Number(document.getElementById("pr_pt_04").value);

    // Função Detect (DE) - 11 controles
    let de_cm_01 = Number(document.getElementById("de_cm_01").value);
    let de_cm_02 = Number(document.getElementById("de_cm_02").value);
    let de_cm_03 = Number(document.getElementById("de_cm_03").value);
    let de_cm_06 = Number(document.getElementById("de_cm_06").value);
    let de_cm_09 = Number(document.getElementById("de_cm_09").value);
    let de_ae_02 = Number(document.getElementById("de_ae_02").value);
    let de_ae_03 = Number(document.getElementById("de_ae_03").value);
    let de_ae_04 = Number(document.getElementById("de_ae_04").value);
    let de_ae_06 = Number(document.getElementById("de_ae_06").value);
    let de_ae_07 = Number(document.getElementById("de_ae_07").value);
    let de_ae_08 = Number(document.getElementById("de_ae_08").value);

    // Função Respond (RS) - 13 controles
    let rs_ma_01 = Number(document.getElementById("rs_ma_01").value);
    let rs_ma_02 = Number(document.getElementById("rs_ma_02").value);
    let rs_ma_03 = Number(document.getElementById("rs_ma_03").value);
    let rs_ma_04 = Number(document.getElementById("rs_ma_04").value);
    let rs_ma_05 = Number(document.getElementById("rs_ma_05").value);
    let rs_an_03 = Number(document.getElementById("rs_an_03").value);
    let rs_an_06 = Number(document.getElementById("rs_an_06").value);
    let rs_an_07 = Number(document.getElementById("rs_an_07").value);
    let rs_an_08 = Number(document.getElementById("rs_an_08").value);
    let rs_co_02 = Number(document.getElementById("rs_co_02").value);
    let rs_co_03 = Number(document.getElementById("rs_co_03").value);
    let rs_mi_01 = Number(document.getElementById("rs_mi_01").value);
    let rs_mi_02 = Number(document.getElementById("rs_mi_02").value);

    // Função Recover (RC) - 8 controles
    let rc_rp_01 = Number(document.getElementById("rc_rp_01").value);
    let rc_rp_02 = Number(document.getElementById("rc_rp_02").value);
    let rc_rp_03 = Number(document.getElementById("rc_rp_03").value);
    let rc_rp_04 = Number(document.getElementById("rc_rp_04").value);
    let rc_rp_05 = Number(document.getElementById("rc_rp_05").value);
    let rc_rp_06 = Number(document.getElementById("rc_rp_06").value);
    let rc_co_03 = Number(document.getElementById("rc_co_03").value);
    let rc_co_04 = Number(document.getElementById("rc_co_04").value);

    // Calcular médias por categoria
    let gvTotal = (gv_oc_01 + gv_oc_02 + gv_oc_03 + gv_oc_04 + gv_oc_05 +
                   gv_rm_01 + gv_rm_02 + gv_rm_03 + gv_rm_04 + gv_rm_05 + gv_rm_06 + gv_rm_07 +
                   gv_rr_01 + gv_rr_02 + gv_rr_03 + gv_rr_04 +
                   gv_po_01 + gv_po_02 +
                   gv_ov_01 + gv_ov_02 + gv_ov_03 +
                   gv_sc_01 + gv_sc_02 + gv_sc_03 + gv_sc_04 + gv_sc_05 + gv_sc_06 + gv_sc_07 + gv_sc_08 + gv_sc_09 + gv_sc_10) / 30;
    let idTotal = (id_am_01 + id_am_02 + id_am_03 + id_am_04 + id_am_05 + id_am_07 + id_am_08 +
                   id_ra_01 + id_ra_02 + id_ra_03 + id_ra_04 + id_ra_05 + id_ra_06 + id_ra_07 + id_ra_08 + id_ra_09 + id_ra_10 +
                   id_im_01 + id_im_02 + id_im_03 + id_im_04) / 21;
    let prTotal = (pr_aa_01 + pr_aa_02 + pr_aa_03 + pr_aa_04 + pr_aa_05 + pr_aa_06 +
                   pr_at_01 + pr_at_02 +
                   pr_ds_01 + pr_ds_02 + pr_ds_10 + pr_ds_11 +
                   pr_ps_01 + pr_ps_02 + pr_ps_03 + pr_ps_04 + pr_ps_05 + pr_ps_06 +
                   pr_pt_01 + pr_pt_02 + pr_pt_03 + pr_pt_04) / 22;
    let deTotal = (de_cm_01 + de_cm_02 + de_cm_03 + de_cm_06 + de_cm_09 +
                   de_ae_02 + de_ae_03 + de_ae_04 + de_ae_06 + de_ae_07 + de_ae_08) / 11;
    let rsTotal = (rs_ma_01 + rs_ma_02 + rs_ma_03 + rs_ma_04 + rs_ma_05 +
                   rs_an_03 + rs_an_06 + rs_an_07 + rs_an_08 +
                   rs_co_02 + rs_co_03 +
                   rs_mi_01 + rs_mi_02) / 13;
    let rcTotal = (rc_rp_01 + rc_rp_02 + rc_rp_03 + rc_rp_04 + rc_rp_05 + rc_rp_06 +
                   rc_co_03 + rc_co_04) / 8;

    // Calcular nível geral (média de todas as categorias)
    let totalGeral = (gvTotal + idTotal + prTotal + deTotal + rsTotal + rcTotal) / 6;

    // Arredondar para 1 casa decimal
    gvTotal = gvTotal.toFixed(1);
    idTotal = idTotal.toFixed(1);
    prTotal = prTotal.toFixed(1);
    deTotal = deTotal.toFixed(1);
    rsTotal = rsTotal.toFixed(1);
    rcTotal = rcTotal.toFixed(1);
    totalGeral = totalGeral.toFixed(1);

    // Função para determinar a mensagem com base no nível
    function getMensagem(nivel) {
        if (nivel == 0) {
            return "Not Done Yet! Time to Start!";
        } else if (nivel <= 1) {
            return "Initial Level: Reactive and Unpredictable.";
        } else if (nivel <= 2) {
            return "Managed Level: Reactive by Projects.";
        } else if (nivel <= 3) {
            return "Defined Level: Proactive with Standards.";
        } else if (nivel <= 4) {
            return "Quantitative Level: Measured and Predictable.";
        } else {
            return "Optimized Level: Stable and Continuously Improving.";
        }
    }

    // Mostrar resultados por categoria e geral, com design moderno
    let resultado = '<div class="result-card">';
    resultado += '<h3>Maturity Results</h3>';
    resultado += '<p><strong>Govern (GV):</strong> ' + gvTotal + ' - ' + getMensagem(gvTotal) + '</p>';
    resultado += '<p><strong>Identify (ID):</strong> ' + idTotal + ' - ' + getMensagem(idTotal) + '</p>';
    resultado += '<p><strong>Protect (PR):</strong> ' + prTotal + ' - ' + getMensagem(prTotal) + '</p>';
    resultado += '<p><strong>Detect (DE):</strong> ' + deTotal + ' - ' + getMensagem(deTotal) + '</p>';
    resultado += '<p><strong>Respond (RS):</strong> ' + rsTotal + ' - ' + getMensagem(rsTotal) + '</p>';
    resultado += '<p><strong>Recover (RC):</strong> ' + rcTotal + ' - ' + getMensagem(rcTotal) + '</p>';
    resultado += '<p><strong>Overall Organizational Level:</strong> ' + totalGeral + ' - ' + getMensagem(totalGeral) + '</p>';
    resultado += '</div>';

    document.getElementById("resultado").innerHTML = resultado;
}