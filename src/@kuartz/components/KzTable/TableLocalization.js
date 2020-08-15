export const tableLocale = (t) => {
    return {
        body      : {
            emptyDataSourceMessage: t("table:emptyDataSourceMessage"),
            addTooltip            : t("table:addTooltip"),
            deleteTooltip         : t("table:deleteTooltip"),
            editTooltip           : t("table:editTooltip"),
            filterRow             : {
                filterTooltip: t("table:filterTooltip"),
            },
            editRow               : {
                deleteText   : t("table:deleteText"),
                cancelTooltip: t("table:cancelTooltip"),
                saveTooltip  : t("table:saveTooltip"),
            }
        },
        grouping  : {
            placeholder: t("table:placeholder"),
        },
        header    : {
            actions: t("table:actions"),
        },
        pagination: {
            labelDisplayedRows: t("table:labelDisplayedRows"),
            labelRowsSelect   : t("table:labelRowsSelect"),
            labelRowsPerPage  : t("table:labelRowsPerPage"),
            firstAriaLabel    : t("table:firstAriaLabel"),
            firstTooltip      : t("table:firstTooltip"),
            previousAriaLabel : t("table:previousAriaLabel"),
            previousTooltip   : t("table:previousTooltip"),
            nextAriaLabel     : t("table:nextAriaLabel"),
            nextTooltip       : t("table:nextTooltip"),
            lastAriaLabel     : t("table:lastAriaLabel"),
            lastTooltip       : t("table:lastTooltip"),
        },
        toolbar   : {
            addRemoveColumns    : t("table:addRemoveColumns"),
            nRowsSelected       : t("table:nRowsSelected"),
            showColumnsTitle    : t("table:showColumnsTitle"),
            showColumnsAriaLabel: t("table:showColumnsAriaLabel"),
            exportTitle         : t("table:exportTitle"),
            exportAriaLabel     : t("table:exportAriaLabel"),
            exportName          : t("table:exportName"),
            searchTooltip       : t("table:searchTooltip"),
            searchPlaceholder   : t("table:searchPlaceholder")
        },

    };
};
