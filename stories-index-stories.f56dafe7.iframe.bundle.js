"use strict";(self.webpackChunk_thoughtback_rich_markdown_editor=self.webpackChunk_thoughtback_rich_markdown_editor||[]).push([[872],{"./src/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Blockquotes:()=>Blockquotes,Checkboxes:()=>Checkboxes,Code:()=>index_stories_Code,Dark:()=>Dark,Default:()=>Default,Emoji:()=>index_stories_Emoji,Focused:()=>Focused,Headings:()=>Headings,Images:()=>Images,Lists:()=>Lists,Marks:()=>Marks,MaxLength:()=>index_stories_MaxLength,Notices:()=>Notices,Persisted:()=>Persisted,Placeholder:()=>index_stories_Placeholder,RTL:()=>RTL,ReadOnly:()=>ReadOnly,ReadOnlyWriteCheckboxes:()=>ReadOnlyWriteCheckboxes,Tables:()=>Tables,TemplateDoc:()=>TemplateDoc,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js");const colors={almostBlack:"#181A1B",lightBlack:"#2F3336",almostWhite:"#E6E6E6",white:"#FFF",white10:"rgba(255, 255, 255, 0.1)",black:"#000",black10:"rgba(0, 0, 0, 0.1)",primary:"#1AB6FF",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9"},base={...colors,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",fontWeight:400,zIndex:100,link:colors.primary,placeholder:"#B1BECC",textSecondary:"#4E5C6E",textLight:colors.white,textHighlight:"#b3e7ff",textHighlightForeground:colors.black,selected:colors.primary,codeComment:"#6a737d",codePunctuation:"#5e6687",codeNumber:"#d73a49",codeProperty:"#c08b30",codeTag:"#3d8fd1",codeString:"#032f62",codeSelector:"#6679cc",codeAttr:"#c76b29",codeEntity:"#22a2c9",codeKeyword:"#d73a49",codeFunction:"#6f42c1",codeStatement:"#22a2c9",codePlaceholder:"#3d8fd1",codeInserted:"#202746",codeImportant:"#c94922",blockToolbarBackground:colors.white,blockToolbarTrigger:colors.greyMid,blockToolbarTriggerIcon:colors.white,blockToolbarItem:colors.almostBlack,blockToolbarIcon:void 0,blockToolbarIconSelected:colors.black,blockToolbarText:colors.almostBlack,blockToolbarTextSelected:colors.black,blockToolbarSelectedBackground:colors.greyMid,blockToolbarHoverBackground:colors.greyLight,blockToolbarDivider:colors.greyMid,noticeInfoBackground:"#F5BE31",noticeInfoText:colors.almostBlack,noticeTipBackground:"#9E5CF7",noticeTipText:colors.white,noticeWarningBackground:"#FF5C80",noticeWarningText:colors.white},light={...base,background:colors.white,text:colors.almostBlack,code:colors.lightBlack,cursor:colors.black,divider:colors.greyMid,toolbarBackground:colors.lightBlack,toolbarHoverBackground:colors.black,toolbarInput:colors.white10,toolbarItem:colors.white,tableDivider:colors.greyMid,tableSelected:colors.primary,tableSelectedBackground:"#E5F7FF",quote:colors.greyDark,codeBackground:colors.greyLight,codeBorder:colors.grey,horizontalRule:colors.greyMid,imageErrorBackground:colors.greyLight,scrollbarBackground:colors.greyLight,scrollbarThumb:colors.greyMid},theme_dark={...base,background:colors.almostBlack,text:colors.almostWhite,code:colors.almostWhite,cursor:colors.white,divider:"#4E5C6E",placeholder:"#52657A",toolbarBackground:colors.white,toolbarHoverBackground:colors.greyMid,toolbarInput:colors.black10,toolbarItem:colors.lightBlack,tableDivider:colors.lightBlack,tableSelected:colors.primary,tableSelectedBackground:"#002333",quote:colors.greyDark,codeBackground:colors.black,codeBorder:colors.lightBlack,codeString:"#3d8fd1",horizontalRule:colors.lightBlack,imageErrorBackground:"rgba(0, 0, 0, 0.5)",scrollbarBackground:colors.black,scrollbarThumb:colors.lightBlack},theme=light;var memoize=__webpack_require__("./node_modules/lodash/memoize.js"),memoize_default=__webpack_require__.n(memoize),dist=__webpack_require__("./node_modules/prosemirror-state/dist/index.js"),prosemirror_dropcursor_dist=__webpack_require__("./node_modules/prosemirror-dropcursor/dist/index.js"),prosemirror_gapcursor_dist=__webpack_require__("./node_modules/prosemirror-gapcursor/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/prosemirror-view/dist/index.js"),prosemirror_model_dist=__webpack_require__("./node_modules/prosemirror-model/dist/index.js"),prosemirror_inputrules_dist=__webpack_require__("./node_modules/prosemirror-inputrules/dist/index.js"),prosemirror_keymap_dist=__webpack_require__("./node_modules/prosemirror-keymap/dist/index.js"),prosemirror_commands_dist=__webpack_require__("./node_modules/prosemirror-commands/dist/index.js"),prosemirror_utils_dist=__webpack_require__("./node_modules/prosemirror-utils/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const dictionary={addColumnAfter:"Insert column after",addColumnBefore:"Insert column before",addRowAfter:"Insert row after",addRowBefore:"Insert row before",alignCenter:"Align center",alignLeft:"Align left",alignRight:"Align right",bulletList:"Bulleted list",checkboxList:"Todo list",codeBlock:"Code block",codeCopied:"Copied to clipboard",codeInline:"Code",createLink:"Create link",createLinkError:"Sorry, an error occurred creating the link",createNewDoc:"Create a new doc",deleteColumn:"Delete column",deleteRow:"Delete row",deleteTable:"Delete table",deleteImage:"Delete image",downloadImage:"Download image",replaceImage:"Replace image",alignImageLeft:"Float left half width",alignImageRight:"Float right half width",alignImageDefault:"Center large",em:"Italic",embedInvalidLink:"Sorry, that link won’t work for this embed type",findOrCreateDoc:"Find or create a doc…",h1:"Big heading",h2:"Medium heading",h3:"Small heading",heading:"Heading",hr:"Divider",image:"Image",imageUploadError:"Sorry, an error occurred uploading the image",imageCaptionPlaceholder:"Write a caption",info:"Info",infoNotice:"Info notice",link:"Link",linkCopied:"Link copied to clipboard",mark:"Highlight",newLineEmpty:"Type '/' to insert…",newLineWithSlash:"Keep typing to filter…",noResults:"No results",openLink:"Open link",orderedList:"Ordered list",pageBreak:"Page break",pasteLink:"Paste a link…",pasteLinkWithTitle:title=>`Paste a ${title} link…`,placeholder:"Placeholder",quote:"Quote",removeLink:"Remove link",searchOrPasteLink:"Search or paste a link…",strikethrough:"Strikethrough",strong:"Bold",subheading:"Subheading",table:"Table",tip:"Tip",tipNotice:"Tip notice",warning:"Warning",warningNotice:"Warning notice"},Flex=styled_components_browser_esm.ZP.div`
  display: flex;
  flex: ${({auto})=>auto?"1 1 auto":"initial"};
  flex-direction: ${({column})=>column?"column":"row"};
  align-items: ${({align})=>align};
  justify-content: ${({justify})=>justify};
`,components_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{auto:{defaultValue:null,description:"",name:"auto",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"baseline"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-around"'},{value:'"space-between"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}var PortalCompat=__webpack_require__("./node_modules/react-portal/es/PortalCompat.js"),some=__webpack_require__("./node_modules/lodash/some.js"),some_default=__webpack_require__.n(some),lib=__webpack_require__("./node_modules/outline-icons/lib/index.js");const queries_isNodeActive=(type,attrs={})=>state=>{if(!type)return!1;const node=(0,prosemirror_utils_dist.a1)(type)(state.selection)||(0,prosemirror_utils_dist.Kk)((node=>node.type===type))(state.selection);return Object.keys(attrs).length&&node?node.node.hasMarkup(type,{...node.node.attrs,...attrs}):!!node};try{table.displayName="table",table.__docgenInfo={description:"",displayName:"table",props:{addColumnAfter:{defaultValue:null,description:"",name:"addColumnAfter",required:!0,type:{name:"string"}},addColumnBefore:{defaultValue:null,description:"",name:"addColumnBefore",required:!0,type:{name:"string"}},addRowAfter:{defaultValue:null,description:"",name:"addRowAfter",required:!0,type:{name:"string"}},addRowBefore:{defaultValue:null,description:"",name:"addRowBefore",required:!0,type:{name:"string"}},alignCenter:{defaultValue:null,description:"",name:"alignCenter",required:!0,type:{name:"string"}},alignLeft:{defaultValue:null,description:"",name:"alignLeft",required:!0,type:{name:"string"}},alignRight:{defaultValue:null,description:"",name:"alignRight",required:!0,type:{name:"string"}},bulletList:{defaultValue:null,description:"",name:"bulletList",required:!0,type:{name:"string"}},checkboxList:{defaultValue:null,description:"",name:"checkboxList",required:!0,type:{name:"string"}},codeBlock:{defaultValue:null,description:"",name:"codeBlock",required:!0,type:{name:"string"}},codeCopied:{defaultValue:null,description:"",name:"codeCopied",required:!0,type:{name:"string"}},codeInline:{defaultValue:null,description:"",name:"codeInline",required:!0,type:{name:"string"}},createLink:{defaultValue:null,description:"",name:"createLink",required:!0,type:{name:"string"}},createLinkError:{defaultValue:null,description:"",name:"createLinkError",required:!0,type:{name:"string"}},createNewDoc:{defaultValue:null,description:"",name:"createNewDoc",required:!0,type:{name:"string"}},deleteColumn:{defaultValue:null,description:"",name:"deleteColumn",required:!0,type:{name:"string"}},deleteRow:{defaultValue:null,description:"",name:"deleteRow",required:!0,type:{name:"string"}},deleteTable:{defaultValue:null,description:"",name:"deleteTable",required:!0,type:{name:"string"}},deleteImage:{defaultValue:null,description:"",name:"deleteImage",required:!0,type:{name:"string"}},downloadImage:{defaultValue:null,description:"",name:"downloadImage",required:!0,type:{name:"string"}},replaceImage:{defaultValue:null,description:"",name:"replaceImage",required:!0,type:{name:"string"}},alignImageLeft:{defaultValue:null,description:"",name:"alignImageLeft",required:!0,type:{name:"string"}},alignImageRight:{defaultValue:null,description:"",name:"alignImageRight",required:!0,type:{name:"string"}},alignImageDefault:{defaultValue:null,description:"",name:"alignImageDefault",required:!0,type:{name:"string"}},em:{defaultValue:null,description:"",name:"em",required:!0,type:{name:"string"}},embedInvalidLink:{defaultValue:null,description:"",name:"embedInvalidLink",required:!0,type:{name:"string"}},findOrCreateDoc:{defaultValue:null,description:"",name:"findOrCreateDoc",required:!0,type:{name:"string"}},h1:{defaultValue:null,description:"",name:"h1",required:!0,type:{name:"string"}},h2:{defaultValue:null,description:"",name:"h2",required:!0,type:{name:"string"}},h3:{defaultValue:null,description:"",name:"h3",required:!0,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},hr:{defaultValue:null,description:"",name:"hr",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},imageUploadError:{defaultValue:null,description:"",name:"imageUploadError",required:!0,type:{name:"string"}},imageCaptionPlaceholder:{defaultValue:null,description:"",name:"imageCaptionPlaceholder",required:!0,type:{name:"string"}},info:{defaultValue:null,description:"",name:"info",required:!0,type:{name:"string"}},infoNotice:{defaultValue:null,description:"",name:"infoNotice",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},linkCopied:{defaultValue:null,description:"",name:"linkCopied",required:!0,type:{name:"string"}},mark:{defaultValue:null,description:"",name:"mark",required:!0,type:{name:"string"}},newLineEmpty:{defaultValue:null,description:"",name:"newLineEmpty",required:!0,type:{name:"string"}},newLineWithSlash:{defaultValue:null,description:"",name:"newLineWithSlash",required:!0,type:{name:"string"}},noResults:{defaultValue:null,description:"",name:"noResults",required:!0,type:{name:"string"}},openLink:{defaultValue:null,description:"",name:"openLink",required:!0,type:{name:"string"}},orderedList:{defaultValue:null,description:"",name:"orderedList",required:!0,type:{name:"string"}},pageBreak:{defaultValue:null,description:"",name:"pageBreak",required:!0,type:{name:"string"}},pasteLink:{defaultValue:null,description:"",name:"pasteLink",required:!0,type:{name:"string"}},pasteLinkWithTitle:{defaultValue:null,description:"",name:"pasteLinkWithTitle",required:!0,type:{name:"(title: string) => string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},quote:{defaultValue:null,description:"",name:"quote",required:!0,type:{name:"string"}},removeLink:{defaultValue:null,description:"",name:"removeLink",required:!0,type:{name:"string"}},searchOrPasteLink:{defaultValue:null,description:"",name:"searchOrPasteLink",required:!0,type:{name:"string"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!0,type:{name:"string"}},strong:{defaultValue:null,description:"",name:"strong",required:!0,type:{name:"string"}},subheading:{defaultValue:null,description:"",name:"subheading",required:!0,type:{name:"string"}},table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"string"}},tip:{defaultValue:null,description:"",name:"tip",required:!0,type:{name:"string"}},tipNotice:{defaultValue:null,description:"",name:"tipNotice",required:!0,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!0,type:{name:"string"}},warningNotice:{defaultValue:null,description:"",name:"warningNotice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/menus/table.tsx#table"]={docgenInfo:table.__docgenInfo,name:"table",path:"src/menus/table.tsx#table"})}catch(__react_docgen_typescript_loader_error){}var prosemirror_tables_dist=__webpack_require__("./node_modules/prosemirror-tables/dist/index.js");function isInList(state){const $head=state.selection.$head;for(let d=$head.depth;d>0;d--)if(["ordered_list","bullet_list","checkbox_list"].includes($head.node(d).type.name))return!0;return!1}const queries_isMarkActive=type=>state=>{if(!type)return!1;const{from,$from,to,empty}=state.selection;return empty?type.isInSet(state.storedMarks||$from.marks()):state.doc.rangeHasMark(from,to,type)};var ResizeObserver_es=__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SSR="undefined"==typeof window,defaultPosition={left:-1e3,top:0,offset:0,visible:!1};function usePosition({menuRef,isSelectingText,props}){const{view,active}=props,{selection}=view.state,{width:menuWidth,height:menuHeight}=function useComponentSize(ref){const[size,setSize]=(0,react.useState)({width:0,height:0});return(0,react.useEffect)((()=>{const sizeObserver=new ResizeObserver_es.Z((entries=>{entries.forEach((({target})=>{size.width===target.clientWidth&&size.height===target.clientHeight||setSize({width:target.clientWidth,height:target.clientHeight})}))}));return sizeObserver.observe(ref.current),()=>sizeObserver.disconnect()}),[ref]),size}(menuRef),viewportHeight=function useViewportHeight(){const[height,setHeight]=(0,react.useState)((()=>window.visualViewport?.height||window.innerHeight));return(0,react.useLayoutEffect)((()=>{const handleResize=()=>{setHeight((()=>window.visualViewport?.height||window.innerHeight))};return window.visualViewport?.addEventListener("resize",handleResize),()=>{window.visualViewport?.removeEventListener("resize",handleResize)}}),[]),height}(),isTouchDevice=function useMediaQuery(query){const[matches,setMatches]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(window.matchMedia){const media=window.matchMedia(query);media.matches!==matches&&setMatches(media.matches);const listener=()=>{setMatches(media.matches)};return media.addListener(listener),()=>media.removeListener(listener)}}),[matches,query]),matches}("(hover: none) and (pointer: coarse)");if(!active||!menuWidth||!menuHeight||SSR||isSelectingText)return defaultPosition;if(isTouchDevice&&viewportHeight)return{left:0,right:0,top:viewportHeight-menuHeight,offset:0,visible:!0};let fromPos,toPos;try{fromPos=view.coordsAtPos(selection.from),toPos=view.coordsAtPos(selection.to,-1)}catch(err){return console.warn(err),defaultPosition}const selectionBounds={top:Math.min(fromPos.top,toPos.top),bottom:Math.max(fromPos.bottom,toPos.bottom),left:Math.min(fromPos.left,toPos.left),right:Math.max(fromPos.right,toPos.right)},isColSelection=selection.isColSelection&&selection.isColSelection(),isRowSelection=selection.isRowSelection&&selection.isRowSelection();if(isColSelection){const{node:element}=view.domAtPos(selection.from),{width}=element.getBoundingClientRect();selectionBounds.top-=20,selectionBounds.right=selectionBounds.left+width}isRowSelection&&(selectionBounds.right=selectionBounds.left=selectionBounds.left-18);if(selection.node&&"image"===selection.node.type.name){const imageElement=view.nodeDOM(selection.from).getElementsByTagName("img")[0],{left,top,width}=imageElement.getBoundingClientRect();return{left:Math.round(left+width/2+window.scrollX-menuWidth/2),top:Math.round(top+window.scrollY-menuHeight),offset:0,visible:!0}}{const halfSelection=Math.abs(selectionBounds.right-selectionBounds.left)/2,centerOfSelection=selectionBounds.left+halfSelection,margin=12,left=Math.min(window.innerWidth-menuWidth-margin,Math.max(margin,centerOfSelection-menuWidth/2)),top=Math.min(window.innerHeight-menuHeight-margin,Math.max(margin,selectionBounds.top-menuHeight)),offset=left-(centerOfSelection-menuWidth/2);return{left:Math.round(left+window.scrollX),top:Math.round(top+window.scrollY),offset:Math.round(offset),visible:!0}}}function FloatingToolbar(props){const menuRef=props.forwardedRef||react.createRef(),[isSelectingText,setSelectingText]=react.useState(!1),position=usePosition({menuRef,isSelectingText,props});return react.useEffect((()=>{const handleMouseDown=()=>{props.active||setSelectingText(!0)},handleMouseUp=()=>{setSelectingText(!1)};return window.addEventListener("mousedown",handleMouseDown),window.addEventListener("mouseup",handleMouseUp),()=>{window.removeEventListener("mousedown",handleMouseDown),window.removeEventListener("mouseup",handleMouseUp)}}),[props.active]),(0,jsx_runtime.jsx)(PortalCompat.Z,{children:(0,jsx_runtime.jsx)(Wrapper,{active:props.active&&position.visible,ref:menuRef,offset:position.offset,style:{top:`${position.top}px`,left:`${position.left}px`},children:position.visible&&props.children})})}FloatingToolbar.displayName="FloatingToolbar";const Wrapper=styled_components_browser_esm.ZP.div`
  will-change: opacity, transform;
  padding: 8px 16px;
  position: absolute;
  z-index: ${props=>props.theme.zIndex+100};
  opacity: 0;
  background-color: ${props=>props.theme.toolbarBackground};
  border-radius: 4px;
  transform: scale(0.95);
  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 150ms;
  line-height: 0;
  height: 40px;
  box-sizing: border-box;
  pointer-events: none;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    transform: translateX(-50%) rotate(45deg);
    background: ${props=>props.theme.toolbarBackground};
    border-radius: 3px;
    z-index: -1;
    position: absolute;
    bottom: -2px;
    left: calc(50% - ${props=>props.offset||0}px);
    pointer-events: none;
  }

  * {
    box-sizing: border-box;
  }

  ${({active})=>active&&"\n    transform: translateY(-6px) scale(1);\n    opacity: 1;\n  "};

  @media print {
    display: none;
  }

  @media (hover: none) and (pointer: coarse) {
    &:before {
      display: none;
    }

    transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1);
    border-radius: 0;
    width: 100vw;
    position: fixed;
  }
`,components_FloatingToolbar=react.forwardRef((function FloatingToolbarWithForwardedRef(props,ref){return(0,jsx_runtime.jsx)(FloatingToolbar,{...props,forwardedRef:ref})}));try{FloatingToolbar.displayName="FloatingToolbar",FloatingToolbar.__docgenInfo={description:"",displayName:"FloatingToolbar",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingToolbar.tsx#FloatingToolbar"]={docgenInfo:FloatingToolbar.__docgenInfo,name:"FloatingToolbar",path:"src/components/FloatingToolbar.tsx#FloatingToolbar"})}catch(__react_docgen_typescript_loader_error){}function isUrl(text){if(text.match(/\n/))return!1;try{return""!==new URL(text).hostname}catch(err){return!1}}const Input=styled_components_browser_esm.ZP.input`
  font-size: 15px;
  background: ${props=>props.theme.toolbarInput};
  color: ${props=>props.theme.toolbarItem};
  border-radius: 2px;
  padding: 3px 8px;
  border: 0;
  margin: 0;
  outline: none;
  flex-grow: 1;

  @media (hover: none) and (pointer: coarse) {
    font-size: 16px;
  }
`,components_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}const components_ToolbarButton=styled_components_browser_esm.ZP.button`
  display: inline-block;
  flex: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 8px;
  border: none;
  background: none;
  transition: opacity 100ms ease-in-out;
  padding: 0;
  opacity: 0.7;
  outline: none;
  pointer-events: all;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:before {
    position: absolute;
    content: "";
    top: -4px;
    right: -4px;
    left: -4px;
    bottom: -4px;
  }

  ${props=>props.active&&"opacity: 1;"};
`;try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/components/ToolbarButton.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}var smooth_scroll_into_view_if_needed_dist=__webpack_require__("./node_modules/smooth-scroll-into-view-if-needed/dist/index.js");function LinkSearchResult({title,subtitle,selected,icon,...rest}){const ref=react.useCallback((node=>{selected&&node&&(0,smooth_scroll_into_view_if_needed_dist.Z)(node,{scrollMode:"if-needed",block:"center",boundary:parent=>"link-search-results"!==parent.id})}),[selected]);return(0,jsx_runtime.jsxs)(ListItem,{ref,compact:!subtitle,selected,...rest,children:[(0,jsx_runtime.jsx)(IconWrapper,{children:icon}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Title,{children:title}),subtitle?(0,jsx_runtime.jsx)(Subtitle,{selected,children:subtitle}):null]})]})}LinkSearchResult.displayName="LinkSearchResult";const IconWrapper=styled_components_browser_esm.ZP.span`
  flex-shrink: 0;
  margin-right: 4px;
  opacity: 0.8;
`,ListItem=styled_components_browser_esm.ZP.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 2px;
  color: ${props=>props.theme.toolbarItem};
  background: ${props=>props.selected?props.theme.toolbarHoverBackground:"transparent"};
  font-family: ${props=>props.theme.fontFamily};
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  line-height: ${props=>props.compact?"inherit":"1.2"};
  height: ${props=>props.compact?"28px":"auto"};
`,Title=styled_components_browser_esm.ZP.div`
  font-size: 14px;
  font-weight: 500;
`,Subtitle=styled_components_browser_esm.ZP.div`
  font-size: 13px;
  opacity: ${props=>props.selected?.75:.5};
`,components_LinkSearchResult=LinkSearchResult;try{LinkSearchResult.displayName="LinkSearchResult",LinkSearchResult.__docgenInfo={description:"",displayName:"LinkSearchResult",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkSearchResult.tsx#LinkSearchResult"]={docgenInfo:LinkSearchResult.__docgenInfo,name:"LinkSearchResult",path:"src/components/LinkSearchResult.tsx#LinkSearchResult"})}catch(__react_docgen_typescript_loader_error){}class LinkEditor extends react.Component{discardInputValue=!1;initialValue=this.href;initialSelectionLength=this.props.to-this.props.from;state={selectedIndex:-1,value:this.href,previousValue:"",results:{}};get href(){return this.props.mark?this.props.mark.attrs.href:""}get suggestedLinkTitle(){const{state}=this.props.view,{value}=this.state,selectionText=state.doc.cut(state.selection.from,state.selection.to).textContent;return value.trim()||selectionText.trim()}componentWillUnmount=()=>{if(this.discardInputValue)return;if(this.state.value===this.initialValue)return;const href=(this.state.value||"").trim();if(!href)return this.handleRemoveLink();this.save(href,href)};save=(href,title)=>{if(0===(href=href.trim()).length)return;this.discardInputValue=!0;const{from,to}=this.props;isUrl(href)||href.startsWith("/")||href.startsWith("#")||href.startsWith("mailto:")||(href=`https://${href}`),this.props.onSelectLink({href,title,from,to})};handleKeyDown=event=>{switch(event.key){case"Enter":{event.preventDefault();const{selectedIndex,value}=this.state,results=this.state.results[value]||[],{onCreateLink}=this.props;if(selectedIndex>=0){const result=results[selectedIndex];result?this.save(result.url,result.title):onCreateLink&&selectedIndex===results.length&&this.handleCreateLink(this.suggestedLinkTitle)}else this.save(value,value);return void(this.initialSelectionLength&&this.moveSelectionToEnd())}case"Escape":return event.preventDefault(),void(this.initialValue?this.setState({value:this.initialValue},this.moveSelectionToEnd):this.handleRemoveLink());case"ArrowUp":{if(event.shiftKey)return;event.preventDefault(),event.stopPropagation();const prevIndex=this.state.selectedIndex-1;return void this.setState({selectedIndex:Math.max(-1,prevIndex)})}case"ArrowDown":if(event.shiftKey)return;case"Tab":{event.preventDefault(),event.stopPropagation();const{selectedIndex,value}=this.state,total=(this.state.results[value]||[]).length,nextIndex=selectedIndex+1;return void this.setState({selectedIndex:Math.min(nextIndex,total)})}}};handleFocusLink=selectedIndex=>{this.setState({selectedIndex})};handleChange=async event=>{const value=event.target.value;this.setState({value,selectedIndex:-1});const trimmedValue=value.trim();if(trimmedValue&&this.props.onSearchLink)try{const results=await this.props.onSearchLink(trimmedValue);this.setState((state=>({results:{...state.results,[trimmedValue]:results},previousValue:trimmedValue})))}catch(error){console.error(error)}};handlePaste=()=>{setTimeout((()=>this.save(this.state.value,this.state.value)),0)};handleOpenLink=event=>{event.preventDefault(),this.props.onClickLink(this.href,event)};handleCreateLink=value=>{this.discardInputValue=!0;const{onCreateLink}=this.props;if(0!==(value=value.trim()).length)return onCreateLink?onCreateLink(value):void 0};handleRemoveLink=()=>{this.discardInputValue=!0;const{from,to,mark,view,onRemoveLink}=this.props,{state,dispatch}=this.props.view;mark&&dispatch(state.tr.removeMark(from,to,mark)),onRemoveLink&&onRemoveLink(),view.focus()};handleSelectLink=(url,title)=>event=>{event.preventDefault(),this.save(url,title),this.initialSelectionLength&&this.moveSelectionToEnd()};moveSelectionToEnd=()=>{const{to,view}=this.props,{state,dispatch}=view;dispatch((0,prosemirror_utils_dist.B0)(to)(state.tr)),view.focus()};render(){const{dictionary,theme}=this.props,{value,selectedIndex}=this.state,results=this.state.results[value.trim()]||this.state.results[this.state.previousValue]||[],Tooltip=this.props.tooltip,looksLikeUrl=value.match(/^https?:\/\//i),suggestedLinkTitle=this.suggestedLinkTitle,showCreateLink=!!this.props.onCreateLink&&!(suggestedLinkTitle===this.initialValue)&&suggestedLinkTitle.length>0&&!looksLikeUrl,showResults=!!suggestedLinkTitle&&(showCreateLink||results.length>0);return(0,jsx_runtime.jsxs)(LinkEditor_Wrapper,{children:[(0,jsx_runtime.jsx)(components_Input,{value,placeholder:showCreateLink?dictionary.findOrCreateDoc:dictionary.searchOrPasteLink,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onChange:this.handleChange,autoFocus:""===this.href}),(0,jsx_runtime.jsx)(components_ToolbarButton,{onClick:this.handleOpenLink,disabled:!value,children:(0,jsx_runtime.jsx)(Tooltip,{tooltip:dictionary.openLink,placement:"top",children:(0,jsx_runtime.jsx)(lib.OpenIcon,{color:theme.toolbarItem})})}),(0,jsx_runtime.jsx)(components_ToolbarButton,{onClick:this.handleRemoveLink,children:(0,jsx_runtime.jsx)(Tooltip,{tooltip:dictionary.removeLink,placement:"top",children:this.initialValue?(0,jsx_runtime.jsx)(lib.TrashIcon,{color:theme.toolbarItem}):(0,jsx_runtime.jsx)(lib.CloseIcon,{color:theme.toolbarItem})})}),showResults&&(0,jsx_runtime.jsxs)(SearchResults,{id:"link-search-results",children:[results.map(((result,index)=>(0,jsx_runtime.jsx)(components_LinkSearchResult,{title:result.title,subtitle:result.subtitle,icon:(0,jsx_runtime.jsx)(lib.DocumentIcon,{color:theme.toolbarItem}),onMouseOver:()=>this.handleFocusLink(index),onClick:this.handleSelectLink(result.url,result.title),selected:index===selectedIndex},result.url))),showCreateLink&&(0,jsx_runtime.jsx)(components_LinkSearchResult,{title:suggestedLinkTitle,subtitle:dictionary.createNewDoc,icon:(0,jsx_runtime.jsx)(lib.PlusIcon,{color:theme.toolbarItem}),onMouseOver:()=>this.handleFocusLink(results.length),onClick:()=>{this.handleCreateLink(suggestedLinkTitle),this.initialSelectionLength&&this.moveSelectionToEnd()},selected:results.length===selectedIndex},"create")]})]})}}LinkEditor.displayName="LinkEditor";const LinkEditor_Wrapper=(0,styled_components_browser_esm.ZP)(components_Flex)`
  margin-left: -8px;
  margin-right: -8px;
  min-width: 336px;
  pointer-events: all;
`,SearchResults=styled_components_browser_esm.ZP.ol`
  background: ${props=>props.theme.toolbarBackground};
  position: absolute;
  top: 100%;
  width: 100%;
  height: auto;
  left: 0;
  padding: 4px 8px 8px;
  margin: 0;
  margin-top: -3px;
  margin-bottom: 0;
  border-radius: 0 0 4px 4px;
  overflow-y: auto;
  max-height: 25vh;

  @media (hover: none) and (pointer: coarse) {
    position: fixed;
    top: auto;
    bottom: 40px;
    border-radius: 0;
    max-height: 50vh;
    padding: 8px 8px 4px;
  }
`,components_LinkEditor=(0,styled_components_browser_esm.Zz)(LinkEditor);try{LinkEditor.displayName="LinkEditor",LinkEditor.__docgenInfo={description:"",displayName:"LinkEditor",props:{mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"Mark"}},from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"typeof Component | FC<any>"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},onRemoveLink:{defaultValue:null,description:"",name:"onRemoveLink",required:!1,type:{name:"(() => void)"}},onCreateLink:{defaultValue:null,description:"",name:"onCreateLink",required:!1,type:{name:"((title: string) => Promise<void>)"}},onSearchLink:{defaultValue:null,description:"",name:"onSearchLink",required:!1,type:{name:"((term: string) => Promise<SearchResult[]>)"}},onSelectLink:{defaultValue:null,description:"",name:"onSelectLink",required:!0,type:{name:"(options: { href: string; title?: string | undefined; from: number; to: number; }) => void"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(href: string, event: MouseEvent) => void"}},onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((message: string, code: string) => void)"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"{ background: string; text: string; code: string; cursor: string; divider: string; toolbarBackground: string; toolbarHoverBackground: string; toolbarInput: string; toolbarItem: string; tableDivider: string; ... 63 more ...; greyDark: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkEditor.tsx#LinkEditor"]={docgenInfo:LinkEditor.__docgenInfo,name:"LinkEditor",path:"src/components/LinkEditor.tsx#LinkEditor"})}catch(__react_docgen_typescript_loader_error){}const components_ToolbarSeparator=styled_components_browser_esm.ZP.div`
  height: 24px;
  width: 2px;
  background: ${props=>props.theme.toolbarItem};
  opacity: 0.3;
  display: inline-block;
  margin-left: 8px;
`;try{ToolbarSeparator.displayName="ToolbarSeparator",ToolbarSeparator.__docgenInfo={description:"",displayName:"ToolbarSeparator",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarSeparator.tsx#ToolbarSeparator"]={docgenInfo:ToolbarSeparator.__docgenInfo,name:"ToolbarSeparator",path:"src/components/ToolbarSeparator.tsx#ToolbarSeparator"})}catch(__react_docgen_typescript_loader_error){}const FlexibleWrapper=styled_components_browser_esm.ZP.div`
  display: flex;
`;class ToolbarMenu extends react.Component{render(){const{view,items}=this.props,{state}=view,Tooltip=this.props.tooltip;return(0,jsx_runtime.jsx)(FlexibleWrapper,{children:items.map(((item,index)=>{if("separator"===item.name&&!1!==item.visible)return(0,jsx_runtime.jsx)(components_ToolbarSeparator,{},index);if(!1===item.visible||!item.icon)return null;const Icon=item.icon,isActive=!!item.active&&item.active(state);return(0,jsx_runtime.jsx)(components_ToolbarButton,{onClick:()=>item.name&&this.props.commands[item.name](item.attrs),active:isActive,children:(0,jsx_runtime.jsx)(Tooltip,{tooltip:item.tooltip,placement:"top",children:(0,jsx_runtime.jsx)(Icon,{color:this.props.theme.toolbarItem})})},index)}))})}}ToolbarMenu.displayName="ToolbarMenu";const components_ToolbarMenu=(0,styled_components_browser_esm.Zz)(ToolbarMenu);try{ToolbarMenu.displayName="ToolbarMenu",ToolbarMenu.__docgenInfo={description:"",displayName:"ToolbarMenu",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"typeof Component | FC<any>"}},commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"Record<string, any>"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"{ background: string; text: string; code: string; cursor: string; divider: string; toolbarBackground: string; toolbarHoverBackground: string; toolbarInput: string; toolbarItem: string; tableDivider: string; ... 63 more ...; greyDark: string; }"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarMenu.tsx#ToolbarMenu"]={docgenInfo:ToolbarMenu.__docgenInfo,name:"ToolbarMenu",path:"src/components/ToolbarMenu.tsx#ToolbarMenu"})}catch(__react_docgen_typescript_loader_error){}function filterExcessSeparators(items){return items.reduce(((acc,item,index)=>{if("separator"===item.name&&0===index)return acc;if("separator"===item.name&&index===items.length-1)return acc;const prev=items[index-1];if(prev&&"separator"===prev.name&&"separator"===item.name)return acc;const next=items[index+1];return next&&"separator"===next.name&&"separator"===item.name?acc:[...acc,item]}),[])}function getMarkRange($pos,type){if(!$pos||!type)return!1;const start=$pos.parent.childAfter($pos.parentOffset);if(!start.node)return!1;const mark=start.node.marks.find((mark=>mark.type===type));if(!mark)return!1;let startIndex=$pos.index(),startPos=$pos.start()+start.offset,endIndex=startIndex+1,endPos=startPos+start.node.nodeSize;for(;startIndex>0&&mark.isInSet($pos.parent.child(startIndex-1).marks);)startIndex-=1,startPos-=$pos.parent.child(startIndex).nodeSize;for(;endIndex<$pos.parent.childCount&&mark.isInSet($pos.parent.child(endIndex).marks);)endPos+=$pos.parent.child(endIndex).nodeSize,endIndex+=1;return{from:startPos,to:endPos,mark}}let ToastType=function(ToastType){return ToastType.Error="error",ToastType.Info="info",ToastType}({});function findPlaceholderLink(doc,href){let result;return function findLinks(node,pos=0){"text"===node.type.name&&node.marks.forEach((mark=>{if("link"===mark.type.name&&mark.attrs.href===href&&(result={node,pos},result))return!1})),node.content.size&&node.descendants(findLinks)}(doc),result}const commands_createAndInsertLink=async function(view,title,href,options){const{dispatch,state}=view,{onCreateLink,onShowToast}=options;try{const url=await onCreateLink(title),result=findPlaceholderLink(view.state.doc,href);if(!result)return;dispatch(view.state.tr.removeMark(result.pos,result.pos+result.node.nodeSize,state.schema.marks.link).addMark(result.pos,result.pos+result.node.nodeSize,state.schema.marks.link.create({href:url})))}catch(err){const result=findPlaceholderLink(view.state.doc,href);if(!result)return;dispatch(view.state.tr.removeMark(result.pos,result.pos+result.node.nodeSize,state.schema.marks.link)),onShowToast&&onShowToast(options.dictionary.createLinkError,ToastType.Error)}};function isVisible(props){const{view}=props,{selection}=view.state;if(!selection)return!1;if(selection.empty)return!1;if(selection.node&&"hr"===selection.node.type.name)return!0;if(selection.node&&"image"===selection.node.type.name)return!0;if(selection.node)return!1;const nodes=selection.content().content.content;return some_default()(nodes,(n=>n.content.size))}class SelectionToolbar extends react.Component{isActive=!1;menuRef=react.createRef();componentDidUpdate(){const visible=isVisible(this.props);this.isActive&&!visible&&(this.isActive=!1,this.props.onClose()),!this.isActive&&visible&&(this.isActive=!0,this.props.onOpen())}componentDidMount(){window.addEventListener("mouseup",this.handleClickOutside)}componentWillUnmount(){window.removeEventListener("mouseup",this.handleClickOutside)}handleClickOutside=ev=>{if(ev.target instanceof Node&&this.menuRef.current&&this.menuRef.current.contains(ev.target))return;if(!this.isActive)return;const{view}=this.props;if(view.hasFocus())return;const{dispatch}=view;dispatch(view.state.tr.setSelection(new dist.Bs(view.state.doc.resolve(0))))};handleOnCreateLink=async title=>{const{dictionary,onCreateLink,view,onShowToast}=this.props;if(!onCreateLink)return;const{dispatch,state}=view,{from,to}=state.selection;if(from===to)return;const href=`creating#${title}…`,markType=state.schema.marks.link;dispatch(view.state.tr.removeMark(from,to,markType).addMark(from,to,markType.create({href}))),commands_createAndInsertLink(view,title,href,{onCreateLink,onShowToast,dictionary})};handleOnSelectLink=({href,from,to})=>{const{view}=this.props,{state,dispatch}=view,markType=state.schema.marks.link;dispatch(state.tr.removeMark(from,to,markType).addMark(from,to,markType.create({href})))};render(){const{dictionary,onCreateLink,isTemplate,rtl,...rest}=this.props,{view}=rest,{state}=view,{selection}=state,isCodeSelection=queries_isNodeActive(state.schema.nodes.code_block)(state),isDividerSelection=queries_isNodeActive(state.schema.nodes.hr)(state);if(isCodeSelection)return null;const colIndex=function getColumnIndex(selection){if(!selection.isColSelection||!selection.isColSelection())return;const path=selection.$from.path;return path[path.length-5]}(state.selection),rowIndex=function getRowIndex(selection){if(!selection.isRowSelection||!selection.isRowSelection())return;const path=selection.$from.path;return path[path.length-8]}(state.selection),isTableSelection=void 0!==colIndex&&void 0!==rowIndex,link=queries_isMarkActive(state.schema.marks.link)(state),range=getMarkRange(selection.$from,state.schema.marks.link),isImageSelection=selection.node&&"image"===selection.node.type.name;let isTextSelection=!1,items=[];if(isTableSelection?items=function tableMenuItems(dictionary){return[{name:"deleteTable",tooltip:dictionary.deleteTable,icon:lib.TrashIcon,active:()=>!1}]}(dictionary):void 0!==colIndex?items=function tableColMenuItems(state,index,rtl,dictionary){const{schema}=state;return[{name:"setColumnAttr",tooltip:dictionary.alignLeft,icon:lib.AlignLeftIcon,attrs:{index,alignment:"left"},active:queries_isNodeActive(schema.nodes.th,{colspan:1,rowspan:1,alignment:"left"})},{name:"setColumnAttr",tooltip:dictionary.alignCenter,icon:lib.AlignCenterIcon,attrs:{index,alignment:"center"},active:queries_isNodeActive(schema.nodes.th,{colspan:1,rowspan:1,alignment:"center"})},{name:"setColumnAttr",tooltip:dictionary.alignRight,icon:lib.AlignRightIcon,attrs:{index,alignment:"right"},active:queries_isNodeActive(schema.nodes.th,{colspan:1,rowspan:1,alignment:"right"})},{name:"separator"},{name:rtl?"addColumnAfter":"addColumnBefore",tooltip:rtl?dictionary.addColumnAfter:dictionary.addColumnBefore,icon:lib.InsertLeftIcon,active:()=>!1},{name:rtl?"addColumnBefore":"addColumnAfter",tooltip:rtl?dictionary.addColumnBefore:dictionary.addColumnAfter,icon:lib.InsertRightIcon,active:()=>!1},{name:"separator"},{name:"deleteColumn",tooltip:dictionary.deleteColumn,icon:lib.TrashIcon,active:()=>!1}]}(state,colIndex,rtl,dictionary):void 0!==rowIndex?items=function tableRowMenuItems(state,index,dictionary){return[{name:"addRowAfter",tooltip:dictionary.addRowBefore,icon:lib.InsertAboveIcon,attrs:{index:index-1},active:()=>!1,visible:0!==index},{name:"addRowAfter",tooltip:dictionary.addRowAfter,icon:lib.InsertBelowIcon,attrs:{index},active:()=>!1},{name:"separator"},{name:"deleteRow",tooltip:dictionary.deleteRow,icon:lib.TrashIcon,active:()=>!1}]}(0,rowIndex,dictionary):isImageSelection?items=function imageMenuItems(state,dictionary){const{schema}=state,isLeftAligned=queries_isNodeActive(schema.nodes.image,{layoutClass:"left-50"}),isRightAligned=queries_isNodeActive(schema.nodes.image,{layoutClass:"right-50"});return[{name:"alignLeft",tooltip:dictionary.alignLeft,icon:lib.AlignImageLeftIcon,visible:!0,active:isLeftAligned},{name:"alignCenter",tooltip:dictionary.alignCenter,icon:lib.AlignImageCenterIcon,visible:!0,active:state=>queries_isNodeActive(schema.nodes.image)(state)&&!isLeftAligned(state)&&!isRightAligned(state)},{name:"alignRight",tooltip:dictionary.alignRight,icon:lib.AlignImageRightIcon,visible:!0,active:isRightAligned},{name:"separator",visible:!0},{name:"downloadImage",tooltip:dictionary.downloadImage,icon:lib.DownloadIcon,visible:!!fetch,active:()=>!1},{name:"replaceImage",tooltip:dictionary.replaceImage,icon:lib.ReplaceIcon,visible:!0,active:()=>!1},{name:"deleteImage",tooltip:dictionary.deleteImage,icon:lib.TrashIcon,visible:!0,active:()=>!1}]}(state,dictionary):isDividerSelection?items=function dividerMenuItems(state,dictionary){const{schema}=state;return[{name:"hr",tooltip:dictionary.pageBreak,attrs:{markup:"***"},active:queries_isNodeActive(schema.nodes.hr,{markup:"***"}),icon:lib.PageBreakIcon},{name:"hr",tooltip:dictionary.hr,attrs:{markup:"---"},active:queries_isNodeActive(schema.nodes.hr,{markup:"---"}),icon:lib.HorizontalRuleIcon}]}(state,dictionary):(items=function formattingMenuItems(state,isTemplate,dictionary){const{schema}=state,isTable=(0,prosemirror_tables_dist.Lw)(state),isList=isInList(state),allowBlocks=!isTable&&!isList;return[{name:"placeholder",tooltip:dictionary.placeholder,icon:lib.InputIcon,active:queries_isMarkActive(schema.marks.placeholder),visible:isTemplate},{name:"separator",visible:isTemplate},{name:"strong",tooltip:dictionary.strong,icon:lib.BoldIcon,active:queries_isMarkActive(schema.marks.strong)},{name:"strikethrough",tooltip:dictionary.strikethrough,icon:lib.StrikethroughIcon,active:queries_isMarkActive(schema.marks.strikethrough)},{name:"highlight",tooltip:dictionary.mark,icon:lib.HighlightIcon,active:queries_isMarkActive(schema.marks.highlight),visible:!isTemplate},{name:"code_inline",tooltip:dictionary.codeInline,icon:lib.CodeIcon,active:queries_isMarkActive(schema.marks.code_inline)},{name:"separator",visible:allowBlocks},{name:"heading",tooltip:dictionary.heading,icon:lib.Heading1Icon,active:queries_isNodeActive(schema.nodes.heading,{level:1}),attrs:{level:1},visible:allowBlocks},{name:"heading",tooltip:dictionary.subheading,icon:lib.Heading2Icon,active:queries_isNodeActive(schema.nodes.heading,{level:2}),attrs:{level:2},visible:allowBlocks},{name:"blockquote",tooltip:dictionary.quote,icon:lib.BlockQuoteIcon,active:queries_isNodeActive(schema.nodes.blockquote),attrs:{level:2},visible:allowBlocks},{name:"separator",visible:allowBlocks||isList},{name:"checkbox_list",tooltip:dictionary.checkboxList,icon:lib.TodoListIcon,keywords:"checklist checkbox task",active:queries_isNodeActive(schema.nodes.checkbox_list),visible:allowBlocks||isList},{name:"bullet_list",tooltip:dictionary.bulletList,icon:lib.BulletedListIcon,active:queries_isNodeActive(schema.nodes.bullet_list),visible:allowBlocks||isList},{name:"ordered_list",tooltip:dictionary.orderedList,icon:lib.OrderedListIcon,active:queries_isNodeActive(schema.nodes.ordered_list),visible:allowBlocks||isList},{name:"separator"},{name:"link",tooltip:dictionary.createLink,icon:lib.LinkIcon,active:queries_isMarkActive(schema.marks.link),attrs:{href:""}}]}(state,isTemplate,dictionary),isTextSelection=!0),items=items.filter((item=>"separator"===item.name||!(item.name&&!this.props.commands[item.name]))),items=filterExcessSeparators(items),!items.length)return null;const selectionText=state.doc.cut(state.selection.from,state.selection.to).textContent;return isTextSelection&&!selectionText?null:(0,jsx_runtime.jsx)(PortalCompat.Z,{children:(0,jsx_runtime.jsx)(components_FloatingToolbar,{view,active:isVisible(this.props),ref:this.menuRef,children:link&&range?(0,jsx_runtime.jsx)(components_LinkEditor,{dictionary,mark:range.mark,from:range.from,to:range.to,onCreateLink:onCreateLink?this.handleOnCreateLink:void 0,onSelectLink:this.handleOnSelectLink,...rest}):(0,jsx_runtime.jsx)(components_ToolbarMenu,{items,...rest})})})}}SelectionToolbar.displayName="SelectionToolbar";try{SelectionToolbar.displayName="SelectionToolbar",SelectionToolbar.__docgenInfo={description:"",displayName:"SelectionToolbar",props:{dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"typeof Component | FC<any>"}},rtl:{defaultValue:null,description:"",name:"rtl",required:!0,type:{name:"boolean"}},isTemplate:{defaultValue:null,description:"",name:"isTemplate",required:!0,type:{name:"boolean"}},commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"Record<string, any>"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSearchLink:{defaultValue:null,description:"",name:"onSearchLink",required:!1,type:{name:"((term: string) => Promise<SearchResult[]>)"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(href: string, event: MouseEvent) => void"}},onCreateLink:{defaultValue:null,description:"",name:"onCreateLink",required:!1,type:{name:"((title: string) => Promise<string>)"}},onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((msg: string, code: string) => void)"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectionToolbar.tsx#SelectionToolbar"]={docgenInfo:SelectionToolbar.__docgenInfo,name:"SelectionToolbar",path:"src/components/SelectionToolbar.tsx#SelectionToolbar"})}catch(__react_docgen_typescript_loader_error){}var capitalize=__webpack_require__("./node_modules/lodash/capitalize.js"),capitalize_default=__webpack_require__.n(capitalize);const VisuallyHidden=styled_components_browser_esm.ZP.span`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`,components_VisuallyHidden=VisuallyHidden;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}function getDataTransferFiles(event){let dataTransferItemsList=[];if(event.dataTransfer){const dt=event.dataTransfer;dt.files&&dt.files.length?dataTransferItemsList=dt.files:dt.items&&dt.items.length&&(dataTransferItemsList=dt.items)}else event.target&&event.target.files&&(dataTransferItemsList=event.target.files);return Array.prototype.slice.call(dataTransferItemsList)}const uploadPlaceholder=new dist.Sy({state:{init:()=>prosemirror_view_dist.EH.empty,apply(tr,set){set=set.map(tr.mapping,tr.doc);const action=tr.getMeta(this);if(action?.add)if(action.add.replaceExisting){const $pos=tr.doc.resolve(action.add.pos);if("image"===$pos.nodeAfter?.type.name){const deco=prosemirror_view_dist.p.node($pos.pos,$pos.pos+$pos.nodeAfter.nodeSize,{class:"image-replacement-uploading"},{id:action.add.id});set=set.add(tr.doc,[deco])}}else{const element=document.createElement("div");element.className="image placeholder";const img=document.createElement("img");img.src=URL.createObjectURL(action.add.file),element.appendChild(img);const deco=prosemirror_view_dist.p.widget(action.add.pos,element,{id:action.add.id});set=set.add(tr.doc,[deco])}return action?.remove&&(set=set.remove(set.find(void 0,void 0,(spec=>spec.id===action.remove.id)))),set}},props:{decorations(state){return this.getState(state)}}}),lib_uploadPlaceholder=uploadPlaceholder;function findPlaceholder(state,id){const decos=uploadPlaceholder.getState(state),found=decos?.find(void 0,void 0,(spec=>spec.id===id));return found?.length?[found[0].from,found[0].to]:null}let uploadId=0;const commands_insertFiles=function(view,event,pos,files,options){const images=files.filter((file=>/image/i.test(file.type)));if(0===images.length)return;const{dictionary,uploadImage,onImageUploadStart,onImageUploadStop,onShowToast}=options;if(!uploadImage)return void console.warn("uploadImage callback must be defined to handle image uploads.");event.preventDefault(),onImageUploadStart&&onImageUploadStart();const{schema}=view.state;let complete=0;for(const file of images){const id="upload-"+uploadId++,{tr}=view.state;tr.setMeta(lib_uploadPlaceholder,{add:{id,file,pos,replaceExisting:options.replaceExisting}}),view.dispatch(tr),uploadImage(file).then((src=>{const newImg=new Image;newImg.onload=()=>{const result=findPlaceholder(view.state,id);if(null===result)return;const[from,to]=result;view.dispatch(view.state.tr.replaceWith(from,to||from,schema.nodes.image.create({src})).setMeta(lib_uploadPlaceholder,{remove:{id}})),view.state.selection.from===from&&view.dispatch(view.state.tr.setSelection(new dist.qv(view.state.doc.resolve(from))))},newImg.onerror=error=>{throw error},newImg.src=src})).catch((error=>{console.error(error);const transaction=view.state.tr.setMeta(lib_uploadPlaceholder,{remove:{id}});view.dispatch(transaction),onShowToast&&onShowToast(dictionary.imageUploadError,ToastType.Error)})).finally((()=>{complete++,complete===images.length&&onImageUploadStop&&onImageUploadStop()}))}},CommandMenu_SSR="undefined"==typeof window,CommandMenu_defaultPosition={left:-1e3,top:0,bottom:void 0,isAbove:!1};class CommandMenu extends react.Component{menuRef=react.createRef();inputRef=react.createRef();state={left:-1e3,top:0,bottom:void 0,isAbove:!1,selectedIndex:0,insertItem:void 0};componentDidMount(){CommandMenu_SSR||window.addEventListener("keydown",this.handleKeyDown)}shouldComponentUpdate(nextProps,nextState){return nextProps.search!==this.props.search||nextProps.isActive!==this.props.isActive||nextState!==this.state}componentDidUpdate(prevProps){if(!prevProps.isActive&&this.props.isActive){const position=this.calculatePosition(this.props);this.setState({insertItem:void 0,selectedIndex:0,...position})}else prevProps.search!==this.props.search&&this.setState({selectedIndex:0})}componentWillUnmount(){CommandMenu_SSR||window.removeEventListener("keydown",this.handleKeyDown)}handleKeyDown=event=>{if(this.props.isActive){if("Enter"===event.key){event.preventDefault(),event.stopPropagation();const item=this.filtered[this.state.selectedIndex];item?this.insertItem(item):this.props.onClose()}if("ArrowUp"===event.key||"Tab"===event.key&&event.shiftKey||event.ctrlKey&&"p"===event.key)if(event.preventDefault(),event.stopPropagation(),this.filtered.length){const prevIndex=this.state.selectedIndex-1,prev=this.filtered[prevIndex];this.setState({selectedIndex:Math.max(0,prev&&"separator"===prev.name?prevIndex-1:prevIndex)})}else this.close();if("ArrowDown"===event.key||"Tab"===event.key&&!event.shiftKey||event.ctrlKey&&"n"===event.key)if(event.preventDefault(),event.stopPropagation(),this.filtered.length){const total=this.filtered.length-1,nextIndex=this.state.selectedIndex+1,next=this.filtered[nextIndex];this.setState({selectedIndex:Math.min(next&&"separator"===next.name?nextIndex+1:nextIndex,total)})}else this.close();"Escape"===event.key&&this.close()}};insertItem=item=>{switch(item.name){case"image":return this.triggerImagePick();case"embed":return this.triggerLinkInput(item);case"link":return this.clearSearch(),this.props.onClose(),void this.props.onLinkToolbarOpen?.();default:this.insertBlock(item)}};close=()=>{this.props.onClose(),this.props.view.focus()};handleLinkInputKeydown=event=>{if(this.props.isActive&&this.state.insertItem){if("Enter"===event.key){event.preventDefault(),event.stopPropagation();const href=event.currentTarget.value;if(!this.state.insertItem.matcher(href)&&this.props.onShowToast)return void this.props.onShowToast(this.props.dictionary.embedInvalidLink,ToastType.Error);this.insertBlock({name:"embed",attrs:{href}})}"Escape"===event.key&&(this.props.onClose(),this.props.view.focus())}};handleLinkInputPaste=event=>{if(!this.props.isActive)return;if(!this.state.insertItem)return;const href=event.clipboardData.getData("text/plain");this.state.insertItem.matcher(href)&&(event.preventDefault(),event.stopPropagation(),this.insertBlock({name:"embed",attrs:{href}}))};triggerImagePick=()=>{this.inputRef.current&&this.inputRef.current.click()};triggerLinkInput=item=>{this.setState({insertItem:item})};handleImagePicked=event=>{const files=getDataTransferFiles(event),{view,uploadImage,onImageUploadStart,onImageUploadStop,onShowToast}=this.props,{state}=view,parent=(0,prosemirror_utils_dist.Kk)((node=>!!node))(state.selection);if(this.clearSearch(),!uploadImage)throw new Error("uploadImage prop is required to replace images");parent&&commands_insertFiles(view,event,parent.pos,files,{uploadImage,onImageUploadStart,onImageUploadStop,onShowToast,dictionary:this.props.dictionary}),this.inputRef.current&&(this.inputRef.current.value=""),this.props.onClose()};clearSearch=()=>{this.props.onClearSearch()};insertBlock(item){this.clearSearch();const command=this.props.commands[item.name];command?command(item.attrs):this.props.commands[`create${capitalize_default()(item.name)}`](item.attrs),this.props.onClose()}get caretPosition(){const selection=window.document.getSelection();if(!selection||!selection.anchorNode||!selection.focusNode)return{top:0,left:0};const range=window.document.createRange();range.setStart(selection.anchorNode,selection.anchorOffset),range.setEnd(selection.focusNode,selection.focusOffset);0===range.getClientRects().length&&range.startContainer&&range.collapsed&&range.selectNodeContents(range.startContainer);const rect=range.getBoundingClientRect();return{top:rect.top,left:rect.left}}calculatePosition(props){const{view}=props,{selection}=view.state;let startPos;try{startPos=view.coordsAtPos(selection.from)}catch(err){return console.warn(err),CommandMenu_defaultPosition}const domAtPos=view.domAtPos.bind(view),ref=this.menuRef.current,offsetHeight=ref?ref.offsetHeight:0,paragraph={node:(0,prosemirror_utils_dist.TM)(selection.from,domAtPos)};if(!props.isActive||!paragraph.node||!paragraph.node.getBoundingClientRect||CommandMenu_SSR)return CommandMenu_defaultPosition;const{left}=this.caretPosition,{top,bottom,right}=paragraph.node.getBoundingClientRect();let leftPos=left+window.scrollX;return props.rtl&&ref&&(leftPos=right-ref.scrollWidth),startPos.top-offsetHeight>24?{left:leftPos,top:void 0,bottom:window.innerHeight-top-window.scrollY,isAbove:!1}:{left:leftPos,top:bottom+window.scrollY,bottom:void 0,isAbove:!0}}get filtered(){const{embeds=[],search="",uploadImage,commands,filterable=!0}=this.props;let items=this.props.items;const embedItems=[];for(const embed of embeds)embed.title&&embed.icon&&embedItems.push({...embed,name:"embed"});embedItems.length&&(items.push({name:"separator"}),items=items.concat(embedItems));return filterExcessSeparators(items.filter((item=>{if("separator"===item.name)return!0;if(item.name&&!commands[item.name]&&!commands[`create${capitalize_default()(item.name)}`])return!1;if(!uploadImage&&"image"===item.name)return!1;if(!search)return!item.defaultHidden;const n=search.toLowerCase();return filterable?(item.title||"").toLowerCase().includes(n)||(item.keywords||"").toLowerCase().includes(n):item})))}render(){const{dictionary,isActive,uploadImage}=this.props,items=this.filtered,{insertItem,...positioning}=this.state;return(0,jsx_runtime.jsx)(PortalCompat.Z,{children:(0,jsx_runtime.jsxs)(CommandMenu_Wrapper,{id:this.props.id||"block-menu-container",active:isActive,ref:this.menuRef,...positioning,children:[insertItem?(0,jsx_runtime.jsx)(LinkInputWrapper,{children:(0,jsx_runtime.jsx)(LinkInput,{type:"text",placeholder:insertItem.title?dictionary.pasteLinkWithTitle(insertItem.title):dictionary.pasteLink,onKeyDown:this.handleLinkInputKeydown,onPaste:this.handleLinkInputPaste,autoFocus:!0})}):(0,jsx_runtime.jsxs)(List,{children:[items.map(((item,index)=>{if("separator"===item.name)return(0,jsx_runtime.jsx)(CommandMenu_ListItem,{children:(0,jsx_runtime.jsx)("hr",{})},index);const selected=index===this.state.selectedIndex&&isActive;return item.title?(0,jsx_runtime.jsx)(CommandMenu_ListItem,{children:this.props.renderMenuItem(item,index,{selected,onClick:()=>this.insertItem(item)})},index):null})),0===items.length&&(0,jsx_runtime.jsx)(CommandMenu_ListItem,{children:(0,jsx_runtime.jsx)(Empty,{children:dictionary.noResults})})]}),uploadImage&&(0,jsx_runtime.jsx)(components_VisuallyHidden,{children:(0,jsx_runtime.jsx)("input",{type:"file",ref:this.inputRef,onChange:this.handleImagePicked,accept:"image/*"})})]})})}}CommandMenu.displayName="CommandMenu";const LinkInputWrapper=styled_components_browser_esm.ZP.div`
  margin: 8px;
`,LinkInput=(0,styled_components_browser_esm.ZP)(components_Input)`
  height: 36px;
  width: 100%;
  color: ${props=>props.theme.blockToolbarText};
`,List=styled_components_browser_esm.ZP.ol`
  list-style: none;
  text-align: left;
  height: 100%;
  padding: 8px 0;
  margin: 0;
`,CommandMenu_ListItem=styled_components_browser_esm.ZP.li`
  padding: 0;
  margin: 0;
`,Empty=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  color: ${props=>props.theme.textSecondary};
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  padding: 0 16px;
`,CommandMenu_Wrapper=styled_components_browser_esm.ZP.div`
  color: ${props=>props.theme.text};
  font-family: ${props=>props.theme.fontFamily};
  position: absolute;
  z-index: ${props=>props.theme.zIndex+100};
  ${props=>void 0!==props.top&&`top: ${props.top}px`};
  ${props=>void 0!==props.bottom&&`bottom: ${props.bottom}px`};
  left: ${props=>props.left}px;
  background-color: ${props=>props.theme.blockToolbarBackground};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 150ms;
  line-height: 0;
  box-sizing: border-box;
  pointer-events: none;
  white-space: nowrap;
  width: 300px;
  max-height: 224px;
  overflow: hidden;
  overflow-y: auto;

  * {
    box-sizing: border-box;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid ${props=>props.theme.blockToolbarDivider};
  }

  ${({active,isAbove})=>active&&`\n    transform: translateY(${isAbove?"6px":"-6px"}) scale(1);\n    pointer-events: all;\n    opacity: 1;\n  `};

  @media print {
    display: none;
  }
`,components_CommandMenu=CommandMenu;try{CommandMenu_Wrapper.displayName="Wrapper",CommandMenu_Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},isAbove:{defaultValue:null,description:"",name:"isAbove",required:!0,type:{name:"boolean"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CommandMenu.tsx#Wrapper"]={docgenInfo:CommandMenu_Wrapper.__docgenInfo,name:"Wrapper",path:"src/components/CommandMenu.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{CommandMenu.displayName="CommandMenu",CommandMenu.__docgenInfo={description:"",displayName:"CommandMenu",props:{rtl:{defaultValue:null,description:"",name:"rtl",required:!0,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"Record<string, any>"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},uploadImage:{defaultValue:null,description:"",name:"uploadImage",required:!1,type:{name:"((file: File) => Promise<string>)"}},onImageUploadStart:{defaultValue:null,description:"",name:"onImageUploadStart",required:!1,type:{name:"(() => void)"}},onImageUploadStop:{defaultValue:null,description:"",name:"onImageUploadStop",required:!1,type:{name:"(() => void)"}},onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((message: string, id: string) => void)"}},onLinkToolbarOpen:{defaultValue:null,description:"",name:"onLinkToolbarOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onClearSearch:{defaultValue:null,description:"",name:"onClearSearch",required:!0,type:{name:"() => void"}},embeds:{defaultValue:null,description:"",name:"embeds",required:!1,type:{name:"EmbedDescriptor[]"}},renderMenuItem:{defaultValue:null,description:"",name:"renderMenuItem",required:!0,type:{name:"(item: T, index: number, options: { selected: boolean; onClick: () => void; }) => ReactNode"}},filterable:{defaultValue:null,description:"",name:"filterable",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CommandMenu.tsx#CommandMenu"]={docgenInfo:CommandMenu.__docgenInfo,name:"CommandMenu",path:"src/components/CommandMenu.tsx#CommandMenu"})}catch(__react_docgen_typescript_loader_error){}function BlockMenuItem({selected,disabled,onClick,title,shortcut,icon,containerId="block-menu-container"}){const Icon=icon,ref=react.useCallback((node=>{selected&&node&&(0,smooth_scroll_into_view_if_needed_dist.Z)(node,{scrollMode:"if-needed",block:"center",boundary:parent=>parent.id!==containerId})}),[selected,containerId]);return(0,jsx_runtime.jsxs)(MenuItem,{selected,onClick:disabled?void 0:onClick,ref,children:[Icon&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Icon,{color:selected?theme.blockToolbarIconSelected:theme.blockToolbarIcon}),"  "]}),title,shortcut&&(0,jsx_runtime.jsx)(Shortcut,{children:shortcut})]})}BlockMenuItem.displayName="BlockMenuItem";const MenuItem=styled_components_browser_esm.ZP.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  width: 100%;
  height: 36px;
  cursor: pointer;
  border: none;
  opacity: ${props=>props.disabled?".5":"1"};
  color: ${props=>props.selected?props.theme.blockToolbarTextSelected:props.theme.blockToolbarText};
  background: ${props=>props.selected?props.theme.blockToolbarSelectedBackground||props.theme.blockToolbarTrigger:"none"};
  padding: 0 16px;
  outline: none;

  &:hover,
  &:active {
    color: ${props=>props.theme.blockToolbarTextSelected};
    background: ${props=>props.selected?props.theme.blockToolbarSelectedBackground||props.theme.blockToolbarTrigger:props.theme.blockToolbarHoverBackground};
  }
`,Shortcut=styled_components_browser_esm.ZP.span`
  color: ${props=>props.theme.textSecondary};
  flex-grow: 1;
  text-align: right;
`,components_BlockMenuItem=(0,styled_components_browser_esm.Zz)(BlockMenuItem);try{BlockMenuItem.displayName="BlockMenuItem",BlockMenuItem.__docgenInfo={description:"",displayName:"BlockMenuItem",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"{ background: string; text: string; code: string; cursor: string; divider: string; toolbarBackground: string; toolbarHoverBackground: string; toolbarInput: string; toolbarItem: string; tableDivider: string; ... 63 more ...; greyDark: string; }"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"typeof Component | FC<any>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},shortcut:{defaultValue:null,description:"",name:"shortcut",required:!1,type:{name:"string"}},containerId:{defaultValue:{value:"block-menu-container"},description:"",name:"containerId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BlockMenuItem.tsx#BlockMenuItem"]={docgenInfo:BlockMenuItem.__docgenInfo,name:"BlockMenuItem",path:"src/components/BlockMenuItem.tsx#BlockMenuItem"})}catch(__react_docgen_typescript_loader_error){}const mod=!("undefined"==typeof window)&&"MacIntel"===window.navigator.platform?"⌘":"ctrl";class BlockMenu extends react.Component{get items(){return function blockMenuItems(dictionary){return[{name:"heading",title:dictionary.h1,keywords:"h1 heading1 title",icon:lib.Heading1Icon,shortcut:"^ ⇧ 1",attrs:{level:1}},{name:"heading",title:dictionary.h2,keywords:"h2 heading2",icon:lib.Heading2Icon,shortcut:"^ ⇧ 2",attrs:{level:2}},{name:"heading",title:dictionary.h3,keywords:"h3 heading3",icon:lib.Heading3Icon,shortcut:"^ ⇧ 3",attrs:{level:3}},{name:"separator"},{name:"checkbox_list",title:dictionary.checkboxList,icon:lib.TodoListIcon,keywords:"checklist checkbox task",shortcut:"^ ⇧ 7"},{name:"bullet_list",title:dictionary.bulletList,icon:lib.BulletedListIcon,shortcut:"^ ⇧ 8"},{name:"ordered_list",title:dictionary.orderedList,icon:lib.OrderedListIcon,shortcut:"^ ⇧ 9"},{name:"separator"},{name:"table",title:dictionary.table,icon:lib.TableIcon,attrs:{rowsCount:3,colsCount:3}},{name:"blockquote",title:dictionary.quote,icon:lib.BlockQuoteIcon,shortcut:`${mod} ]`},{name:"code_block",title:dictionary.codeBlock,icon:lib.CodeIcon,shortcut:"^ ⇧ \\",keywords:"script"},{name:"hr",title:dictionary.hr,icon:lib.HorizontalRuleIcon,shortcut:`${mod} _`,keywords:"horizontal rule break line"},{name:"hr",title:dictionary.pageBreak,icon:lib.PageBreakIcon,keywords:"page print break line",attrs:{markup:"***"}},{name:"image",title:dictionary.image,icon:lib.ImageIcon,keywords:"picture photo"},{name:"link",title:dictionary.link,icon:lib.LinkIcon,shortcut:`${mod} k`,keywords:"link url uri href"},{name:"separator"},{name:"container_notice",title:dictionary.infoNotice,icon:lib.InfoIcon,keywords:"container_notice card information",attrs:{style:"info"}},{name:"container_notice",title:dictionary.warningNotice,icon:lib.WarningIcon,keywords:"container_notice card error",attrs:{style:"warning"}},{name:"container_notice",title:dictionary.tipNotice,icon:lib.StarredIcon,keywords:"container_notice card suggestion",attrs:{style:"tip"}}]}(this.props.dictionary)}clearSearch=()=>{const{state,dispatch}=this.props.view,parent=(0,prosemirror_utils_dist.Kk)((node=>!!node))(state.selection);parent&&dispatch(state.tr.insertText("",parent.pos,state.selection.to))};render(){return(0,jsx_runtime.jsx)(components_CommandMenu,{...this.props,filterable:!0,onClearSearch:this.clearSearch,renderMenuItem:(item,_index,options)=>(0,jsx_runtime.jsx)(components_BlockMenuItem,{onClick:options.onClick,selected:options.selected,icon:item.icon,title:item.title,shortcut:item.shortcut}),items:this.items})}}BlockMenu.displayName="BlockMenu";const components_BlockMenu=BlockMenu;try{BlockMenu.displayName="BlockMenu",BlockMenu.__docgenInfo={description:"",displayName:"BlockMenu",props:{onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((message: string, id: string) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},uploadImage:{defaultValue:null,description:"",name:"uploadImage",required:!1,type:{name:"((file: File) => Promise<string>)"}},onImageUploadStart:{defaultValue:null,description:"",name:"onImageUploadStart",required:!1,type:{name:"(() => void)"}},onImageUploadStop:{defaultValue:null,description:"",name:"onImageUploadStop",required:!1,type:{name:"(() => void)"}},embeds:{defaultValue:null,description:"",name:"embeds",required:!1,type:{name:"EmbedDescriptor[]"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},rtl:{defaultValue:null,description:"",name:"rtl",required:!0,type:{name:"boolean"}},commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"Record<string, any>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onLinkToolbarOpen:{defaultValue:null,description:"",name:"onLinkToolbarOpen",required:!1,type:{name:"() => void"}},filterable:{defaultValue:null,description:"",name:"filterable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BlockMenu.tsx#BlockMenu"]={docgenInfo:BlockMenu.__docgenInfo,name:"BlockMenu",path:"src/components/BlockMenu.tsx#BlockMenu"})}catch(__react_docgen_typescript_loader_error){}var gemoji=__webpack_require__("./node_modules/gemoji/index.json"),FuzzySearch=__webpack_require__("./node_modules/fuzzy-search/src/FuzzySearch.js");const Emoji=styled_components_browser_esm.ZP.span`
  font-size: 16px;
`,EmojiTitle=({emoji,title})=>(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(Emoji,{className:"emoji",children:emoji}),"  ",title]});function EmojiMenuItem(props){return(0,jsx_runtime.jsx)(components_BlockMenuItem,{...props,title:(0,jsx_runtime.jsx)(EmojiTitle,{emoji:props.emoji,title:props.title})})}EmojiTitle.displayName="EmojiTitle",EmojiMenuItem.displayName="EmojiMenuItem";try{EmojiMenuItem.displayName="EmojiMenuItem",EmojiMenuItem.__docgenInfo={description:"",displayName:"EmojiMenuItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"typeof Component | FC<any>"}},containerId:{defaultValue:null,description:"",name:"containerId",required:!1,type:{name:"string"}},emoji:{defaultValue:null,description:"",name:"emoji",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EmojiMenuItem.tsx#EmojiMenuItem"]={docgenInfo:EmojiMenuItem.__docgenInfo,name:"EmojiMenuItem",path:"src/components/EmojiMenuItem.tsx#EmojiMenuItem"})}catch(__react_docgen_typescript_loader_error){}const searcher=new FuzzySearch.Z(gemoji,["names"],{caseSensitive:!0,sort:!0});class EmojiMenu extends react.Component{get items(){const{search=""}=this.props,n=search.toLowerCase();return searcher.search(n).map((item=>{const description=item.description,name=item.names[0];return{...item,name:"emoji",title:name,description,attrs:{markup:name,"data-name":name}}})).slice(0,10)}clearSearch=()=>{const{state,dispatch}=this.props.view;dispatch(state.tr.insertText("",state.selection.$from.pos-(this.props.search??"").length-1,state.selection.to))};render(){return(0,jsx_runtime.jsx)(components_CommandMenu,{...this.props,id:"emoji-menu-container",filterable:!1,onClearSearch:this.clearSearch,renderMenuItem:(item,_index,options)=>(0,jsx_runtime.jsx)(EmojiMenuItem,{onClick:options.onClick,selected:options.selected,title:item.description,emoji:item.emoji,containerId:"emoji-menu-container"}),items:this.items})}}EmojiMenu.displayName="EmojiMenu";const components_EmojiMenu=EmojiMenu;try{EmojiMenu.displayName="EmojiMenu",EmojiMenu.__docgenInfo={description:"",displayName:"EmojiMenu",props:{onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((message: string, id: string) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},uploadImage:{defaultValue:null,description:"",name:"uploadImage",required:!1,type:{name:"((file: File) => Promise<string>)"}},onImageUploadStart:{defaultValue:null,description:"",name:"onImageUploadStart",required:!1,type:{name:"(() => void)"}},onImageUploadStop:{defaultValue:null,description:"",name:"onImageUploadStop",required:!1,type:{name:"(() => void)"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},rtl:{defaultValue:null,description:"",name:"rtl",required:!0,type:{name:"boolean"}},commands:{defaultValue:null,description:"",name:"commands",required:!0,type:{name:"Record<string, any>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},filterable:{defaultValue:null,description:"",name:"filterable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EmojiMenu.tsx#EmojiMenu"]={docgenInfo:EmojiMenu.__docgenInfo,name:"EmojiMenu",path:"src/components/EmojiMenu.tsx#EmojiMenu"})}catch(__react_docgen_typescript_loader_error){}class LinkToolbar extends react.Component{menuRef=react.createRef();state={left:-1e3,top:void 0};componentDidMount(){window.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClickOutside)}handleClickOutside=ev=>{ev.target&&this.menuRef.current&&this.menuRef.current.contains(ev.target)||this.props.onClose()};handleOnCreateLink=async title=>{const{dictionary,onCreateLink,view,onClose,onShowToast}=this.props;if(onClose(),this.props.view.focus(),!onCreateLink)return;const{dispatch,state}=view,{from,to}=state.selection;if(from!==to)return;const href=`creating#${title}…`;dispatch(view.state.tr.insertText(title,from,to).addMark(from,to+title.length,state.schema.marks.link.create({href}))),commands_createAndInsertLink(view,title,href,{onCreateLink,onShowToast,dictionary})};handleOnSelectLink=({href,title})=>{const{view,onClose}=this.props;onClose(),this.props.view.focus();const{dispatch,state}=view,{from,to}=state.selection;from===to&&dispatch(view.state.tr.insertText(title,from,to).addMark(from,to+title.length,state.schema.marks.link.create({href})))};render(){const{onCreateLink,onClose,...rest}=this.props,{selection}=this.props.view.state,active=function isActive(props){const{view}=props,{selection}=view.state;try{const paragraph=view.domAtPos(selection.from);return props.isActive&&!!paragraph.node}catch(err){return!1}}(this.props);return(0,jsx_runtime.jsx)(components_FloatingToolbar,{ref:this.menuRef,active,...rest,children:active&&(0,jsx_runtime.jsx)(components_LinkEditor,{from:selection.from,to:selection.to,onCreateLink:onCreateLink?this.handleOnCreateLink:void 0,onSelectLink:this.handleOnSelectLink,onRemoveLink:onClose,...rest})})}}LinkToolbar.displayName="LinkToolbar";try{LinkToolbar.displayName="LinkToolbar",LinkToolbar.__docgenInfo={description:"",displayName:"LinkToolbar",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"typeof Component | FC<any>"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!0,type:{name:"{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }"}},onCreateLink:{defaultValue:null,description:"",name:"onCreateLink",required:!1,type:{name:"((title: string) => Promise<string>)"}},onSearchLink:{defaultValue:null,description:"",name:"onSearchLink",required:!1,type:{name:"((term: string) => Promise<SearchResult[]>)"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(href: string, event: MouseEvent) => void"}},onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((msg: string, code: string) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkToolbar.tsx#LinkToolbar"]={docgenInfo:LinkToolbar.__docgenInfo,name:"LinkToolbar",path:"src/components/LinkToolbar.tsx#LinkToolbar"})}catch(__react_docgen_typescript_loader_error){}function Tooltip({tooltip,children}){return(0,jsx_runtime.jsx)("span",{title:tooltip,children})}Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}var prosemirror_markdown_dist=__webpack_require__("./node_modules/prosemirror-markdown/dist/index.js");class MarkdownSerializer{constructor(nodes,marks,options){this.nodes=nodes,this.marks=marks,this.options=options||{}}serialize(content,options){const state=new MarkdownSerializerState(this.nodes,this.marks,options);return state.renderContent(content),state.out}}class MarkdownSerializerState{constructor(nodes,marks,options){this.nodes=nodes,this.marks=marks,this.delim=this.out="",this.closed=!1,this.inTightList=!1,this.options=options||{},void 0===this.options.tightLists&&(this.options.tightLists=!0)}flushClose(size){if(this.closed){if(this.atBlank()||(this.out+="\n"),null==size&&(size=2),size>1){let delimMin=this.delim;const trim=/\s+$/.exec(delimMin);trim&&(delimMin=delimMin.slice(0,delimMin.length-trim[0].length));for(let i=1;i<size;i++)this.out+=delimMin+"\n"}this.closed=!1}}wrapBlock(delim,firstDelim,node,f){const old=this.delim;this.write(firstDelim||delim),this.delim+=delim,f(),this.delim=old,this.closeBlock(node)}atBlank(){return/(^|\n)$/.test(this.out)}ensureNewLine(){this.atBlank()||(this.out+="\n")}write(content){this.flushClose(),this.delim&&this.atBlank()&&(this.out+=this.delim),content&&(this.out+=content)}closeBlock(node){this.closed=node}text(text,escape){const lines=text.split("\n");for(let i=0;i<lines.length;i++){const startOfLine=this.atBlank()||this.closed;this.write(),this.out+=!1!==escape?this.esc(lines[i],startOfLine):lines[i],i!==lines.length-1&&(this.out+="\n")}}render(node,parent,index){if("number"==typeof parent)throw new Error("!");this.nodes[node.type.name](this,node,parent,index)}renderContent(parent){parent.forEach(((node,_,i)=>this.render(node,parent,i)))}renderInline(parent){const active=[];let trailing="";const progress=(node,_,index)=>{let marks=node?node.marks:[];node&&"hard_break"===node.type.name&&(marks=marks.filter((m=>{if(index+1===parent.childCount)return!1;const next=parent.child(index+1);return m.isInSet(next.marks)&&(!next.isText||/\S/.test(next.text))})));let leading=trailing;if(trailing="",node&&node.isText&&marks.some((mark=>{const info=this.marks[mark.type.name];return info&&info.expelEnclosingWhitespace}))){const[_,lead,inner,trail]=/^(\s*)(.*?)(\s*)$/m.exec(node.text);leading+=lead,trailing=trail,(lead||trail)&&((node=inner?node.withText(inner):null)||(marks=active))}const inner=marks.length&&marks[marks.length-1],noEsc=inner&&!1===this.marks[inner.type.name].escape,len=marks.length-(noEsc?1:0);outer:for(let i=0;i<len;i++){const mark=marks[i];if(!this.marks[mark.type.name].mixable)break;for(let j=0;j<active.length;j++){const other=active[j];if(!this.marks[other.type.name].mixable)break;if(mark.eq(other)){i>j?marks=marks.slice(0,j).concat(mark).concat(marks.slice(j,i)).concat(marks.slice(i+1,len)):j>i&&(marks=marks.slice(0,i).concat(marks.slice(i+1,j)).concat(mark).concat(marks.slice(j,len)));continue outer}}}let keep=0;for(;keep<Math.min(active.length,len)&&marks[keep].eq(active[keep]);)++keep;for(;keep<active.length;)this.text(this.markString(active.pop(),!1,parent,index),!1);if(leading&&this.text(leading),node){for(;active.length<len;){const add=marks[active.length];active.push(add),this.text(this.markString(add,!0,parent,index),!1)}noEsc&&node.isText?this.text(this.markString(inner,!0,parent,index)+node.text+this.markString(inner,!1,parent,index+1),!1):this.render(node,parent,index)}};parent.forEach(progress),progress(null,0,parent.childCount)}renderList(node,delim,firstDelim){this.closed&&this.closed.type===node.type?this.flushClose(3):this.inTightList&&this.flushClose(1);const isTight=void 0!==node.attrs.tight?node.attrs.tight:this.options.tightLists,prevTight=this.inTightList,prevList=this.inList;this.inList=!0,this.inTightList=isTight,node.forEach(((child,_,i)=>{i&&isTight&&this.flushClose(1),this.wrapBlock(delim,firstDelim(i),node,(()=>this.render(child,node,i)))})),this.inList=prevList,this.inTightList=prevTight}renderTable(node){this.flushClose(1);let headerBuffer="";const prevTable=this.inTable;this.inTable=!0,this.out+="\n",node.forEach(((row,_,i)=>{row.forEach(((cell,_,j)=>{this.out+=0===j?"| ":" | ",cell.forEach((para=>{""===para.textContent&&0===para.content.size?this.out+="  ":(this.closed=!1,this.render(para,row,j))})),0===i&&("center"===cell.attrs.alignment?headerBuffer+="|:---:":"left"===cell.attrs.alignment?headerBuffer+="|:---":"right"===cell.attrs.alignment?headerBuffer+="|---:":headerBuffer+="|----")})),this.out+=" |\n",headerBuffer&&(this.out+=`${headerBuffer}|\n`,headerBuffer=void 0)})),this.inTable=prevTable}esc(str="",startOfLine){return str=str.replace(/[`*\\~\[\]]/g,"\\$&"),startOfLine&&(str=str.replace(/^[:#\-*+]/,"\\$&").replace(/^(\d+)\./,"$1\\.")),this.inTable&&(str=str.replace(/\|/gi,"\\$&")),str}quote(str){const wrap=-1===str.indexOf('"')?'""':-1===str.indexOf("'")?"''":"()";return wrap[0]+str+wrap[1]}repeat(str,n){let out="";for(let i=0;i<n;i++)out+=str;return out}markString(mark,open,parent,index){const info=this.marks[mark.type.name],value=open?info.open:info.close;return"string"==typeof value?value:value(this,mark,parent,index)}getEnclosingWhitespace(text){return{leading:(text.match(/^(\s+)/)||[])[0],trailing:(text.match(/(\s+)$/)||[])[0]}}}MarkdownSerializerState.displayName="MarkdownSerializerState";var markdown_it=__webpack_require__("./node_modules/markdown-it/index.js"),markdown_it_default=__webpack_require__.n(markdown_it);class ExtensionManager{constructor(extensions=[],editor){editor&&extensions.forEach((extension=>{extension.bindEditor(editor)})),this.extensions=extensions}get nodes(){return this.extensions.filter((extension=>"node"===extension.type)).reduce(((nodes,node)=>({...nodes,[node.name]:node.schema})),{})}serializer(){const nodes=this.extensions.filter((extension=>"node"===extension.type)).reduce(((nodes,extension)=>({...nodes,[extension.name]:extension.toMarkdown})),{}),marks=this.extensions.filter((extension=>"mark"===extension.type)).reduce(((marks,extension)=>({...marks,[extension.name]:extension.toMarkdown})),{});return new MarkdownSerializer(nodes,marks)}parser({schema,rules,plugins}){const tokens=this.extensions.filter((extension=>"mark"===extension.type||"node"===extension.type)).reduce(((nodes,extension)=>{const md=extension.parseMarkdown();return md?{...nodes,[extension.markdownToken||extension.name]:md}:nodes}),{});return new prosemirror_markdown_dist.xj(schema,function rules_rules({rules={},plugins=[]}){const markdownIt=markdown_it_default()("default",{breaks:!1,html:!1,linkify:!1,...rules});return plugins.forEach((plugin=>markdownIt.use(plugin))),markdownIt}({rules,plugins}),tokens)}get marks(){return this.extensions.filter((extension=>"mark"===extension.type)).reduce(((marks,{name,schema})=>({...marks,[name]:schema})),{})}get plugins(){return this.extensions.filter((extension=>"plugins"in extension)).reduce(((allPlugins,{plugins})=>[...allPlugins,...plugins]),[])}get rulePlugins(){return this.extensions.filter((extension=>"rulePlugins"in extension)).reduce(((allRulePlugins,{rulePlugins})=>[...allRulePlugins,...rulePlugins]),[])}keymaps({schema}){return[...this.extensions.filter((extension=>["extension"].includes(extension.type))).filter((extension=>extension.keys)).map((extension=>extension.keys({schema}))),...this.extensions.filter((extension=>["node","mark"].includes(extension.type))).filter((extension=>extension.keys)).map((extension=>extension.keys({type:schema[`${extension.type}s`][extension.name],schema})))].map((keys=>(0,prosemirror_keymap_dist.h)(keys)))}inputRules({schema}){return[...this.extensions.filter((extension=>["extension"].includes(extension.type))).filter((extension=>extension.inputRules)).map((extension=>extension.inputRules({schema}))),...this.extensions.filter((extension=>["node","mark"].includes(extension.type))).filter((extension=>extension.inputRules)).map((extension=>extension.inputRules({type:schema[`${extension.type}s`][extension.name],schema})))].reduce(((allInputRules,inputRules)=>[...allInputRules,...inputRules]),[])}commands({schema,view}){return this.extensions.filter((extension=>extension.commands)).reduce(((allCommands,extension)=>{const{name,type}=extension,commands={},value=extension.commands({schema,...["node","mark"].includes(type)?{type:schema[`${type}s`][name]}:{}}),apply=(callback,attrs)=>!!view.editable&&(view.focus(),callback(attrs)(view.state,view.dispatch,view)),handle=(_name,_value)=>{Array.isArray(_value)?commands[_name]=attrs=>_value.forEach((callback=>apply(callback,attrs))):"function"==typeof _value&&(commands[_name]=attrs=>apply(_value,attrs))};return"object"==typeof value?Object.entries(value).forEach((([commandName,commandValue])=>{handle(commandName,commandValue)})):handle(name,value),{...allCommands,...commands}}),{})}}var react_dom=__webpack_require__("./node_modules/react-dom/index.js");class ComponentView{isSelected=!1;constructor(component,{editor,extension,node,view,getPos,decorations}){this.component=component,this.editor=editor,this.extension=extension,this.getPos=getPos,this.decorations=decorations,this.node=node,this.view=view,this.dom=node.type.spec.inline?document.createElement("span"):document.createElement("div"),this.renderElement()}renderElement(){const{dark}=this.editor.props,theme=this.editor.props.theme||(dark?theme_dark:light),children=this.component({theme,node:this.node,isSelected:this.isSelected,isEditable:this.view.editable,getPos:this.getPos});react_dom.render((0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme,children}),this.dom)}update(node){return node.type===this.node.type&&(this.node=node,this.renderElement(),!0)}selectNode(){this.view.editable&&(this.isSelected=!0,this.renderElement())}deselectNode(){this.view.editable&&(this.isSelected=!1,this.renderElement())}stopEvent(){return!0}destroy(){this.dom&&react_dom.unmountComponentAtNode(this.dom),this.dom=null}ignoreMutation(){return!0}}var lodash_escape=__webpack_require__("./node_modules/lodash/escape.js"),escape_default=__webpack_require__.n(lodash_escape),slugify=__webpack_require__("./node_modules/slugify/slugify.js"),slugify_default=__webpack_require__.n(slugify);function headingToSlug(node,index=0){const slugified=function safeSlugify(text){return`h-${escape_default()(slugify_default()(text,{remove:/[!"#$%&'\.()*+,\/:;<=>?@\[\]\\^_`{|}~]/g,lower:!0}))}`}(node.textContent);return 0===index?slugified:`${slugified}-${index}`}function headingToPersistenceKey(node,id){const slug=headingToSlug(node);return`rme-${id||window?.location.pathname}–${slug}`}const StyledEditor=(0,styled_components_browser_esm.ZP)("div")`
  color: ${props=>props.theme.text};
  background: ${props=>props.theme.background};
  font-family: ${props=>props.theme.fontFamily};
  font-weight: ${props=>props.theme.fontWeight};
  font-size: 1em;
  line-height: 1.7em;
  width: 100%;

  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
  }

  pre {
    white-space: pre-wrap;
  }

  li {
    position: relative;
  }

  .image {
    text-align: center;
    max-width: 100%;
    clear: both;

    img {
      pointer-events: ${props=>props.readOnly?"initial":"none"};
      display: inline-block;
      max-width: 100%;
      max-height: 75vh;
    }

    .ProseMirror-selectednode img {
      pointer-events: initial;
    }
  }

  .image.placeholder {
    position: relative;
    background: ${props=>props.theme.background};
    margin-bottom: calc(28px + 1.2em);

    img {
      opacity: 0.5;
    }
  }

  .image-replacement-uploading {
    img {
      opacity: 0.5;
    }
  }

  .image-right-50 {
    float: right;
    width: 50%;
    margin-left: 2em;
    margin-bottom: 1em;
    clear: initial;
  }

  .image-left-50 {
    float: left;
    width: 50%;
    margin-right: 2em;
    margin-bottom: 1em;
    clear: initial;
  }

  .ProseMirror-hideselection *::selection {
    background: transparent;
  }
  .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
  .ProseMirror-hideselection {
    caret-color: transparent;
  }

  .ProseMirror-selectednode {
    outline: 2px solid
      ${props=>props.readOnly?"transparent":props.theme.selected};
  }

  /* Make sure li selections wrap around markers */

  li.ProseMirror-selectednode {
    outline: none;
  }

  li.ProseMirror-selectednode:after {
    content: "";
    position: absolute;
    left: ${props=>props.rtl?"-2px":"-32px"};
    right: ${props=>props.rtl?"-32px":"-2px"};
    top: -2px;
    bottom: -2px;
    border: 2px solid ${props=>props.theme.selected};
    pointer-events: none;
  }

  .ProseMirror[contenteditable="false"] {
    .caption {
      pointer-events: none;
    }
    .caption:empty {
      visibility: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 0.5em;
    font-weight: 500;
    cursor: text;

    &:not(.placeholder):before {
      display: ${props=>props.readOnly?"none":"inline-block"};
      font-family: ${props=>props.theme.fontFamilyMono};
      color: ${props=>props.theme.textSecondary};
      font-size: 13px;
      line-height: 0;
      margin-${props=>props.rtl?"right":"left"}: -24px;
      transition: opacity 150ms ease-in-out;
      opacity: 0;
      width: 24px;
    }

    &:hover,
    &:focus-within {
      .heading-actions {
        opacity: 1;
      }
    }
  }

  .heading-content {
    &:before {
      content: "";
      display: inline;
    }
  }

  .heading-name {
    color: ${props=>props.theme.text};

    &:hover {
      text-decoration: none;
    }
  }

  a:first-child {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
  }

  h1:not(.placeholder):before {
    content: "H1";
  }
  h2:not(.placeholder):before {
    content: "H2";
  }
  h3:not(.placeholder):before {
    content: "H3";
  }
  h4:not(.placeholder):before {
    content: "H4";
  }
  h5:not(.placeholder):before {
    content: "H5";
  }
  h6:not(.placeholder):before {
    content: "H6";
  }

  .ProseMirror-focused {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:not(.placeholder):before {
        opacity: 1;
      }
    }
  }

  .with-emoji {
    margin-${props=>props.rtl?"right":"left"}: -1em;
  }

  .heading-anchor,
  .heading-fold {
    display: inline-block;
    color: ${props=>props.theme.text};
    opacity: .75;
    cursor: pointer;
    background: none;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    text-align: left;
    font-family: ${props=>props.theme.fontFamilyMono};
    font-size: 14px;
    line-height: 0;
    width: 12px;
    height: 24px;

    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .heading-actions {
    opacity: 0;
    background: ${props=>props.theme.background};
    margin-${props=>props.rtl?"right":"left"}: -26px;
    flex-direction: ${props=>props.rtl?"row-reverse":"row"};
    display: inline-flex;
    position: relative;
    top: -2px;
    width: 26px;
    height: 24px;

    &.collapsed {
      opacity: 1;
    }

    &.collapsed .heading-anchor {
      opacity: 0;
    }

    &.collapsed .heading-fold {
      opacity: 1;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:hover {
      .heading-anchor {
        opacity: 0.75 !important;
      }
      .heading-anchor:hover {
        opacity: 1 !important;
      }
    }
  }

  .heading-fold {
    display: inline-block;
    transform-origin: center;
    padding: 0;

    &.collapsed {
      transform: rotate(${props=>props.rtl?"90deg":"-90deg"});
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  .placeholder:before {
    display: block;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    content: ${props=>props.readOnly?"":"attr(data-empty-text)"};
    pointer-events: none;
    height: 0;
    color: ${props=>props.theme.placeholder};
  }

  /** Show the placeholder if focused or the first visible item nth(2) accounts for block insert trigger */
  .ProseMirror-focused .placeholder:before,
  .placeholder:nth-child(1):before,
  .placeholder:nth-child(2):before {
    opacity: 1;
  }

  .notice-block {
    display: flex;
    align-items: center;
    background: ${props=>props.theme.noticeInfoBackground};
    color: ${props=>props.theme.noticeInfoText};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 8px 0;

    a {
      color: ${props=>props.theme.noticeInfoText};
    }

    a:not(.heading-name) {
      text-decoration: underline;
    }
  }

  .notice-block .content {
    flex-grow: 1;
    min-width: 0;
  }

  .notice-block .icon {
    width: 24px;
    height: 24px;
    align-self: flex-start;
    margin-${props=>props.rtl?"left":"right"}: 4px;
    position: relative;
    top: 1px;
  }

  .notice-block.tip {
    background: ${props=>props.theme.noticeTipBackground};
    color: ${props=>props.theme.noticeTipText};

    a {
      color: ${props=>props.theme.noticeTipText};
    }
  }

  .notice-block.warning {
    background: ${props=>props.theme.noticeWarningBackground};
    color: ${props=>props.theme.noticeWarningText};

    a {
      color: ${props=>props.theme.noticeWarningText};
    }
  }

  blockquote {
    margin: 0;
    padding-left: 1.5em;
    font-style: italic;
    overflow: hidden;
    position: relative;

    &:before {
      content: "";
      display: inline-block;
      width: 2px;
      border-radius: 1px;
      position: absolute;
      margin-${props=>props.rtl?"right":"left"}: -1.5em;
      top: 0;
      bottom: 0;
      background: ${props=>props.theme.quote};
    }
  }

  b,
  strong {
    font-weight: 600;
  }

  .template-placeholder {
    color: ${props=>props.theme.placeholder};
    border-bottom: 1px dotted ${props=>props.theme.placeholder};
    border-radius: 2px;
    cursor: text;

    &:hover {
      border-bottom: 1px dotted
        ${props=>props.readOnly?props.theme.placeholder:props.theme.textSecondary};
    }
  }

  p {
    margin: 0;

    span:first-child + br:last-child {
      display: none;
    }
  }

  a {
    color: ${props=>props.theme.link};
    cursor: pointer;
  }

  a:hover {
    text-decoration: ${props=>props.readOnly?"underline":"none"};
  }

  ul,
  ol {
    margin: ${props=>props.rtl?"0 -26px 0 0.1em":"0 0.1em 0 -26px"};
    padding: ${props=>props.rtl?"0 44px 0 0":"0 0 0 44px"};
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  ul.checkbox_list {
    list-style: none;
    padding: 0;
    margin: ${props=>props.rtl?"0 -24px 0 0":"0 0 0 -24px"};
  }

  ul li,
  ol li {
    position: relative;
    white-space: initial;

    p {
      white-space: pre-wrap;
    }

    > div {
      width: 100%;
    }
  }

  ul.checkbox_list li {
    display: flex;
    padding-${props=>props.rtl?"right":"left"}: 24px;
  }

  ul.checkbox_list li.checked > div > p {
    color: ${props=>props.theme.textSecondary};
    text-decoration: line-through;
  }

  ul li::before,
  ol li::before {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOCIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iOCIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+CjxyZWN0IHg9IjgiIHk9IjE1IiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iMTMiIHk9IjExIiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iMTUiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+Cjwvc3ZnPgo=") no-repeat;
    background-position: 0 2px;
    content: "";
    display: ${props=>props.readOnly?"none":"inline-block"};
    cursor: grab;
    width: 24px;
    height: 24px;
    position: absolute;
    ${props=>props.rtl?"right":"left"}: -40px;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  ul li[draggable=true]::before,
  ol li[draggable=true]::before {
    cursor: grabbing;
  }

  ul > li.counter-2::before,
  ol li.counter-2::before {
    ${props=>props.rtl?"right":"left"}: -50px;
  }

  ul > li.hovering::before,
  ol li.hovering::before {
    opacity: 0.5;
  }

  ul li.ProseMirror-selectednode::after,
  ol li.ProseMirror-selectednode::after {
    display: none;
  }

  ul.checkbox_list li::before {
    ${props=>props.rtl?"right":"left"}: 0;
  }

  ul.checkbox_list li input {
    cursor: pointer;
    pointer-events: ${props=>props.readOnly&&!props.readOnlyWriteCheckboxes?"none":"initial"};
    opacity: ${props=>props.readOnly&&!props.readOnlyWriteCheckboxes?.75:1};
    margin: ${props=>props.rtl?"0.5em 0 0 0.5em":"0.5em 0.5em 0 0"};
    width: 14px;
    height: 14px;
  }

  li p:first-child {
    margin: 0;
    word-break: break-word;
  }

  hr {
    position: relative;
    height: 1em;
    border: 0;
  }

  hr:before {
    content: "";
    display: block;
    position: absolute;
    border-top: 1px solid ${props=>props.theme.horizontalRule};
    top: 0.5em;
    left: 0;
    right: 0;
  }

  hr.page-break {
    page-break-after: always;
  }

  hr.page-break:before {
    border-top: 1px dashed ${props=>props.theme.horizontalRule};
  }

  code {
    border-radius: 4px;
    border: 1px solid ${props=>props.theme.codeBorder};
    background: ${props=>props.theme.codeBackground};
    padding: 3px 4px;
    font-family: ${props=>props.theme.fontFamilyMono};
    font-size: 80%;
  }

  mark {
    border-radius: 1px;
    color: ${props=>props.theme.textHighlightForeground};
    background: ${props=>props.theme.textHighlight};

    a {
      color: ${props=>props.theme.textHighlightForeground};
    }
  }

  .code-block,
  .notice-block {
    position: relative;

    select,
    button {
      background: ${props=>props.theme.blockToolbarBackground};
      color: ${props=>props.theme.blockToolbarItem};
      border-width: 1px;
      font-size: 13px;
      display: none;
      position: absolute;
      border-radius: 4px;
      padding: 2px;
      z-index: 1;
      top: 4px;
    }

    &.code-block {
      select,
      button {
        right: 4px;
      }
    }

    &.notice-block {
      select,
      button {
        ${props=>props.rtl?"left":"right"}: 4px;
      }
    }

    button {
      padding: 2px 4px;
    }

    &:hover {
      select {
        display: ${props=>props.readOnly?"none":"inline"};
      }

      button {
        display: ${props=>props.readOnly?"inline":"none"};
      }
    }

    select:focus,
    select:active {
      display: inline;
    }
  }

  pre {
    display: block;
    overflow-x: auto;
    padding: 0.75em 1em;
    line-height: 1.4em;
    position: relative;
    background: ${props=>props.theme.codeBackground};
    border-radius: 4px;
    border: 1px solid ${props=>props.theme.codeBorder};

    -webkit-font-smoothing: initial;
    font-family: ${props=>props.theme.fontFamilyMono};
    font-size: 13px;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: ${props=>props.theme.code};
    margin: 0;

    code {
      font-size: 13px;
      background: none;
      padding: 0;
      border: 0;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props=>props.theme.codeComment};
  }

  .token.punctuation {
    color: ${props=>props.theme.codePunctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: ${props=>props.theme.codeNumber};
  }

  .token.property {
    color: ${props=>props.theme.codeProperty};
  }

  .token.tag {
    color: ${props=>props.theme.codeTag};
  }

  .token.string {
    color: ${props=>props.theme.codeString};
  }

  .token.selector {
    color: ${props=>props.theme.codeSelector};
  }

  .token.attr-name {
    color: ${props=>props.theme.codeAttr};
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${props=>props.theme.codeEntity};
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: ${props=>props.theme.codeKeyword};
  }

  .token.function {
    color: ${props=>props.theme.codeFunction};
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${props=>props.theme.codeStatement};
  }

  .token.placeholder,
  .token.variable {
    color: ${props=>props.theme.codePlaceholder};
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted ${props=>props.theme.codeInserted};
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: ${props=>props.theme.codeImportant};
  }

  .token.entity {
    cursor: help;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    margin-top: 1em;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    tr {
      position: relative;
      border-bottom: 1px solid ${props=>props.theme.tableDivider};
    }

    th {
      background: ${props=>props.theme.tableHeaderBackground};
    }

    td,
    th {
      position: relative;
      vertical-align: top;
      border: 1px solid ${props=>props.theme.tableDivider};
      position: relative;
      padding: 4px 8px;
      text-align: ${props=>props.rtl?"right":"left"};
      min-width: 100px;
    }

    .selectedCell {
      background: ${props=>props.readOnly?"inherit":props.theme.tableSelectedBackground};

      /* fixes Firefox background color painting over border:
       * https://bugzilla.mozilla.org/show_bug.cgi?id=688556 */
      background-clip: padding-box;
    }

    .grip-column {
      /* usage of ::after for all of the table grips works around a bug in
       * prosemirror-tables that causes Safari to hang when selecting a cell
       * in an empty table:
       * https://github.com/ProseMirror/prosemirror/issues/947 */
      &::after {
        content: "";
        cursor: pointer;
        position: absolute;
        top: -16px;
        ${props=>props.rtl?"right":"left"}: 0;
        width: 100%;
        height: 12px;
        background: ${props=>props.theme.tableDivider};
        border-bottom: 3px solid ${props=>props.theme.background};
        display: ${props=>props.readOnly?"none":"block"};
      }

      &:hover::after {
        background: ${props=>props.theme.text};
      }
      &.first::after {
        border-top-${props=>props.rtl?"right":"left"}-radius: 3px;
      }
      &.last::after {
        border-top-${props=>props.rtl?"left":"right"}-radius: 3px;
      }
      &.selected::after {
        background: ${props=>props.theme.tableSelected};
      }
    }

    .grip-row {
      &::after {
        content: "";
        cursor: pointer;
        position: absolute;
        ${props=>props.rtl?"right":"left"}: -16px;
        top: 0;
        height: 100%;
        width: 12px;
        background: ${props=>props.theme.tableDivider};
        border-${props=>props.rtl?"left":"right"}: 3px solid;
        border-color: ${props=>props.theme.background};
        display: ${props=>props.readOnly?"none":"block"};
      }

      &:hover::after {
        background: ${props=>props.theme.text};
      }
      &.first::after {
        border-top-${props=>props.rtl?"right":"left"}-radius: 3px;
      }
      &.last::after {
        border-bottom-${props=>props.rtl?"right":"left"}-radius: 3px;
      }
      &.selected::after {
        background: ${props=>props.theme.tableSelected};
      }
    }

    .grip-table {
      &::after {
        content: "";
        cursor: pointer;
        background: ${props=>props.theme.tableDivider};
        width: 13px;
        height: 13px;
        border-radius: 13px;
        border: 2px solid ${props=>props.theme.background};
        position: absolute;
        top: -18px;
        ${props=>props.rtl?"right":"left"}: -18px;
        display: ${props=>props.readOnly?"none":"block"};
      }

      &:hover::after {
        background: ${props=>props.theme.text};
      }
      &.selected::after {
        background: ${props=>props.theme.tableSelected};
      }
    }
  }

  .scrollable-wrapper {
    position: relative;
    margin: 0.5em 0px;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &:hover {
      scrollbar-color: ${props=>props.theme.scrollbarThumb} ${props=>props.theme.scrollbarBackground};
    }

    & ::-webkit-scrollbar {
      height: 14px;
      background-color: transparent;
    }

    &:hover ::-webkit-scrollbar {
      background-color: ${props=>props.theme.scrollbarBackground};
    }

    & ::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: 3px solid transparent;
      border-radius: 7px;
    }

    &:hover ::-webkit-scrollbar-thumb {
      background-color: ${props=>props.theme.scrollbarThumb};
      border-color: ${props=>props.theme.scrollbarBackground};
    }
  }

  .scrollable {
    overflow-y: hidden;
    overflow-x: auto;
    padding-${props=>props.rtl?"right":"left"}: 1em;
    margin-${props=>props.rtl?"right":"left"}: -1em;
    border-${props=>props.rtl?"right":"left"}: 1px solid transparent;
    border-${props=>props.rtl?"left":"right"}: 1px solid transparent;
    transition: border 250ms ease-in-out 0s;
  }

  .scrollable-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    ${props=>props.rtl?"right":"left"}: -1em;
    width: 16px;
    transition: box-shadow 250ms ease-in-out;
    border: 0px solid transparent;
    border-${props=>props.rtl?"right":"left"}-width: 1em;
    pointer-events: none;

    &.left {
      box-shadow: 16px 0 16px -16px inset rgba(0, 0, 0, 0.25);
      border-left: 1em solid ${props=>props.theme.background};
    }

    &.right {
      right: 0;
      left: auto;
      box-shadow: -16px 0 16px -16px inset rgba(0, 0, 0, 0.25);
    }
  }

  .block-menu-trigger {
    opacity: 0;
    pointer-events: none;
    display: ${props=>props.readOnly?"none":"inline"};
    width: 24px;
    height: 24px;
    color: ${props=>props.theme.textSecondary};
    background: none;
    position: absolute;
    transition: color 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 150ms ease-in-out;
    outline: none;
    border: 0;
    padding: 0;
    margin-top: 1px;
    margin-${props=>props.rtl?"right":"left"}: -24px;

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.2);
      color: ${props=>props.theme.text};
    }
  }

  .ProseMirror-focused .block-menu-trigger,
  .block-menu-trigger:active,
  .block-menu-trigger:focus {
    opacity: 1;
    pointer-events: initial;
  }

  .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }

  .ProseMirror-gapcursor:after {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid ${props=>props.theme.cursor};
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }

  .folded-content {
    display: none;
  }

  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }

  .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }

  @media print {
    .placeholder:before,
    .block-menu-trigger,
    .heading-actions,
    h1:not(.placeholder):before,
    h2:not(.placeholder):before,
    h3:not(.placeholder):before,
    h4:not(.placeholder):before,
    h5:not(.placeholder):before,
    h6:not(.placeholder):before {
      display: none;
    }

    .page-break {
      opacity: 0;
    }

    em,
    blockquote {
      font-family: "SF Pro Text", ${props=>props.theme.fontFamily};
    }
  }
`;class Extension{constructor(options={}){this.options={...this.defaultOptions,...options}}bindEditor(editor){this.editor=editor}get type(){return"extension"}get name(){return""}get plugins(){return[]}get rulePlugins(){return[]}keys(options){return{}}inputRules(options){return[]}commands(options){return attrs=>()=>!1}get defaultOptions(){return{}}}class Node_Node extends Extension{get type(){return"node"}get markdownToken(){return""}toMarkdown(state,node){console.error("toMarkdown not implemented",state,node)}parseMarkdown(){}}class Doc extends Node_Node{get name(){return"doc"}get schema(){return{content:"block+"}}}class Text extends Node_Node{get name(){return"text"}get schema(){return{group:"inline"}}toMarkdown(state,node){state.text(node.text)}}function toggleWrap(type,attrs){return(state,dispatch)=>queries_isNodeActive(type)(state)?(0,prosemirror_commands_dist.xb)(state,dispatch):(0,prosemirror_commands_dist.ym)(type,attrs)(state,dispatch)}class Blockquote extends Node_Node{get name(){return"blockquote"}get schema(){return{content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:()=>["blockquote",0]}}inputRules({type}){return[(0,prosemirror_inputrules_dist.S0)(/^\s*>\s$/,type)]}commands({type}){return()=>toggleWrap(type)}keys({type}){return{"Ctrl->":toggleWrap(type),"Mod-]":toggleWrap(type),"Shift-Enter":(state,dispatch)=>{if(!queries_isNodeActive(type)(state))return!1;const{tr,selection}=state;return dispatch(tr.split(selection.to)),!0}}}toMarkdown(state,node){state.wrapBlock("> ",null,node,(()=>state.renderContent(node)))}parseMarkdown(){return{block:"blockquote"}}}var prosemirror_schema_list_dist=__webpack_require__("./node_modules/prosemirror-schema-list/dist/index.js");function isList(node,schema){return node.type===schema.nodes.bullet_list||node.type===schema.nodes.ordered_list||node.type===schema.nodes.checkbox_list}function toggleList(listType,itemType){return(state,dispatch)=>{const{schema,selection}=state,{$from,$to}=selection,range=$from.blockRange($to);if(!range)return!1;const parentList=(0,prosemirror_utils_dist.Kk)((node=>isList(node,schema)))(selection);if(range.depth>=1&&parentList&&range.depth-parentList.depth<=1){if(parentList.node.type===listType)return(0,prosemirror_schema_list_dist.IB)(itemType)(state,dispatch);if(isList(parentList.node,schema)&&listType.validContent(parentList.node.content)){const{tr}=state;return tr.setNodeMarkup(parentList.pos,listType),dispatch&&dispatch(tr),!1}}return(0,prosemirror_schema_list_dist.KI)(listType)(state,dispatch)}}class BulletList extends Node_Node{get name(){return"bullet_list"}get schema(){return{content:"list_item+",group:"block",parseDOM:[{tag:"ul"}],toDOM:()=>["ul",0]}}commands({type,schema}){return()=>toggleList(type,schema.nodes.list_item)}keys({type,schema}){return{"Shift-Ctrl-8":toggleList(type,schema.nodes.list_item)}}inputRules({type}){return[(0,prosemirror_inputrules_dist.S0)(/^\s*([-+*])\s$/,type)]}toMarkdown(state,node){state.renderList(node,"  ",(()=>(node.attrs.bullet||"*")+" "))}parseMarkdown(){return{block:"bullet_list"}}}var core=__webpack_require__("./node_modules/refractor/core.js"),core_default=__webpack_require__.n(core),bash=__webpack_require__("./node_modules/refractor/lang/bash.js"),bash_default=__webpack_require__.n(bash),css=__webpack_require__("./node_modules/refractor/lang/css.js"),css_default=__webpack_require__.n(css),clike=__webpack_require__("./node_modules/refractor/lang/clike.js"),clike_default=__webpack_require__.n(clike),csharp=__webpack_require__("./node_modules/refractor/lang/csharp.js"),csharp_default=__webpack_require__.n(csharp),go=__webpack_require__("./node_modules/refractor/lang/go.js"),go_default=__webpack_require__.n(go),java=__webpack_require__("./node_modules/refractor/lang/java.js"),java_default=__webpack_require__.n(java),javascript=__webpack_require__("./node_modules/refractor/lang/javascript.js"),javascript_default=__webpack_require__.n(javascript),json=__webpack_require__("./node_modules/refractor/lang/json.js"),json_default=__webpack_require__.n(json),markup=__webpack_require__("./node_modules/refractor/lang/markup.js"),markup_default=__webpack_require__.n(markup),objectivec=__webpack_require__("./node_modules/refractor/lang/objectivec.js"),objectivec_default=__webpack_require__.n(objectivec),perl=__webpack_require__("./node_modules/refractor/lang/perl.js"),perl_default=__webpack_require__.n(perl),php=__webpack_require__("./node_modules/refractor/lang/php.js"),php_default=__webpack_require__.n(php),python=__webpack_require__("./node_modules/refractor/lang/python.js"),python_default=__webpack_require__.n(python),powershell=__webpack_require__("./node_modules/refractor/lang/powershell.js"),powershell_default=__webpack_require__.n(powershell),ruby=__webpack_require__("./node_modules/refractor/lang/ruby.js"),ruby_default=__webpack_require__.n(ruby),rust=__webpack_require__("./node_modules/refractor/lang/rust.js"),rust_default=__webpack_require__.n(rust),sql=__webpack_require__("./node_modules/refractor/lang/sql.js"),sql_default=__webpack_require__.n(sql),typescript=__webpack_require__("./node_modules/refractor/lang/typescript.js"),typescript_default=__webpack_require__.n(typescript),yaml=__webpack_require__("./node_modules/refractor/lang/yaml.js"),yaml_default=__webpack_require__.n(yaml),copy_to_clipboard=__webpack_require__("./node_modules/copy-to-clipboard/index.js"),copy_to_clipboard_default=__webpack_require__.n(copy_to_clipboard),flattenDeep=__webpack_require__("./node_modules/lodash/flattenDeep.js"),flattenDeep_default=__webpack_require__.n(flattenDeep);const LANGUAGES={none:"None",bash:"Bash",css:"CSS",clike:"C",csharp:"C#",go:"Go",markup:"HTML",objectivec:"Objective-C",java:"Java",javascript:"JavaScript",json:"JSON",perl:"Perl",php:"PHP",powershell:"Powershell",python:"Python",ruby:"Ruby",rust:"Rust",sql:"SQL",typescript:"TypeScript",yaml:"YAML"},cache={};function getDecorations({doc,name}){const decorations=[],blocks=(0,prosemirror_utils_dist.EX)(doc).filter((item=>item.node.type.name===name));function parseNodes(nodes,classNames=[]){return nodes.map((node=>{if("element"===node.type){const classes=[...classNames,...node.properties.className||[]];return parseNodes(node.children,classes)}return{text:node.value,classes:classNames}}))}return blocks.forEach((block=>{let startPos=block.pos+1;const language=block.node.attrs.language;if(language&&"none"!==language&&core_default().registered(language)){if(!cache[block.pos]||!cache[block.pos].node.eq(block.node)){const nodes=core_default().highlight(block.node.textContent,language),_decorations=flattenDeep_default()(parseNodes(nodes)).map((node=>{const from=startPos,to=from+node.text.length;return startPos=to,{...node,from,to}})).filter((node=>node.classes&&node.classes.length)).map((node=>prosemirror_view_dist.p.inline(node.from,node.to,{class:node.classes.join(" ")})));cache[block.pos]={node:block.node,decorations:_decorations}}cache[block.pos].decorations.forEach((decoration=>{decorations.push(decoration)}))}})),Object.keys(cache).filter((pos=>!blocks.find((block=>block.pos===Number(pos))))).forEach((pos=>{delete cache[Number(pos)]})),prosemirror_view_dist.EH.create(doc,decorations)}function Prism({name}){let highlighted=!1;return new dist.Sy({key:new dist.H$("prism"),state:{init:(_,{doc})=>prosemirror_view_dist.EH.create(doc,[]),apply:(transaction,decorationSet,oldState,state)=>{const nodeName=state.selection.$head.parent.type.name,previousNodeName=oldState.selection.$head.parent.type.name,codeBlockChanged=transaction.docChanged&&[nodeName,previousNodeName].includes(name),ySyncEdit=!!transaction.getMeta("y-sync$");return!highlighted||codeBlockChanged||ySyncEdit?(highlighted=!0,getDecorations({doc:transaction.doc,name})):decorationSet.map(transaction.mapping,transaction.doc)}},view:view=>(highlighted||setTimeout((()=>{view.dispatch(view.state.tr.setMeta("prism",{loaded:!0}))}),10),{}),props:{decorations(state){return this.getState(state)}}})}function toggleBlockType(type,toggleType,attrs={}){return(state,dispatch)=>queries_isNodeActive(type,attrs)(state)?(0,prosemirror_commands_dist.uJ)(toggleType)(state,dispatch):(0,prosemirror_commands_dist.uJ)(type,attrs)(state,dispatch)}function isInCode(state){if(state.schema.nodes.code_block){const $head=state.selection.$head;for(let d=$head.depth;d>0;d--)if($head.node(d).type===state.schema.nodes.code_block)return!0}return queries_isMarkActive(state.schema.marks.code_inline)(state)}[bash_default(),css_default(),clike_default(),csharp_default(),go_default(),java_default(),javascript_default(),json_default(),markup_default(),objectivec_default(),perl_default(),php_default(),python_default(),powershell_default(),ruby_default(),rust_default(),sql_default(),typescript_default(),yaml_default()].forEach(core_default().register);class CodeFence extends Node_Node{get languageOptions(){return Object.entries(LANGUAGES)}get name(){return"code_fence"}get schema(){return{attrs:{language:{default:"javascript"}},content:"text*",marks:"",group:"block",code:!0,defining:!0,draggable:!1,parseDOM:[{tag:"pre",preserveWhitespace:"full"},{tag:".code-block",preserveWhitespace:"full",contentElement:"code",getAttrs:dom=>({language:dom.dataset.language})}],toDOM:node=>{const button=document.createElement("button");button.innerText="Copy",button.type="button",button.addEventListener("click",this.handleCopyToClipboard);const select=document.createElement("select");return select.addEventListener("change",this.handleLanguageChange),this.languageOptions.forEach((([key,label])=>{const option=document.createElement("option"),value="none"===key?"":key;option.value=value,option.innerText=label,option.selected=node.attrs.language===value,select.appendChild(option)})),["div",{class:"code-block","data-language":node.attrs.language},["div",{contentEditable:!1},select,button],["pre",["code",{spellCheck:!1},0]]]}}}commands({type,schema}){return attrs=>toggleBlockType(type,schema.nodes.paragraph,{language:localStorage?.getItem("rme-code-language")||"javascript",...attrs})}keys({type,schema}){return{"Shift-Ctrl-\\":toggleBlockType(type,schema.nodes.paragraph),"Shift-Enter":(state,dispatch)=>{if(!isInCode(state))return!1;const{tr,selection}=state,text=selection?.$anchor?.nodeBefore?.text;let newText="\n";if(text){const splitByNewLine=text.split("\n"),numOfSpaces=splitByNewLine[splitByNewLine.length-1].search(/\S|$/);newText+=" ".repeat(numOfSpaces)}return dispatch(tr.insertText(newText,selection.from,selection.to)),!0},Tab:(state,dispatch)=>{if(!isInCode(state))return!1;const{tr,selection}=state;return dispatch(tr.insertText("  ",selection.from,selection.to)),!0}}}handleCopyToClipboard=event=>{const{view}=this.editor,element=event.target,{top,left}=element.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const node=view.state.doc.nodeAt(result.pos);node&&(copy_to_clipboard_default()(node.textContent),this.options.onShowToast&&this.options.onShowToast(this.options.dictionary.codeCopied,ToastType.Info))}};handleLanguageChange=event=>{const{view}=this.editor,{tr}=view.state,element=event.target,{top,left}=element.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const language=element.value,transaction=tr.setSelection(dist.Y1.near(view.state.doc.resolve(result.inside))).setNodeMarkup(result.inside,void 0,{language});view.dispatch(transaction),localStorage?.setItem("rme-code-language",language)}};get plugins(){return[Prism({name:this.name})]}inputRules({type}){return[(0,prosemirror_inputrules_dist.zK)(/^```$/,type)]}toMarkdown(state,node){state.write("```"+(node.attrs.language||"")+"\n"),state.text(node.textContent,!1),state.ensureNewLine(),state.write("```"),state.closeBlock(node)}get markdownToken(){return"fence"}parseMarkdown(){return{block:"code_block",getAttrs:tok=>({language:tok.info})}}}class CodeBlock extends CodeFence{get name(){return"code_block"}get markdownToken(){return"code_block"}}class CheckboxList extends Node_Node{get name(){return"checkbox_list"}get schema(){return{group:"block",content:"checkbox_item+",toDOM:()=>["ul",{class:this.name},0],parseDOM:[{tag:`[class="${this.name}"]`}]}}keys({type,schema}){return{"Shift-Ctrl-7":toggleList(type,schema.nodes.checkbox_item)}}commands({type,schema}){return()=>toggleList(type,schema.nodes.checkbox_item)}inputRules({type}){return[(0,prosemirror_inputrules_dist.S0)(/^-?\s*(\[ \])\s$/i,type)]}toMarkdown(state,node){state.renderList(node,"  ",(()=>"- "))}parseMarkdown(){return{block:"checkbox_list"}}}var name_to_emoji=__webpack_require__("./node_modules/gemoji/name-to-emoji.json"),markdown_it_emoji=__webpack_require__("./node_modules/markdown-it-emoji/index.js"),markdown_it_emoji_default=__webpack_require__.n(markdown_it_emoji);function emoji(md){return markdown_it_emoji_default()(md,{defs:name_to_emoji,shortcuts:{}})}class Emoji_Emoji extends Node_Node{get name(){return"emoji"}get schema(){return{attrs:{style:{default:""},"data-name":{default:void 0}},inline:!0,content:"text*",marks:"",group:"inline",selectable:!1,parseDOM:[{tag:"span.emoji",preserveWhitespace:"full",getAttrs:dom=>({"data-name":dom.dataset.name})}],toDOM:node=>{if(name_to_emoji[node.attrs["data-name"]]){const text=document.createTextNode(name_to_emoji[node.attrs["data-name"]]);return["span",{class:`emoji ${node.attrs["data-name"]}`,"data-name":node.attrs["data-name"]},text]}return["span",{class:"emoji"},document.createTextNode(`:${node.attrs["data-name"]}:`)]}}}get rulePlugins(){return[emoji]}commands({type}){return attrs=>(state,dispatch)=>{const{selection}=state,position=selection.$cursor?selection.$cursor.pos:selection.$to.pos,node=type.create(attrs);return dispatch(state.tr.insert(position,node)),!0}}inputRules({type}){return[new prosemirror_inputrules_dist.VK(/^\:([a-zA-Z0-9_+-]+)\:$/,((state,match,start,end)=>{const[okay,markup]=match,{tr}=state;return okay&&tr.replaceWith(start-1,end,type.create({"data-name":markup,markup})),tr}))]}toMarkdown(state,node){const name=node.attrs["data-name"];name&&state.write(`:${name}:`)}parseMarkdown(){return{node:"emoji",getAttrs:tok=>({"data-name":tok.markup.trim()})}}}const CHECKBOX_REGEX=/\[(X|\s|_|-)\]\s(.*)?/i;function looksLikeChecklist(tokens,index){return function isInline(token){return!!token&&"inline"===token.type}(tokens[index])&&function isListItem(token){return!!token&&("list_item_open"===token.type||"checkbox_item_open"===token.type)}(tokens[index-2])&&function isParagraph(token){return!!token&&"paragraph_open"===token.type}(tokens[index-1])&&function matches(token){return token&&token.content.match(CHECKBOX_REGEX)}(tokens[index])}function markdownItCheckbox(md){function render(tokens,idx){const token=tokens[idx],checked=!!token.attrGet("checked");return 1===token.nesting?`<li class="checkbox-list-item"><span class="checkbox ${checked?"checked":""}">${checked?"[x]":"[ ]"}</span>`:"</li>\n"}md.renderer.rules.checkbox_item_open=render,md.renderer.rules.checkbox_item_close=render,md.core.ruler.after("inline","checkboxes",(state=>{const tokens=state.tokens;for(let i=tokens.length-1;i>0;i--){const matches=looksLikeChecklist(tokens,i);if(matches){const checked="x"===matches[1].toLowerCase();"bullet_list_open"===tokens[i-3].type&&(tokens[i-3].type="checkbox_list_open"),"bullet_list_close"===tokens[i+3].type&&(tokens[i+3].type="checkbox_list_close");const tokenChildren=tokens[i].children;if(tokenChildren){const contentMatches=tokenChildren[0].content.match(CHECKBOX_REGEX);if(contentMatches){const label=contentMatches[2];tokens[i].content=label,tokenChildren[0].content=label}}tokens[i-2].type="checkbox_item_open",!0===checked&&(tokens[i-2].attrs=[["checked","true"]]);let j=i;for(;"list_item_close"!==tokens[j].type;)j++;tokens[j].type="checkbox_item_close"}}return!1}))}class CheckboxItem extends Node_Node{get name(){return"checkbox_item"}get schema(){return{attrs:{checked:{default:!1}},content:"paragraph block*",defining:!0,draggable:!0,parseDOM:[{tag:`li[data-type="${this.name}"]`,getAttrs:dom=>({checked:dom.className.includes("checked")})}],toDOM:node=>{const input=document.createElement("input");return input.type="checkbox",input.tabIndex=-1,input.addEventListener("change",this.handleChange),node.attrs.checked&&(input.checked=!0),["li",{"data-type":this.name,class:node.attrs.checked?"checked":void 0},["span",{contentEditable:!1},input],["div",0]]}}}get rulePlugins(){return[markdownItCheckbox]}handleChange=event=>{const{view}=this.editor,{tr}=view.state,{top,left}=event.target.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const transaction=tr.setNodeMarkup(result.inside,void 0,{checked:event.target.checked});view.dispatch(transaction)}};keys({type}){return{Enter:(0,prosemirror_schema_list_dist.s6)(type),Tab:(0,prosemirror_schema_list_dist.bw)(type),"Shift-Tab":(0,prosemirror_schema_list_dist.IB)(type),"Mod-]":(0,prosemirror_schema_list_dist.bw)(type),"Mod-[":(0,prosemirror_schema_list_dist.IB)(type)}}toMarkdown(state,node){state.write(node.attrs.checked?"[x] ":"[ ] "),state.renderContent(node)}parseMarkdown(){return{block:"checkbox_item",getAttrs:tok=>({checked:!!tok.attrGet("checked")||void 0})}}}var lib_token=__webpack_require__("./node_modules/markdown-it/lib/token.js"),token_default=__webpack_require__.n(lib_token);function embeds_isParagraph(token){return"paragraph_open"===token.type}function isLinkOpen(token){return"link_open"===token.type}function isLinkClose(token){return"link_close"===token.type}function rules_embeds(embeds){function isEmbed(token,link){const href=link.attrs?link.attrs[0][1]:"";if(!(href===token.content))return!1;if(!embeds)return!1;for(const embed of embeds){const matches=embed.matcher(href);if(matches)return{...embed,matches}}}return function markdownEmbeds(md){md.core.ruler.after("inline","embeds",(state=>{const tokens=state.tokens;let insideLink;for(let i=0;i<tokens.length-1;i++)if("inline"===(token=tokens[i]).type&&1===token.level&&embeds_isParagraph(tokens[i-1])){const tokenChildren=tokens[i].children||[];for(let j=0;j<tokenChildren.length-1;j++){const current=tokenChildren[j];if(current)if(isLinkOpen(current))insideLink=current;else if(isLinkClose(current))insideLink=null;else if(insideLink){if(isEmbed(current,insideLink)){const{content}=current,token=new(token_default())("embed","iframe",0);token.attrSet("href",content),tokens.splice(i-1,3,token);break}}}}var token;return!1}))}}const Embed_cache={};class Embed extends Node_Node{get name(){return"embed"}get schema(){return{content:"inline*",group:"block",atom:!0,attrs:{href:{}},parseDOM:[{tag:"iframe[class=embed]",getAttrs:dom=>{const{embeds}=this.editor.props,href=dom.getAttribute("src")||"";if(embeds)for(const embed of embeds){if(embed.matcher(href))return{href}}return{}}}],toDOM:node=>["iframe",{class:"embed",src:node.attrs.href,contentEditable:!1},0]}}get rulePlugins(){return[rules_embeds(this.options.embeds)]}component({isEditable,isSelected,theme,node}){const{embeds}=this.editor.props,hit=Embed_cache[node.attrs.href];let Component=hit?hit.Component:void 0,matches=hit?hit.matches:void 0;if(!Component)for(const embed of embeds){const m=embed.matcher(node.attrs.href);m&&(Component=embed.component,matches=m,Embed_cache[node.attrs.href]={Component,matches})}return Component?(0,jsx_runtime.jsx)(Component,{attrs:{...node.attrs,matches},isEditable,isSelected,theme}):null}commands({type}){return attrs=>(state,dispatch)=>(dispatch(state.tr.replaceSelectionWith(type.create(attrs)).scrollIntoView()),!0)}toMarkdown(state,node){state.ensureNewLine(),state.write("["+state.esc(node.attrs.href)+"]("+state.esc(node.attrs.href)+")"),state.write("\n\n")}parseMarkdown(){return{node:"embed",getAttrs:token=>({href:token.attrGet("href")})}}}function isHardbreak(token){return"hardbreak"===token.type||"text"===token.type&&"\\"===token.content}function markdownBreakToParagraphs(md){md.core.ruler.after("inline","breaks",(state=>{const{Token}=state,tokens=state.tokens;for(let i=tokens.length-1;i>0;i--){const tokenChildren=tokens[i].children||[],matches=tokenChildren.filter(isHardbreak);if(matches.length){let token;const nodes=[],children=tokenChildren.filter((child=>!isHardbreak(child)));let count=matches.length;children.length&&count++;for(let i=0;i<count;i++){const isLast=i===count-1;token=new Token("paragraph_open","p",1),nodes.push(token);const text=new Token("text","",0);text.content="",token=new Token("inline","",0),token.level=1,token.children=isLast?[text,...children]:[text],token.content="",nodes.push(token),token=new Token("paragraph_close","p",-1),nodes.push(token)}tokens.splice(i-1,3,...nodes)}}return!1}))}class HardBreak extends Node_Node{get name(){return"br"}get schema(){return{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:()=>["br"]}}get rulePlugins(){return[markdownBreakToParagraphs]}commands({type}){return()=>(state,dispatch)=>(dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView()),!0)}keys({type}){return{"Shift-Enter":(state,dispatch)=>!!(0,prosemirror_tables_dist.Lw)(state)&&(dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView()),!0)}}toMarkdown(state){state.write(" \\n ")}parseMarkdown(){return{node:"br"}}}function backspaceToParagraph(type){return(state,dispatch)=>{const{$from,from,to,empty}=state.selection;if(!empty)return null;if($from.parent.type!==type)return null;return state.doc.resolve(from-1).parent===$from.parent?null:(dispatch(state.tr.setBlockType(from,to,type.schema.nodes.paragraph).scrollIntoView()),!0)}}function findCollapsedNodes(doc){const blocks=(0,prosemirror_utils_dist.EX)(doc),nodes=[];let withinCollapsedHeading;for(const block of blocks)"heading"!==block.node.type.name||withinCollapsedHeading&&!(block.node.attrs.level<=withinCollapsedHeading)?withinCollapsedHeading&&nodes.push(block):block.node.attrs.collapsed?withinCollapsedHeading||(withinCollapsedHeading=block.node.attrs.level):withinCollapsedHeading=void 0;return nodes}function splitHeading(type){return(state,dispatch)=>{const{$from,from,$to,to}=state.selection;if($from.parent.type!==type)return!1;if($to.after()-1!==to)return!1;if(!$from.parent.attrs.collapsed)return!1;const allBlocks=(0,prosemirror_utils_dist.EX)(state.doc),collapsedBlocks=findCollapsedNodes(state.doc),nextVisibleBlock=allBlocks.filter((a=>!collapsedBlocks.find((b=>b.pos===a.pos)))).find((a=>a.pos>from)),pos=nextVisibleBlock?nextVisibleBlock.pos:state.doc.content.size,transaction=state.tr.insert(pos,type.create({...$from.parent.attrs,collapsed:!1}));return dispatch(transaction.setSelection(dist.Bs.near(transaction.doc.resolve(Math.min(pos+1,transaction.doc.content.size)))).scrollIntoView()),!0}}class Heading extends Node_Node{className="heading-name";get name(){return"heading"}get defaultOptions(){return{levels:[1,2,3,4],collapsed:void 0}}get schema(){return{attrs:{level:{default:1},collapsed:{default:void 0}},content:"inline*",group:"block",defining:!0,draggable:!1,parseDOM:this.options.levels.map((level=>({tag:`h${level}`,attrs:{level},contentElement:".heading-content"}))),toDOM:node=>{const anchor=document.createElement("button");anchor.innerText="#",anchor.type="button",anchor.className="heading-anchor",anchor.addEventListener("click",(event=>this.handleCopyLink(event)));const fold=document.createElement("button");return fold.innerText="",fold.innerHTML='<svg fill="currentColor" width="12" height="24" viewBox="6 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.23823905,10.6097108 L11.207376,14.4695888 L11.207376,14.4695888 C11.54411,14.907343 12.1719566,14.989236 12.6097108,14.652502 C12.6783439,14.5997073 12.7398293,14.538222 12.792624,14.4695888 L15.761761,10.6097108 L15.761761,10.6097108 C16.0984949,10.1719566 16.0166019,9.54410997 15.5788477,9.20737601 C15.4040391,9.07290785 15.1896811,9 14.969137,9 L9.03086304,9 L9.03086304,9 C8.47857829,9 8.03086304,9.44771525 8.03086304,10 C8.03086304,10.2205442 8.10377089,10.4349022 8.23823905,10.6097108 Z" /></svg>',fold.type="button",fold.className="heading-fold "+(node.attrs.collapsed?"collapsed":""),fold.addEventListener("mousedown",(event=>this.handleFoldContent(event))),[`h${node.attrs.level+(this.options.offset||0)}`,["span",{contentEditable:!1,class:"heading-actions "+(node.attrs.collapsed?"collapsed":"")},anchor,fold],["span",{class:"heading-content"},0]]}}}toMarkdown(state,node){state.write(state.repeat("#",node.attrs.level)+" "),state.renderInline(node),state.closeBlock(node)}parseMarkdown(){return{block:"heading",getAttrs:token=>({level:+token.tag.slice(1)})}}commands({type,schema}){return attrs=>toggleBlockType(type,schema.nodes.paragraph,attrs)}handleFoldContent=event=>{event.preventDefault();const{view}=this.editor,hadFocus=view.hasFocus(),{tr}=view.state,{top,left}=event.target.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const node=view.state.doc.nodeAt(result.inside);if(node){const endOfHeadingPos=result.inside+node.nodeSize,$pos=view.state.doc.resolve(endOfHeadingPos),collapsed=!node.attrs.collapsed;collapsed&&view.state.selection.to>endOfHeadingPos&&tr.setSelection(dist.Y1.near($pos,-1));const transaction=tr.setNodeMarkup(result.inside,void 0,{...node.attrs,collapsed}),persistKey=headingToPersistenceKey(node,this.editor.props.id);collapsed?localStorage?.setItem(persistKey,"collapsed"):localStorage?.removeItem(persistKey),view.dispatch(transaction),hadFocus&&view.focus()}}};handleCopyLink=event=>{const anchor=event.currentTarget.parentNode.parentNode.previousSibling;if(!anchor.className.includes(this.className))throw new Error("Did not find anchor as previous sibling of heading");const hash=`#${anchor.id}`,urlWithoutHash=window.location.href.split("#")[0];copy_to_clipboard_default()(urlWithoutHash+hash),this.options.onShowToast&&this.options.onShowToast(this.options.dictionary.linkCopied,ToastType.Info)};keys({type,schema}){return{...this.options.levels.reduce(((items,level)=>({...items,[`Shift-Ctrl-${level}`]:toggleBlockType(type,schema.nodes.paragraph,{level})})),{}),Backspace:backspaceToParagraph(type),Enter:splitHeading(type)}}get plugins(){const getAnchors=doc=>{const decorations=[],previouslySeen={};return doc.descendants(((node,pos)=>{if(node.type.name!==this.name)return;const slug=headingToSlug(node);let id=slug;previouslySeen[slug]>0&&(id=headingToSlug(node,previouslySeen[slug])),previouslySeen[slug]=void 0!==previouslySeen[slug]?previouslySeen[slug]+1:1,decorations.push(prosemirror_view_dist.p.widget(pos,(()=>{const anchor=document.createElement("a");return anchor.id=id,anchor.className=this.className,anchor}),{side:-1,key:id}))})),prosemirror_view_dist.EH.create(doc,decorations)},plugin=new dist.Sy({state:{init:(config,state)=>getAnchors(state.doc),apply:(tr,oldState)=>tr.docChanged?getAnchors(tr.doc):oldState},props:{decorations:state=>plugin.getState(state)}});return[plugin]}inputRules({type}){return this.options.levels.map((level=>(0,prosemirror_inputrules_dist.zK)(new RegExp(`^(#{1,${level}})\\s$`),type,(()=>({level})))))}}class HorizontalRule extends Node_Node{get name(){return"hr"}get schema(){return{attrs:{markup:{default:"---"}},group:"block",parseDOM:[{tag:"hr"}],toDOM:node=>["hr",{class:"***"===node.attrs.markup?"page-break":""}]}}commands({type}){return attrs=>(state,dispatch)=>(dispatch(state.tr.replaceSelectionWith(type.create(attrs)).scrollIntoView()),!0)}keys({type}){return{"Mod-_":(state,dispatch)=>(dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView()),!0)}}inputRules({type}){return[new prosemirror_inputrules_dist.VK(/^(?:---|___\s|\*\*\*\s)$/,((state,match,start,end)=>{const{tr}=state;if(match[0]){const markup=match[0].trim();tr.replaceWith(start-1,end,type.create({markup}))}return tr}))]}toMarkdown(state,node){state.write(`\n${node.attrs.markup}`),state.closeBlock(node)}parseMarkdown(){return{node:"hr",getAttrs:tok=>({markup:tok.markup})}}}var react_medium_image_zoom_lib=__webpack_require__("./node_modules/react-medium-image-zoom/lib/index.js");const IMAGE_INPUT_REGEX=/!\[(?<alt>[^\]\[]*?)]\((?<filename>[^\]\[]*?)(?=\“|\))\“?(?<layoutclass>[^\]\[\”]+)?\”?\)$/,IMAGE_CLASSES=["right-50","left-50"],getLayoutAndTitle=tokenTitle=>tokenTitle?IMAGE_CLASSES.includes(tokenTitle)?{layoutClass:tokenTitle}:{title:tokenTitle}:{},downloadImageNode=async node=>{const image=await fetch(node.attrs.src),imageBlob=await image.blob(),imageURL=URL.createObjectURL(imageBlob),extension=imageBlob.type.split("/")[1],potentialName=node.attrs.alt||"image",link=document.createElement("a");link.href=imageURL,link.download=`${potentialName}.${extension}`,document.body.appendChild(link),link.click(),document.body.removeChild(link)};class Image_Image extends Node_Node{get name(){return"image"}get schema(){return{inline:!0,attrs:{src:{},alt:{default:null},layoutClass:{default:null},title:{default:null}},content:"text*",marks:"",group:"inline",selectable:!0,draggable:!0,parseDOM:[{tag:"div[class~=image]",getAttrs:dom=>{const img=dom.getElementsByTagName("img")[0],className=dom.className,layoutClassMatched=className&&className.match(/image-(.*)$/),layoutClass=layoutClassMatched?layoutClassMatched[1]:null;return{src:img?.getAttribute("src"),alt:img?.getAttribute("alt"),title:img?.getAttribute("title"),layoutClass}}},{tag:"img",getAttrs:dom=>({src:dom.getAttribute("src"),alt:dom.getAttribute("alt"),title:dom.getAttribute("title")})}],toDOM:node=>["div",{class:node.attrs.layoutClass?`image image-${node.attrs.layoutClass}`:"image"},["img",{...node.attrs,contentEditable:!1}],["p",{class:"caption"},0]]}}handleKeyDown=({node,getPos})=>event=>{if("Enter"===event.key){event.preventDefault();const{view}=this.editor,$pos=view.state.doc.resolve(getPos()+node.nodeSize);return view.dispatch(view.state.tr.setSelection(new dist.Bs($pos)).split($pos.pos)),void view.focus()}if("Backspace"===event.key&&""===event.target.innerText){const{view}=this.editor,$pos=view.state.doc.resolve(getPos()),tr=view.state.tr.setSelection(new dist.qv($pos));return view.dispatch(tr.deleteSelection()),void view.focus()}};handleBlur=({node,getPos})=>event=>{const alt=event.target.innerText,{src,title,layoutClass}=node.attrs;if(alt===node.attrs.alt)return;const{view}=this.editor,{tr}=view.state,pos=getPos(),transaction=tr.setNodeMarkup(pos,void 0,{src,alt,title,layoutClass});view.dispatch(transaction)};handleSelect=({getPos})=>event=>{event.preventDefault();const{view}=this.editor,$pos=view.state.doc.resolve(getPos()),transaction=view.state.tr.setSelection(new dist.qv($pos));view.dispatch(transaction)};handleDownload=({node})=>event=>{event.preventDefault(),event.stopPropagation(),downloadImageNode(node)};component=props=>{const{theme,isSelected}=props,{alt,src,title,layoutClass}=props.node.attrs,className=layoutClass?`image image-${layoutClass}`:"image";return(0,jsx_runtime.jsxs)("div",{contentEditable:!1,className,children:[(0,jsx_runtime.jsxs)(ImageWrapper,{className:isSelected?"ProseMirror-selectednode":"",onClick:this.handleSelect(props),children:[(0,jsx_runtime.jsx)(Button,{children:(0,jsx_runtime.jsx)(lib.DownloadIcon,{color:"currentColor",onClick:this.handleDownload(props)})}),(0,jsx_runtime.jsx)(react_medium_image_zoom_lib.Z,{image:{src,alt,title},defaultStyles:{overlay:{backgroundColor:theme.background}},shouldRespectMaxDimension:!0})]}),(0,jsx_runtime.jsx)(Caption,{onKeyDown:this.handleKeyDown(props),onBlur:this.handleBlur(props),className:"caption",tabIndex:-1,role:"textbox",contentEditable:!0,suppressContentEditableWarning:!0,"data-caption":this.options.dictionary.imageCaptionPlaceholder,children:alt})]})};toMarkdown(state,node){let markdown=" !["+state.esc((node.attrs.alt||"").replace("\n","")||"")+"]("+state.esc(node.attrs.src);node.attrs.layoutClass?markdown+=' "'+state.esc(node.attrs.layoutClass)+'"':node.attrs.title&&(markdown+=' "'+state.esc(node.attrs.title)+'"'),markdown+=")",state.write(markdown)}parseMarkdown(){return{node:"image",getAttrs:token=>({src:token.attrGet("src"),alt:token.children[0]&&token.children[0].content||null,...getLayoutAndTitle(token.attrGet("title"))})}}commands({type}){return{downloadImage:()=>async state=>{const{node}=state.selection;return"image"===node.type.name&&(downloadImageNode(node),!0)},deleteImage:()=>(state,dispatch)=>(dispatch(state.tr.deleteSelection()),!0),alignRight:()=>(state,dispatch)=>{const attrs={...state.selection.node.attrs,title:null,layoutClass:"right-50"},{selection}=state;return dispatch(state.tr.setNodeMarkup(selection.from,void 0,attrs)),!0},alignLeft:()=>(state,dispatch)=>{const attrs={...state.selection.node.attrs,title:null,layoutClass:"left-50"},{selection}=state;return dispatch(state.tr.setNodeMarkup(selection.from,void 0,attrs)),!0},replaceImage:()=>state=>{const{view}=this.editor,{uploadImage,onImageUploadStart,onImageUploadStop,onShowToast}=this.editor.props;if(!uploadImage)throw new Error("uploadImage prop is required to replace images");const inputElement=document.createElement("input");inputElement.type="file",inputElement.accept="image/*",inputElement.onchange=event=>{const files=getDataTransferFiles(event);commands_insertFiles(view,event,state.selection.from,files,{uploadImage,onImageUploadStart,onImageUploadStop,onShowToast,dictionary:this.options.dictionary,replaceExisting:!0})},inputElement.click()},alignCenter:()=>(state,dispatch)=>{const attrs={...state.selection.node.attrs,layoutClass:null},{selection}=state;return dispatch(state.tr.setNodeMarkup(selection.from,void 0,attrs)),!0},createImage:attrs=>(state,dispatch)=>{const{selection}=state,position=selection.$cursor?selection.$cursor.pos:selection.$to.pos,node=type.create(attrs);return dispatch(state.tr.insert(position,node)),!0}}}inputRules({type}){return[new prosemirror_inputrules_dist.VK(IMAGE_INPUT_REGEX,((state,match,start,end)=>{const[okay,alt,src,matchedTitle]=match,{tr}=state;return okay&&tr.replaceWith(start-1,end,type.create({src,alt,...getLayoutAndTitle(matchedTitle)})),tr}))]}get plugins(){return[lib_uploadPlaceholder,(options=this.options,new dist.Sy({props:{handleDOMEvents:{paste(view,event){if(view.props.editable&&!view.props.editable(view.state)||!options.uploadImage)return!1;if(!event.clipboardData)return!1;const files=Array.prototype.slice.call(event.clipboardData.items).map((dt=>dt.getAsFile())).filter((file=>file));if(0===files.length)return!1;const{tr}=view.state;tr.selection.empty||tr.deleteSelection();const pos=tr.selection.from;return commands_insertFiles(view,event,pos,files,options),!0},drop(view,event){if(view.props.editable&&!view.props.editable(view.state)||!options.uploadImage)return!1;const files=getDataTransferFiles(event).filter((file=>/image/i.test(file.type)));if(0===files.length)return!1;const result=view.posAtCoords({left:event.clientX,top:event.clientY});return!!result&&(commands_insertFiles(view,event,result.pos,files,options),!0)}}}}))];var options}}const Button=styled_components_browser_esm.ZP.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  background: ${props=>props.theme.background};
  color: ${props=>props.theme.textSecondary};
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
  opacity: 0;
  transition: opacity 100ms ease-in-out;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    color: ${props=>props.theme.text};
    opacity: 1;
  }
`,Caption=styled_components_browser_esm.ZP.p`
  border: 0;
  display: block;
  font-size: 13px;
  font-style: italic;
  font-weight: normal;
  color: ${props=>props.theme.textSecondary};
  padding: 2px 0;
  line-height: 16px;
  text-align: center;
  min-height: 1em;
  outline: none;
  background: none;
  resize: none;
  user-select: text;
  cursor: text;

  &:empty:not(:focus) {
    visibility: hidden;
  }

  &:empty:before {
    color: ${props=>props.theme.placeholder};
    content: attr(data-caption);
    pointer-events: none;
  }
`,ImageWrapper=styled_components_browser_esm.ZP.span`
  line-height: 0;
  display: inline-block;
  position: relative;

  &:hover {
    ${Button} {
      opacity: 0.9;
    }
  }

  &.ProseMirror-selectednode + ${Caption} {
    visibility: visible;
  }
`;function getParentListItem(state){const $head=state.selection.$head;for(let d=$head.depth;d>0;d--){const node=$head.node(d);if(["list_item","checkbox_item"].includes(node.type.name))return[node,$head.before(d)]}}class ListItem_ListItem extends Node_Node{get name(){return"list_item"}get schema(){return{content:"paragraph block*",defining:!0,draggable:!0,parseDOM:[{tag:"li"}],toDOM:()=>["li",0]}}get plugins(){return[new dist.Sy({state:{init:()=>prosemirror_view_dist.EH.empty,apply:(tr,set,oldState,newState)=>{const action=tr.getMeta("li");if(!action&&!tr.docChanged)return set;switch(set=set.map(tr.mapping,tr.doc),action?.event){case"mouseover":{const result=(0,prosemirror_utils_dist.qv)(newState.doc.resolve(action.pos),(node=>node.type.name===this.name||"checkbox_item"===node.type.name));if(!result)return set;const list=(0,prosemirror_utils_dist.qv)(newState.doc.resolve(action.pos),(node=>isList(node,this.editor.schema)));if(!list)return set;const start=list.node.attrs.order||1;let listItemNumber=0;list.node.content.forEach(((li,_,index)=>{li===result.node&&(listItemNumber=index)}));const counterLength=String(start+listItemNumber).length;return set.add(tr.doc,[prosemirror_view_dist.p.node(result.pos,result.pos+result.node.nodeSize,{class:"hovering"},{hover:!0}),prosemirror_view_dist.p.node(result.pos,result.pos+result.node.nodeSize,{class:`counter-${counterLength}`})])}case"mouseout":{const result=(0,prosemirror_utils_dist.qv)(newState.doc.resolve(action.pos),(node=>node.type.name===this.name||"checkbox_item"===node.type.name));return result?set.remove(set.find(result.pos,result.pos+result.node.nodeSize,(spec=>spec.hover))):set}}return set}},props:{decorations(state){return this.getState(state)},handleDOMEvents:{mouseover:(view,event)=>{const{state,dispatch}=view,target=event.target,li=target?.closest("li");if(!li)return!1;if(!view.dom.contains(li))return!1;const pos=view.posAtDOM(li,0);return!!pos&&(dispatch(state.tr.setMeta("li",{event:"mouseover",pos})),!1)},mouseout:(view,event)=>{const{state,dispatch}=view,target=event.target,li=target?.closest("li");if(!li)return!1;if(!view.dom.contains(li))return!1;const pos=view.posAtDOM(li,0);return!!pos&&(dispatch(state.tr.setMeta("li",{event:"mouseout",pos})),!1)}}}})]}keys({type}){return{Enter:(0,prosemirror_schema_list_dist.s6)(type),Tab:(0,prosemirror_schema_list_dist.bw)(type),"Shift-Tab":(0,prosemirror_schema_list_dist.IB)(type),"Mod-]":(0,prosemirror_schema_list_dist.bw)(type),"Mod-[":(0,prosemirror_schema_list_dist.IB)(type),"Shift-Enter":(state,dispatch)=>{if(!isInList(state))return!1;if(!state.selection.empty)return!1;const{tr,selection}=state;return dispatch(tr.split(selection.to)),!0},"Alt-ArrowUp":(state,dispatch)=>{if(!state.selection.empty)return!1;const result=getParentListItem(state);if(!result)return!1;const[li,pos]=result,$pos=state.doc.resolve(pos);if(!$pos.nodeBefore||!["list_item","checkbox_item"].includes($pos.nodeBefore.type.name))return console.log("Node before not a list item"),!1;const{tr}=state,newPos=pos-$pos.nodeBefore.nodeSize;return dispatch(tr.delete(pos,pos+li.nodeSize).insert(newPos,li).setSelection(dist.Bs.near(tr.doc.resolve(newPos)))),!0},"Alt-ArrowDown":(state,dispatch)=>{if(!state.selection.empty)return!1;const result=getParentListItem(state);if(!result)return!1;const[li,pos]=result,$pos=state.doc.resolve(pos+li.nodeSize);if(!$pos.nodeAfter||!["list_item","checkbox_item"].includes($pos.nodeAfter.type.name))return console.log("Node after not a list item"),!1;const{tr}=state,newPos=pos+li.nodeSize+$pos.nodeAfter.nodeSize;return dispatch(tr.insert(newPos,li).setSelection(dist.Bs.near(tr.doc.resolve(newPos))).delete(pos,pos+li.nodeSize)),!0}}}toMarkdown(state,node){state.renderContent(node)}parseMarkdown(){return{block:"list_item"}}}var markdown_it_container=__webpack_require__("./node_modules/markdown-it-container/index.js"),markdown_it_container_default=__webpack_require__.n(markdown_it_container);function notice(md){return markdown_it_container_default()(md,"notice",{marker:":",validate:()=>!0,render:function(tokens,idx){const{info}=tokens[idx];return 1===tokens[idx].nesting?`<div class="notice notice-${md.utils.escapeHtml(info)}">\n`:"</div>\n"}})}class Notice extends Node_Node{get styleOptions(){return Object.entries({info:this.options.dictionary.info,warning:this.options.dictionary.warning,tip:this.options.dictionary.tip})}get name(){return"container_notice"}get rulePlugins(){return[notice]}get schema(){return{attrs:{style:{default:"info"}},content:"block+",group:"block",defining:!0,draggable:!0,parseDOM:[{tag:"div.notice-block",preserveWhitespace:"full",contentElement:"div:last-child",getAttrs:dom=>({style:dom.className.includes("tip")?"tip":dom.className.includes("warning")?"warning":void 0})}],toDOM:node=>{const select=document.createElement("select");let component;select.addEventListener("change",this.handleStyleChange),this.styleOptions.forEach((([key,label])=>{const option=document.createElement("option");option.value=key,option.innerText=label,option.selected=node.attrs.style===key,select.appendChild(option)})),component="tip"===node.attrs.style?(0,jsx_runtime.jsx)(lib.StarredIcon,{color:"currentColor"}):"warning"===node.attrs.style?(0,jsx_runtime.jsx)(lib.WarningIcon,{color:"currentColor"}):(0,jsx_runtime.jsx)(lib.InfoIcon,{color:"currentColor"});const icon=document.createElement("div");return icon.className="icon",react_dom.render(component,icon),["div",{class:`notice-block ${node.attrs.style}`},icon,["div",{contentEditable:!1},select],["div",{class:"content"},0]]}}}commands({type}){return attrs=>toggleWrap(type,attrs)}handleStyleChange=event=>{const{view}=this.editor,{tr}=view.state,element=event.target,{top,left}=element.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const transaction=tr.setNodeMarkup(result.inside,void 0,{style:element.value});view.dispatch(transaction)}};inputRules({type}){return[(0,prosemirror_inputrules_dist.S0)(/^:::$/,type)]}toMarkdown(state,node){state.write("\n:::"+(node.attrs.style||"info")+"\n"),state.renderContent(node),state.ensureNewLine(),state.write(":::"),state.closeBlock(node)}parseMarkdown(){return{block:"container_notice",getAttrs:tok=>({style:tok.info})}}}class OrderedList extends Node_Node{get name(){return"ordered_list"}get schema(){return{attrs:{order:{default:1}},content:"list_item+",group:"block",parseDOM:[{tag:"ol",getAttrs:dom=>({order:dom.hasAttribute("start")?parseInt(dom.getAttribute("start")||"1",10):1})}],toDOM:node=>1===node.attrs.order?["ol",0]:["ol",{start:node.attrs.order},0]}}commands({type,schema}){return()=>toggleList(type,schema.nodes.list_item)}keys({type,schema}){return{"Shift-Ctrl-9":toggleList(type,schema.nodes.list_item)}}inputRules({type}){return[(0,prosemirror_inputrules_dist.S0)(/^(\d+)\.\s$/,type,(match=>({order:+match[1]})),((match,node)=>node.childCount+node.attrs.order===+match[1]))]}toMarkdown(state,node){state.write("\n");const start=void 0!==node.attrs.order?node.attrs.order:1,maxW=(""+(start+node.childCount-1)).length,space=state.repeat(" ",maxW+2);state.renderList(node,space,(i=>{const nStr=`${start+i}`;return state.repeat(" ",maxW-nStr.length)+nStr+". "}))}parseMarkdown(){return{block:"ordered_list",getAttrs:tok=>({order:parseInt(tok.attrGet("start")||"1",10)})}}}class Paragraph extends Node_Node{get name(){return"paragraph"}get schema(){return{content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:()=>["p",0]}}keys({type}){return{"Shift-Ctrl-0":(0,prosemirror_commands_dist.uJ)(type)}}commands({type}){return()=>(0,prosemirror_commands_dist.uJ)(type)}toMarkdown(state,node){""!==node.textContent.trim()||0!==node.childCount||state.inTable?(state.renderInline(node),state.closeBlock(node)):state.write("\\\n")}parseMarkdown(){return{block:"paragraph"}}}const BREAK_REGEX=/(?:^|[^\\])\\n/;function markdownTables(md){md.core.ruler.after("inline","tables-pm",(state=>{const tokens=state.tokens;let inside=!1;for(let i=tokens.length-1;i>0;i--){if(inside&&tokens[i].level--,"inline"===tokens[i].type&&tokens[i].content.match(BREAK_REGEX)){const existing=tokens[i].children||[];tokens[i].children=[],existing.forEach((child=>{const breakParts=child.content.split(BREAK_REGEX);breakParts.length>1&&"code_inline"!==child.type?breakParts.forEach(((part,index)=>{const token=new(token_default())("text","",1);if(token.content=part.trim(),tokens[i].children?.push(token),index<breakParts.length-1){const brToken=new(token_default())("br","br",1);tokens[i].children?.push(brToken)}})):tokens[i].children?.push(child)}))}if(["thead_open","thead_close","tbody_open","tbody_close"].includes(tokens[i].type)&&(inside=!inside,tokens.splice(i,1)),["th_open","td_open"].includes(tokens[i].type)){tokens.splice(i+1,0,new(token_default())("paragraph_open","p",1));const tokenAttrs=tokens[i].attrs;if(tokenAttrs){const style=tokenAttrs[0][1];tokens[i].info=style.split(":")[1]}}["th_close","td_close"].includes(tokens[i].type)&&tokens.splice(i,0,new(token_default())("paragraph_close","p",-1))}return!1}))}class Table extends Node_Node{get name(){return"table"}get schema(){return{content:"tr+",tableRole:"table",isolating:!0,group:"block",parseDOM:[{tag:"table"}],toDOM:()=>["div",{class:"scrollable-wrapper"},["div",{class:"scrollable"},["table",{class:"rme-table"},["tbody",0]]]]}}get rulePlugins(){return[markdownTables]}commands({schema}){return{createTable:({rowsCount,colsCount})=>(state,dispatch)=>{const offset=state.tr.selection.anchor+1,nodes=(0,prosemirror_utils_dist.W_)(schema,rowsCount,colsCount),tr=state.tr.replaceSelectionWith(nodes).scrollIntoView(),resolvedPos=tr.doc.resolve(offset);tr.setSelection(dist.Bs.near(resolvedPos)),dispatch(tr)},setColumnAttr:({index,alignment})=>(state,dispatch)=>{const cells=(0,prosemirror_utils_dist.yX)(index)(state.selection)||[];let transaction=state.tr;cells.forEach((({pos})=>{transaction=transaction.setNodeMarkup(pos,null,{alignment})})),dispatch(transaction)},addColumnBefore:()=>prosemirror_tables_dist.I_,addColumnAfter:()=>prosemirror_tables_dist.e2,deleteColumn:()=>prosemirror_tables_dist.eA,addRowAfter:({index})=>(state,dispatch)=>{if(0===index){const tr=(0,prosemirror_utils_dist.rE)(index+2,!0)(state.tr);dispatch((0,prosemirror_utils_dist.Mk)(index+2,index+1)(tr))}else dispatch((0,prosemirror_utils_dist.rE)(index+1,!0)(state.tr))},deleteRow:()=>prosemirror_tables_dist.qK,deleteTable:()=>prosemirror_tables_dist.WQ,toggleHeaderColumn:()=>prosemirror_tables_dist.sr,toggleHeaderRow:()=>prosemirror_tables_dist.lm,toggleHeaderCell:()=>prosemirror_tables_dist.II,setCellAttr:()=>prosemirror_tables_dist.wb,fixTables:()=>prosemirror_tables_dist.tp}}keys(){return{Tab:(0,prosemirror_tables_dist.nA)(1),"Shift-Tab":(0,prosemirror_tables_dist.nA)(-1),Enter:(state,dispatch)=>{if(!(0,prosemirror_tables_dist.Lw)(state))return!1;const cells=(0,prosemirror_utils_dist.yX)(0)(state.selection)||[];return dispatch((0,prosemirror_utils_dist.rE)(cells.length,!0)(state.tr)),!0}}}toMarkdown(state,node){state.renderTable(node),state.closeBlock(node)}parseMarkdown(){return{block:"table"}}get plugins(){return[(0,prosemirror_tables_dist.G3)(),new dist.Sy({props:{decorations:state=>{const{doc}=state,decorations=[];let index=0;return doc.descendants(((node,pos)=>{if(node.type.name!==this.name)return;const table=document.getElementsByClassName("rme-table")[index];if(!table)return;const element=table.parentElement;!!(element&&element.scrollWidth>element.clientWidth)&&decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{const shadow=document.createElement("div");return shadow.className="scrollable-shadow right",shadow}))),index++})),prosemirror_view_dist.EH.create(doc,decorations)}}})]}}class TableCell extends Node_Node{get name(){return"td"}get schema(){return{content:"paragraph+",tableRole:"cell",isolating:!0,parseDOM:[{tag:"td"}],toDOM:node=>["td",node.attrs.alignment?{style:`text-align: ${node.attrs.alignment}`}:{},0],attrs:{colspan:{default:1},rowspan:{default:1},alignment:{default:null}}}}toMarkdown(){}parseMarkdown(){return{block:"td",getAttrs:tok=>({alignment:tok.info})}}get plugins(){return[new dist.Sy({props:{decorations:state=>{const{doc,selection}=state,decorations=[],cells=(0,prosemirror_utils_dist.yX)(0)(selection);return cells&&cells.forEach((({pos},index)=>{0===index&&decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{let className="grip-table";(0,prosemirror_utils_dist.u4)(selection)&&(className+=" selected");const grip=document.createElement("a");return grip.className=className,grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.options.onSelectTable(state)})),grip}))),decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{let className="grip-row";(0,prosemirror_utils_dist.Ax)(index)(selection)&&(className+=" selected"),0===index&&(className+=" first"),index===cells.length-1&&(className+=" last");const grip=document.createElement("a");return grip.className=className,grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.options.onSelectRow(index,state)})),grip})))})),prosemirror_view_dist.EH.create(doc,decorations)}}})]}}class TableHeadCell extends Node_Node{get name(){return"th"}get schema(){return{content:"paragraph+",tableRole:"header_cell",isolating:!0,parseDOM:[{tag:"th"}],toDOM:node=>["th",node.attrs.alignment?{style:`text-align: ${node.attrs.alignment}`}:{},0],attrs:{colspan:{default:1},rowspan:{default:1},alignment:{default:null}}}}toMarkdown(){}parseMarkdown(){return{block:"th",getAttrs:tok=>({alignment:tok.info})}}get plugins(){return[new dist.Sy({props:{decorations:state=>{const{doc,selection}=state,decorations=[],cells=(0,prosemirror_utils_dist.uU)(0)(selection);return cells&&cells.forEach((({pos},index)=>{decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{let className="grip-column";(0,prosemirror_utils_dist.u)(index)(selection)&&(className+=" selected"),0===index?className+=" first":index===cells.length-1&&(className+=" last");const grip=document.createElement("a");return grip.className=className,grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.options.onSelectColumn(index,state)})),grip})))})),prosemirror_view_dist.EH.create(doc,decorations)}}})]}}class TableRow extends Node_Node{get name(){return"tr"}get schema(){return{content:"(th | td)*",tableRole:"row",parseDOM:[{tag:"tr"}],toDOM:()=>["tr",0]}}parseMarkdown(){return{block:"tr"}}}function markInputRule(regexp,markType,getAttrs){return new prosemirror_inputrules_dist.VK(regexp,((state,match,start,end)=>{const attrs=getAttrs instanceof Function?getAttrs(match):getAttrs,{tr}=state,m=match.length-1;let markEnd=end,markStart=start;if(match[m]){const matchStart=start+match[0].indexOf(match[m-1]),matchEnd=matchStart+match[m-1].length-1,textStart=matchStart+match[m-1].lastIndexOf(match[m]),textEnd=textStart+match[m].length,excludedMarks=function getMarksBetween(start,end,state){let marks=[];return state.doc.nodesBetween(start,end,((node,pos)=>{marks=[...marks,...node.marks.map((mark=>({start:pos,end:pos+node.nodeSize,mark})))]})),marks}(start,end,state).filter((item=>item.mark.type.excludes(markType))).filter((item=>item.end>matchStart));if(excludedMarks.length)return null;textEnd<matchEnd&&tr.delete(textEnd,matchEnd),textStart>matchStart&&tr.delete(matchStart,textStart),markStart=matchStart,markEnd=markStart+match[m].length}return tr.addMark(markStart,markEnd,markType.create(attrs)),tr.removeStoredMark(markType),tr}))}class Mark extends Extension{get type(){return"mark"}get markdownToken(){return""}get toMarkdown(){return{}}parseMarkdown(){return{}}commands({type}){return()=>(0,prosemirror_commands_dist.w9)(type)}}class Bold extends Mark{get name(){return"strong"}get schema(){return{parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-style",getAttrs:value=>"bold"===value}],toDOM:()=>["strong"]}}inputRules({type}){return[markInputRule(/(?:\*\*)([^*]+)(?:\*\*)$/,type)]}keys({type}){return{"Mod-b":(0,prosemirror_commands_dist.w9)(type),"Mod-B":(0,prosemirror_commands_dist.w9)(type)}}get toMarkdown(){return{open:"**",close:"**",mixable:!0,expelEnclosingWhitespace:!0}}parseMarkdown(){return{mark:"strong"}}}function hasCode(state,pos){const{code_inline}=state.schema.marks,node=pos>=0&&state.doc.nodeAt(pos);return!!node&&!!node.marks.filter((mark=>mark.type===code_inline)).length}function backticksFor(node,side){const ticks=/`+/g;let match,len=0;if(node.isText)for(;match=ticks.exec(node.text);)len=Math.max(len,match[0].length);let result=len>0&&side>0?" `":"`";for(let i=0;i<len;i++)result+="`";return len>0&&side<0&&(result+=" "),result}class Code extends Mark{get name(){return"code_inline"}get schema(){return{excludes:"_",parseDOM:[{tag:"code",preserveWhitespace:!0}],toDOM:()=>["code",{spellCheck:!1}]}}inputRules({type}){return[markInputRule(/(?:^|[^`])(`([^`]+)`)$/,type)]}keys({type}){return{"Mod`":(0,prosemirror_commands_dist.w9)(type),ArrowLeft:(state,dispatch)=>{const{code_inline}=state.schema.marks,{empty,$cursor}=state.selection;if(!empty||!$cursor)return!1;const{storedMarks}=state.tr;if(code_inline){const insideCode=code_inline&&queries_isMarkActive(code_inline)(state),currentPosHasCode=hasCode(state,$cursor.pos),nextPosHasCode=hasCode(state,$cursor.pos-1),nextNextPosHasCode=hasCode(state,$cursor.pos-2),exitingCode=currentPosHasCode&&!nextPosHasCode&&Array.isArray(storedMarks),atLeftEdge=nextPosHasCode&&!nextNextPosHasCode&&(null===storedMarks||Array.isArray(storedMarks)&&!!storedMarks.length),atRightEdge=(exitingCode&&Array.isArray(storedMarks)&&!storedMarks.length||!exitingCode&&null===storedMarks)&&!nextPosHasCode&&nextNextPosHasCode,enteringCode=!currentPosHasCode&&nextPosHasCode&&Array.isArray(storedMarks)&&!storedMarks.length;if(!insideCode&&atRightEdge)return dispatch(state.tr.setSelection(dist.Y1.near(state.doc.resolve($cursor.pos-1))).removeStoredMark(code_inline)),!0;if(!insideCode&&enteringCode)return dispatch(state.tr.addStoredMark(code_inline.create())),!0;if(insideCode&&atLeftEdge)return dispatch(state.tr.setSelection(dist.Y1.near(state.doc.resolve($cursor.pos-1))).addStoredMark(code_inline.create())),!0;const isFirstChild=0===$cursor.index($cursor.depth-1);if(insideCode&&(exitingCode||!$cursor.nodeBefore&&isFirstChild))return dispatch(state.tr.removeStoredMark(code_inline)),!0}return!1},ArrowRight:(state,dispatch)=>{const{code_inline}=state.schema.marks,{empty,$cursor}=state.selection;if(!empty||!$cursor)return!1;const{storedMarks}=state.tr;if(code_inline){const insideCode=queries_isMarkActive(code_inline)(state),currentPosHasCode=state.doc.rangeHasMark($cursor.pos,$cursor.pos,code_inline),nextPosHasCode=state.doc.rangeHasMark($cursor.pos,$cursor.pos+1,code_inline),exitingCode=!(currentPosHasCode||nextPosHasCode||storedMarks&&!storedMarks.length),enteringCode=!currentPosHasCode&&nextPosHasCode&&(!storedMarks||!storedMarks.length);if(!insideCode&&enteringCode)return dispatch(state.tr.addStoredMark(code_inline.create())),!0;if(insideCode&&exitingCode)return dispatch(state.tr.removeStoredMark(code_inline)),!0}return!1}}}get toMarkdown(){return{open:(_state,_mark,parent,index)=>backticksFor(parent.child(index),-1),close:(_state,_mark,parent,index)=>backticksFor(parent.child(index-1),1),escape:!1}}parseMarkdown(){return{mark:"code_inline"}}}function mark(options){const delimCharCode=options.delim.charCodeAt(0);return function emphasisPlugin(md){function postProcess(state,delimiters){let i,j,startDelim,endDelim,token;const loneMarkers=[],max=delimiters.length;for(i=0;i<max;i++)startDelim=delimiters[i],startDelim.marker===delimCharCode&&-1!==startDelim.end&&(endDelim=delimiters[startDelim.end],token=state.tokens[startDelim.token],token.type=`${options.mark}_open`,token.tag="span",token.attrs=[["class",options.mark]],token.nesting=1,token.markup=options.delim,token.content="",token=state.tokens[endDelim.token],token.type=`${options.mark}_close`,token.tag="span",token.nesting=-1,token.markup=options.delim,token.content="","text"===state.tokens[endDelim.token-1].type&&state.tokens[endDelim.token-1].content===options.delim[0]&&loneMarkers.push(endDelim.token-1));for(;loneMarkers.length;){for(i=loneMarkers.pop(),j=i+1;j<state.tokens.length&&state.tokens[j].type===`${options.mark}_close`;)j++;j--,i!==j&&(token=state.tokens[j],state.tokens[j]=state.tokens[i],state.tokens[i]=token)}}md.inline.ruler.before("emphasis",options.mark,(function tokenize(state,silent){let i,token;const start=state.pos,marker=state.src.charCodeAt(start);if(silent)return!1;if(marker!==delimCharCode)return!1;const scanned=state.scanDelims(state.pos,!0),ch=String.fromCharCode(marker);let len=scanned.length;if(len<2)return!1;for(len%2&&(token=state.push("text","",0),token.content=ch,len--),i=0;i<len;i+=2)token=state.push("text","",0),token.content=ch+ch,(scanned.can_open||scanned.can_close)&&state.delimiters.push({marker,length:0,jump:i,token:state.tokens.length-1,end:-1,open:scanned.can_open,close:scanned.can_close});return state.pos+=scanned.length,!0})),md.inline.ruler2.before("emphasis",options.mark,(function(state){let curr;const tokensMeta=state.tokens_meta,max=(state.tokens_meta||[]).length;for(postProcess(state,state.delimiters),curr=0;curr<max;curr++)tokensMeta[curr]&&tokensMeta[curr].delimiters&&postProcess(state,tokensMeta[curr].delimiters)}))}}class Highlight extends Mark{get name(){return"highlight"}get schema(){return{parseDOM:[{tag:"mark"}],toDOM:()=>["mark"]}}inputRules({type}){return[markInputRule(/(?:==)([^=]+)(?:==)$/,type)]}keys({type}){return{"Mod-Ctrl-h":(0,prosemirror_commands_dist.w9)(type)}}get rulePlugins(){return[mark({delim:"==",mark:"highlight"})]}get toMarkdown(){return{open:"==",close:"==",mixable:!0,expelEnclosingWhitespace:!0}}parseMarkdown(){return{mark:"highlight"}}}class Italic extends Mark{get name(){return"em"}get schema(){return{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:value=>"italic"===value}],toDOM:()=>["em"]}}inputRules({type}){return[markInputRule(/(?:^|[\s])(_([^_]+)_)$/,type),markInputRule(/(?:^|[^*])(\*([^*]+)\*)$/,type)]}keys({type}){return{"Mod-i":(0,prosemirror_commands_dist.w9)(type),"Mod-I":(0,prosemirror_commands_dist.w9)(type)}}get toMarkdown(){return{open:"*",close:"*",mixable:!0,expelEnclosingWhitespace:!0}}parseMarkdown(){return{mark:"em"}}}const LINK_INPUT_REGEX=/\[([^[]+)]\((\S+)\)$/;function isPlainURL(link,parent,index,side){if(link.attrs.title||!/^\w+:/.test(link.attrs.href))return!1;const content=parent.child(index+(side<0?-1:0));if(!content.isText||content.text!==link.attrs.href||content.marks[content.marks.length-1]!==link)return!1;if(index===(side<0?1:parent.childCount-1))return!0;const next=parent.child(index+(side<0?-2:1));return!link.isInSet(next.marks)}class Link extends Mark{get name(){return"link"}get schema(){return{attrs:{href:{default:""}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:dom=>({href:dom.getAttribute("href")})}],toDOM:node=>["a",{...node.attrs,rel:"noopener noreferrer nofollow"},0]}}inputRules({type}){return[new prosemirror_inputrules_dist.VK(LINK_INPUT_REGEX,((state,match,start,end)=>{const[okay,alt,href]=match,{tr}=state;return okay&&tr.replaceWith(start,end,this.editor.schema.text(alt)).addMark(start,start+alt.length,type.create({href})),tr}))]}commands({type}){return({href}={href:""})=>(0,prosemirror_commands_dist.w9)(type,{href})}keys({type}){return{"Mod-k":(state,dispatch)=>state.selection.empty?(this.options.onKeyboardShortcut(),!0):(0,prosemirror_commands_dist.w9)(type,{href:""})(state,dispatch)}}get plugins(){return[new dist.Sy({props:{handleDOMEvents:{mouseover:(_view,event)=>!!(event.target instanceof HTMLAnchorElement&&!event.target.className.includes("ProseMirror-widget")&&this.options.onHoverLink)&&this.options.onHoverLink(event),click:(_view,event)=>{if(event.target instanceof HTMLAnchorElement){const href=event.target.href||(event.target.parentNode instanceof HTMLAnchorElement?event.target.parentNode.href:"");if(href.startsWith("#")&&this.options.onClickHashtag)return event.stopPropagation(),event.preventDefault(),this.options.onClickHashtag(href,event),!0;if(this.options.onClickLink)return event.stopPropagation(),event.preventDefault(),this.options.onClickLink(href,event),!0}return!1}}}})]}get toMarkdown(){return{open:(_state,mark,parent,index)=>isPlainURL(mark,parent,index,1)?"<":"[",close:(state,mark,parent,index)=>isPlainURL(mark,parent,index,-1)?">":"]("+state.esc(mark.attrs.href)+(mark.attrs.title?" "+state.quote(mark.attrs.title):"")+")"}}parseMarkdown(){return{mark:"link",getAttrs:tok=>({href:tok.attrGet("href"),title:tok.attrGet("title")||null})}}}class Strikethrough extends Mark{get name(){return"strikethrough"}get schema(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"}],toDOM:()=>["del",0]}}keys({type}){return{"Mod-d":(0,prosemirror_commands_dist.w9)(type)}}inputRules({type}){return[markInputRule(/~([^~]+)~$/,type)]}get toMarkdown(){return{open:"~~",close:"~~",mixable:!0,expelEnclosingWhitespace:!0}}get markdownToken(){return"s"}parseMarkdown(){return{mark:"strikethrough"}}}class Placeholder extends Mark{get name(){return"placeholder"}get schema(){return{parseDOM:[{tag:"span.template-placeholder"}],toDOM:()=>["span",{class:"template-placeholder"}]}}get rulePlugins(){return[mark({delim:"!!",mark:"placeholder"})]}get toMarkdown(){return{open:"!!",close:"!!",mixable:!0,expelEnclosingWhitespace:!0}}parseMarkdown(){return{mark:"placeholder"}}get plugins(){return[new dist.Sy({props:{handleTextInput:(view,from,to,text)=>{if(this.editor.props.template)return!1;const{state,dispatch}=view,range=getMarkRange(state.doc.resolve(from),state.schema.marks.placeholder);if(!range)return!1;const selectionStart=Math.min(from,range.from),selectionEnd=Math.max(to,range.to);dispatch(state.tr.removeMark(range.from,range.to,state.schema.marks.placeholder).insertText(text,selectionStart,selectionEnd));const $to=view.state.doc.resolve(selectionStart+text.length);return dispatch(view.state.tr.setSelection(dist.Bs.near($to))),!0},handleKeyDown:(view,event)=>{if(!view.props.editable||!view.props.editable(view.state))return!1;if(this.editor.props.template)return!1;if("ArrowLeft"!==event.key&&"ArrowRight"!==event.key&&"Backspace"!==event.key)return!1;const{state,dispatch}=view;if("Backspace"===event.key){const range=getMarkRange(state.doc.resolve(Math.max(0,state.selection.from-1)),state.schema.marks.placeholder);return!!range&&(dispatch(state.tr.removeMark(range.from,range.to,state.schema.marks.placeholder).insertText("",range.from,range.to)),!0)}if("ArrowLeft"===event.key){const range=getMarkRange(state.doc.resolve(Math.max(0,state.selection.from-1)),state.schema.marks.placeholder);if(!range)return!1;const startOfMark=state.doc.resolve(range.from);return dispatch(state.tr.setSelection(dist.Bs.near(startOfMark))),!0}if("ArrowRight"===event.key){const range=getMarkRange(state.selection.$from,state.schema.marks.placeholder);if(!range)return!1;const endOfMark=state.doc.resolve(range.to);return dispatch(state.tr.setSelection(dist.Bs.near(endOfMark))),!0}return!1},handleClick:(view,pos,event)=>{if(!view.props.editable||!view.props.editable(view.state))return!1;if(this.editor.props.template)return!1;if(event.target instanceof HTMLSpanElement&&event.target.className.includes("template-placeholder")){const{state,dispatch}=view,range=getMarkRange(state.selection.$from,state.schema.marks.placeholder);if(!range)return!1;event.stopPropagation(),event.preventDefault();const startOfMark=state.doc.resolve(range.from);return dispatch(state.tr.setSelection(dist.Bs.near(startOfMark))),!0}return!1}}})]}}function markdownUnderlines(md){md.inline.ruler2.after("emphasis","underline",(state=>{const tokens=state.tokens;for(let i=tokens.length-1;i>0;i--){const token=tokens[i];"__"===token.markup&&("strong_open"===token.type&&(tokens[i].tag="underline",tokens[i].type="underline_open"),"strong_close"===token.type&&(tokens[i].tag="underline",tokens[i].type="underline_close"))}return!1}))}class Underline extends Mark{get name(){return"underline"}get schema(){return{parseDOM:[{tag:"u"},{style:"text-decoration",getAttrs:value=>"underline"===value}],toDOM:()=>["u",0]}}get rulePlugins(){return[markdownUnderlines]}inputRules({type}){return[markInputRule(/(?:__)([^_]+)(?:__)$/,type)]}keys({type}){return{"Mod-u":(0,prosemirror_commands_dist.w9)(type)}}get toMarkdown(){return{open:"__",close:"__",mixable:!0,expelEnclosingWhitespace:!0}}parseMarkdown(){return{mark:"underline"}}}const OPEN_REGEX=/^\/(\w+)?$/,CLOSE_REGEX=/(^(?!\/(\w+)?)(.*)$|^\/(([\w\W]+)\s.*|\s)$|^\/((\W)+)$)/;function run(view,from,to,regex,handler){if(view.composing)return!1;const state=view.state,$from=state.doc.resolve(from);if($from.parent.type.spec.code)return!1;const textBefore=$from.parent.textBetween(Math.max(0,$from.parentOffset-500),$from.parentOffset,null,"￼"),match=regex.exec(textBefore);return!!handler(state,match,match?from-match[0].length:from,to)}class BlockMenuTrigger extends Extension{get name(){return"blockmenu"}get plugins(){const button=document.createElement("button");return button.className="block-menu-trigger",button.type="button",react_dom.render((0,jsx_runtime.jsx)(lib.PlusIcon,{color:"currentColor"}),button),[new dist.Sy({props:{handleClick:()=>(this.options.onClose(),!1),handleKeyDown:(view,event)=>{if("Backspace"===event.key&&setTimeout((()=>{const{pos}=view.state.selection.$from;return run(view,pos,pos,OPEN_REGEX,((state,match)=>(match?this.options.onOpen(match[1]):this.options.onClose(),null)))})),"Enter"===event.key||"ArrowUp"===event.key||"ArrowDown"===event.key||"Tab"===event.key){const{pos}=view.state.selection.$from;return run(view,pos,pos,OPEN_REGEX,((state,match)=>!!match||null))}return!1},decorations:state=>{const parent=(0,prosemirror_utils_dist.Kk)((node=>"paragraph"===node.type.name))(state.selection);if(!parent)return;const decorations=[],isEmpty=parent&&0===parent.node.content.size,isSlash=parent&&"/"===parent.node.textContent;return 1===state.selection.$from.depth?(isEmpty&&(decorations.push(prosemirror_view_dist.p.widget(parent.pos,(()=>(button.addEventListener("click",(()=>{this.options.onOpen("")})),button)))),decorations.push(prosemirror_view_dist.p.node(parent.pos,parent.pos+parent.node.nodeSize,{class:"placeholder","data-empty-text":this.options.dictionary.newLineEmpty}))),isSlash&&decorations.push(prosemirror_view_dist.p.node(parent.pos,parent.pos+parent.node.nodeSize,{class:"placeholder","data-empty-text":`  ${this.options.dictionary.newLineWithSlash}`})),prosemirror_view_dist.EH.create(state.doc,decorations)):void 0}}})]}inputRules(){return[new prosemirror_inputrules_dist.VK(OPEN_REGEX,((state,match)=>(match&&"paragraph"===state.selection.$from.parent.type.name&&!(0,prosemirror_tables_dist.Lw)(state)&&this.options.onOpen(match[1]),null))),new prosemirror_inputrules_dist.VK(CLOSE_REGEX,((state,match)=>(match&&this.options.onClose(),null)))]}}const EmojiTrigger_OPEN_REGEX=/(?:^|\s):([0-9a-zA-Z_+-]+)?$/,EmojiTrigger_CLOSE_REGEX=/(?:^|\s):(([0-9a-zA-Z_+-]*\s+)|(\s+[0-9a-zA-Z_+-]+)|[^0-9a-zA-Z_+-]+)$/;class EmojiTrigger extends Extension{get name(){return"emojimenu"}get plugins(){return[new dist.Sy({props:{handleClick:()=>(this.options.onClose(),!1),handleKeyDown:(view,event)=>{if("Backspace"===event.key&&setTimeout((()=>{const{pos}=view.state.selection.$from;return run(view,pos,pos,EmojiTrigger_OPEN_REGEX,((state,match)=>(match?this.options.onOpen(match[1]):this.options.onClose(),null)))})),"Enter"===event.key||"ArrowUp"===event.key||"ArrowDown"===event.key||"Tab"===event.key){const{pos}=view.state.selection.$from;return run(view,pos,pos,EmojiTrigger_OPEN_REGEX,((state,match)=>!!match||null))}return!1}}})]}inputRules(){return[new prosemirror_inputrules_dist.VK(EmojiTrigger_OPEN_REGEX,((state,match)=>(match&&"paragraph"===state.selection.$from.parent.type.name&&!isInCode(state)&&this.options.onOpen(match[1]),null))),new prosemirror_inputrules_dist.VK(EmojiTrigger_CLOSE_REGEX,((state,match)=>(match&&this.options.onClose(),null)))]}}class Folding extends Extension{get name(){return"folding"}get plugins(){let loaded=!1;return[new dist.Sy({view:view=>(loaded=!1,view.dispatch(view.state.tr.setMeta("folding",{loaded:!0})),{}),appendTransaction:(transactions,oldState,newState)=>{if(loaded)return;if(!transactions.some((transaction=>transaction.getMeta("folding"))))return;let modified=!1;const tr=newState.tr,blocks=(0,prosemirror_utils_dist.EX)(newState.doc);for(const block of blocks)if("heading"===block.node.type.name){const persistKey=headingToPersistenceKey(block.node,this.editor.props.id),persistedState=localStorage?.getItem(persistKey);"collapsed"===persistedState&&(tr.setNodeMarkup(block.pos,void 0,{...block.node.attrs,collapsed:!0}),modified=!0)}return loaded=!0,modified?tr:null},props:{decorations:state=>{const{doc}=state,decorations=findCollapsedNodes(doc).map((block=>prosemirror_view_dist.p.node(block.pos,block.pos+block.node.nodeSize,{class:"folded-content"})));return prosemirror_view_dist.EH.create(doc,decorations)}}})]}}var prosemirror_history_dist=__webpack_require__("./node_modules/prosemirror-history/dist/index.js");class History extends Extension{get name(){return"history"}keys(){return{"Mod-z":prosemirror_history_dist.Yw,"Mod-y":prosemirror_history_dist.KX,"Shift-Mod-z":prosemirror_history_dist.KX,Backspace:prosemirror_inputrules_dist.dU}}get plugins(){return[(0,prosemirror_history_dist.m8)()]}}const isModKey_isMac=!("undefined"==typeof window)&&"MacIntel"===window.navigator.platform;class Keys extends Extension{get name(){return"keys"}get plugins(){return[new dist.Sy({props:{handleDOMEvents:{blur:this.options.onBlur,focus:this.options.onFocus},handleKeyDown:(view,event)=>{if(view.state.selection instanceof dist.C1){if("ArrowUp"===event.key){const selection=dist.Y1.atStart(view.state.doc);return view.dispatch(view.state.tr.setSelection(selection)),!0}if("ArrowDown"===event.key){const selection=dist.Y1.atEnd(view.state.doc);return view.dispatch(view.state.tr.setSelection(selection)),!0}}return view.state.selection instanceof prosemirror_gapcursor_dist.Q&&"Enter"===event.key?(view.dispatch(view.state.tr.insert(view.state.selection.from,view.state.schema.nodes.paragraph.create({}))),view.dispatch(view.state.tr.setSelection(dist.Bs.near(view.state.doc.resolve(view.state.selection.from),-1))),!0):!!function isModKey(event){return isModKey_isMac?event.metaKey:event.ctrlKey}(event)&&("s"===event.key?(event.preventDefault(),this.options.onSave(),!0):"Enter"===event.key?(event.preventDefault(),this.options.onSaveAndExit(),!0):"Escape"===event.key&&(event.preventDefault(),this.options.onCancel(),!0))}}})]}}class MaxLength extends Extension{get name(){return"maxlength"}get plugins(){return[new dist.Sy({filterTransaction:tr=>{if(this.options.maxLength){return!(tr.doc&&tr.doc.nodeSize>this.options.maxLength)}return!0}})]}}class Placeholder_Placeholder extends Extension{get name(){return"empty-placeholder"}get defaultOptions(){return{emptyNodeClass:"placeholder",placeholder:""}}get plugins(){return[new dist.Sy({props:{decorations:state=>{const{doc}=state,decorations=[],completelyEmpty=""===doc.textContent&&doc.childCount<=1&&doc.content.size<=2;return doc.descendants(((node,pos)=>{if(!completelyEmpty)return;if(0!==pos||"paragraph"!==node.type.name)return;const decoration=prosemirror_view_dist.p.node(pos,pos+node.nodeSize,{class:this.options.emptyNodeClass,"data-empty-text":this.options.placeholder});decorations.push(decoration)})),prosemirror_view_dist.EH.create(doc,decorations)}}})]}}const rightArrow=new prosemirror_inputrules_dist.VK(/->$/,"→");class SmartText extends Extension{get name(){return"smart_text"}inputRules(){return[rightArrow,prosemirror_inputrules_dist.LH,...prosemirror_inputrules_dist.yR]}}class TrailingNode extends Extension{get name(){return"trailing_node"}get defaultOptions(){return{node:"paragraph",notAfter:["paragraph","heading"]}}get plugins(){const plugin=new dist.H$(this.name),disabledNodes=Object.entries(this.editor.schema.nodes).map((([,value])=>value)).filter((node=>this.options.notAfter.includes(node.name)));return[new dist.Sy({key:plugin,view:()=>({update:view=>{const{state}=view;if(!plugin.getState(state))return;const{doc,schema,tr}=state,type=schema.nodes[this.options.node],transaction=tr.insert(doc.content.size,type.create());view.dispatch(transaction)}}),state:{init:(_,state)=>{const lastNode=state.tr.doc.lastChild;return!!lastNode&&!disabledNodes.includes(lastNode.type)},apply:(tr,value)=>{if(!tr.docChanged)return value;const lastNode=tr.doc.lastChild;return!!lastNode&&!disabledNodes.includes(lastNode.type)}}})]}}class PasteHandler extends Extension{get name(){return"markdown-paste"}get plugins(){return[new dist.Sy({props:{handlePaste:(view,event)=>{if(view.props.editable&&!view.props.editable(view.state))return!1;if(!event.clipboardData)return!1;const text=event.clipboardData.getData("text/plain"),html=event.clipboardData.getData("text/html"),vscode=event.clipboardData.getData("vscode-editor-data"),{state,dispatch}=view;if(isUrl(text)){if(!state.selection.empty)return(0,prosemirror_commands_dist.w9)(this.editor.schema.marks.link,{href:text})(state,dispatch),!0;const{embeds}=this.editor.props;if(embeds&&!(0,prosemirror_tables_dist.Lw)(state))for(const embed of embeds){if(embed.matcher(text))return this.editor.commands.embed({href:text}),!0}const transaction=view.state.tr.insertText(text,state.selection.from,state.selection.to).addMark(state.selection.from,state.selection.to+text.length,state.schema.marks.link.create({href:text}));return view.dispatch(transaction),!0}if(isInCode(view.state))return event.preventDefault(),view.dispatch(view.state.tr.insertText(text)),!0;const vscodeMeta=vscode?JSON.parse(vscode):void 0,pasteCodeLanguage=vscodeMeta?.mode;if(pasteCodeLanguage&&"markdown"!==pasteCodeLanguage)return event.preventDefault(),view.dispatch(view.state.tr.replaceSelectionWith(view.state.schema.nodes.code_fence.create({language:Object.keys(LANGUAGES).includes(vscodeMeta.mode)?vscodeMeta.mode:null})).insertText(text)),!0;if(html?.includes("data-pm-slice"))return!1;if(function isMarkdown(text){const fences=text.match(/^```/gm);if(fences&&fences.length>1)return!0;if(text.match(/\[[^]+\]\(https?:\/\/\S+\)/gm))return!0;if(text.match(/\[[^]+\]\(\/\S+\)/gm))return!0;if(text.match(/^#{1,6}\s+\S+/gm))return!0;const listItems=text.match(/^[\d-*].?\s\S+/gm);return!!(listItems&&listItems.length>1)}(text)||0===html.length||"markdown"===pasteCodeLanguage){event.preventDefault();const paste=this.editor.pasteParser.parse(function normalizePastedMarkdown(text){const CHECKBOX_REGEX=/^\s?(\[(X|\s|_|-)\]\s(.*)?)/gim;for(;text.match(CHECKBOX_REGEX);)text=text.replace(CHECKBOX_REGEX,(match=>`- ${match.trim()}`));return text}(text)),slice=paste?.slice(0);if(slice){const transaction=view.state.tr.replaceSelection(slice);return view.dispatch(transaction),!0}}return!1}}})]}}mark({delim:"==",mark:"highlight"}),mark({delim:"!!",mark:"placeholder"});const extensions=new ExtensionManager([new Doc,new Text,new HardBreak,new Paragraph,new Blockquote,new Emoji_Emoji,new BulletList,new CodeBlock,new CodeFence,new CheckboxList,new CheckboxItem,new Embed,new ListItem_ListItem,new Notice,new Heading,new HorizontalRule,new Image_Image,new Table,new TableCell,new TableHeadCell,new TableRow,new Bold,new Code,new Highlight,new Italic,new Link,new Strikethrough,new Placeholder,new Underline,new OrderedList]),schema=new prosemirror_model_dist.V_({nodes:extensions.nodes,marks:extensions.marks});extensions.parser({schema,plugins:extensions.rulePlugins}),extensions.serializer();class RichMarkdownEditor extends react.PureComponent{static defaultProps={defaultValue:"",dir:"auto",placeholder:"Write something nice…",onImageUploadStart:()=>{},onImageUploadStop:()=>{},onClickLink:href=>{window.open(href,"_blank")},embeds:[],extensions:[],tooltip:Tooltip};state={isRTL:!1,isEditorFocused:!1,selectionMenuOpen:!1,blockMenuOpen:!1,linkMenuOpen:!1,blockMenuSearch:"",emojiMenuOpen:!1};componentDidMount(){this.init(),this.props.scrollTo&&this.scrollToAnchor(this.props.scrollTo),this.calculateDir(),this.props.readOnly||this.props.autoFocus&&this.focusAtEnd()}componentDidUpdate(prevProps){if(this.props.value&&prevProps.value!==this.props.value){const newState=this.createState(this.props.value);this.view.updateState(newState)}prevProps.readOnly!==this.props.readOnly&&this.view.update({...this.view.props,editable:()=>!this.props.readOnly}),this.props.scrollTo&&this.props.scrollTo!==prevProps.scrollTo&&this.scrollToAnchor(this.props.scrollTo),prevProps.readOnly&&!this.props.readOnly&&this.props.autoFocus&&this.focusAtEnd(),prevProps.dir!==this.props.dir&&this.calculateDir(),this.isBlurred||this.state.isEditorFocused||this.state.blockMenuOpen||this.state.linkMenuOpen||this.state.selectionMenuOpen||(this.isBlurred=!0,this.props.onBlur&&this.props.onBlur()),this.isBlurred&&(this.state.isEditorFocused||this.state.blockMenuOpen||this.state.linkMenuOpen||this.state.selectionMenuOpen)&&(this.isBlurred=!1,this.props.onFocus&&this.props.onFocus())}init(){this.extensions=this.createExtensions(),this.nodes=this.createNodes(),this.marks=this.createMarks(),this.schema=this.createSchema(),this.plugins=this.createPlugins(),this.rulePlugins=this.createRulePlugins(),this.keymaps=this.createKeymaps(),this.serializer=this.createSerializer(),this.parser=this.createParser(),this.pasteParser=this.createPasteParser(),this.inputRules=this.createInputRules(),this.nodeViews=this.createNodeViews(),this.view=this.createView(),this.commands=this.createCommands()}createExtensions(){const dictionary=this.dictionary(this.props.dictionary);return new ExtensionManager([...[new Doc,new HardBreak,new Paragraph,new Blockquote,new CodeBlock({dictionary,onShowToast:this.props.onShowToast}),new CodeFence({dictionary,onShowToast:this.props.onShowToast}),new Emoji_Emoji,new Text,new CheckboxList,new CheckboxItem,new BulletList,new Embed({embeds:this.props.embeds}),new ListItem_ListItem,new Notice({dictionary}),new Heading({dictionary,onShowToast:this.props.onShowToast,offset:this.props.headingsOffset}),new HorizontalRule,new Image_Image({dictionary,uploadImage:this.props.uploadImage,onImageUploadStart:this.props.onImageUploadStart,onImageUploadStop:this.props.onImageUploadStop,onShowToast:this.props.onShowToast}),new Table,new TableCell({onSelectTable:this.handleSelectTable,onSelectRow:this.handleSelectRow}),new TableHeadCell({onSelectColumn:this.handleSelectColumn}),new TableRow,new Bold,new Code,new Highlight,new Italic,new Placeholder,new Underline,new Link({onKeyboardShortcut:this.handleOpenLinkMenu,onClickLink:this.props.onClickLink,onClickHashtag:this.props.onClickHashtag,onHoverLink:this.props.onHoverLink}),new Strikethrough,new OrderedList,new History,new Folding,new SmartText,new TrailingNode,new PasteHandler,new Keys({onBlur:this.handleEditorBlur,onFocus:this.handleEditorFocus,onSave:this.handleSave,onSaveAndExit:this.handleSaveAndExit,onCancel:this.props.onCancel}),new BlockMenuTrigger({dictionary,onOpen:this.handleOpenBlockMenu,onClose:this.handleCloseBlockMenu}),new EmojiTrigger({onOpen:search=>{this.setState({emojiMenuOpen:!0,blockMenuSearch:search})},onClose:()=>{this.setState({emojiMenuOpen:!1})}}),new Placeholder_Placeholder({placeholder:this.props.placeholder}),new MaxLength({maxLength:this.props.maxLength})].filter((extension=>!this.props.disableExtensions||!this.props.disableExtensions.includes(extension.name))),...this.props.extensions||[]],this)}createPlugins(){return this.extensions.plugins}createRulePlugins(){return this.extensions.rulePlugins}createKeymaps(){return this.extensions.keymaps({schema:this.schema})}createInputRules(){return this.extensions.inputRules({schema:this.schema})}createNodeViews(){return this.extensions.extensions.filter((extension=>extension.component)).reduce(((nodeViews,extension)=>({...nodeViews,[extension.name]:(node,view,getPos,decorations)=>new ComponentView(extension.component,{editor:this,extension,node,view,getPos,decorations})})),{})}createCommands(){return this.extensions.commands({schema:this.schema,view:this.view})}createNodes(){return this.extensions.nodes}createMarks(){return this.extensions.marks}createSchema(){return new prosemirror_model_dist.V_({nodes:this.nodes,marks:this.marks})}createSerializer(){return this.extensions.serializer()}createParser(){return this.extensions.parser({schema:this.schema,plugins:this.rulePlugins})}createPasteParser(){return this.extensions.parser({schema:this.schema,rules:{linkify:!0},plugins:this.rulePlugins})}createState(value){const doc=this.createDocument(value||this.props.defaultValue);return dist.yy.create({schema:this.schema,doc,plugins:[...this.plugins,...this.keymaps,(0,prosemirror_dropcursor_dist.q)({color:this.theme().cursor}),(0,prosemirror_gapcursor_dist.d)(),(0,prosemirror_inputrules_dist.Hw)({rules:this.inputRules}),(0,prosemirror_keymap_dist.h)(prosemirror_commands_dist.YR)]})}createDocument(content){return this.parser.parse(content)}createView(){if(!this.element)throw new Error("createView called before ref available");const isEditingCheckbox=tr=>tr.steps.some((step=>step.slice?.content?.firstChild?.type.name===this.schema.nodes.checkbox_item.name)),self=this,view=new prosemirror_view_dist.tk(this.element,{state:this.createState(this.props.value),editable:()=>!this.props.readOnly,nodeViews:this.nodeViews,handleDOMEvents:this.props.handleDOMEvents,dispatchTransaction:function(transaction){const{state,transactions}=this.state.applyTransaction(transaction);this.updateState(state),transactions.some((tr=>tr.docChanged))&&(!self.props.readOnly||self.props.readOnlyWriteCheckboxes&&transactions.some(isEditingCheckbox))&&self.handleChange(),self.calculateDir(),self.forceUpdate()}});return view.dom.setAttribute("role","textbox"),view}scrollToAnchor(hash){if(hash)try{const element=document.querySelector(hash);element&&element.scrollIntoView({behavior:"smooth"})}catch(err){console.warn(`Attempted to scroll to invalid hash: ${hash}`,err)}}calculateDir=()=>{if(!this.element)return;const isRTL="rtl"===this.props.dir||"rtl"===getComputedStyle(this.element).direction;this.state.isRTL!==isRTL&&this.setState({isRTL})};value=()=>this.serializer.serialize(this.view.state.doc);handleChange=()=>{this.props.onChange&&this.props.onChange((()=>this.value()))};handleSave=()=>{const{onSave}=this.props;onSave&&onSave({done:!1})};handleSaveAndExit=()=>{const{onSave}=this.props;onSave&&onSave({done:!0})};handleEditorBlur=()=>{this.setState({isEditorFocused:!1})};handleEditorFocus=()=>{this.setState({isEditorFocused:!0})};handleOpenSelectionMenu=()=>{this.setState({blockMenuOpen:!1,selectionMenuOpen:!0})};handleCloseSelectionMenu=()=>{this.setState({selectionMenuOpen:!1})};handleOpenLinkMenu=()=>{this.setState({blockMenuOpen:!1,linkMenuOpen:!0})};handleCloseLinkMenu=()=>{this.setState({linkMenuOpen:!1})};handleOpenBlockMenu=search=>{this.setState({blockMenuOpen:!0,blockMenuSearch:search})};handleCloseBlockMenu=()=>{this.state.blockMenuOpen&&this.setState({blockMenuOpen:!1})};handleSelectRow=(index,state)=>{this.view.dispatch((0,prosemirror_utils_dist.pj)(index)(state.tr))};handleSelectColumn=(index,state)=>{this.view.dispatch((0,prosemirror_utils_dist.iH)(index)(state.tr))};handleSelectTable=state=>{this.view.dispatch((0,prosemirror_utils_dist.jM)(state.tr))};focusAtStart=()=>{const selection=dist.Y1.atStart(this.view.state.doc),transaction=this.view.state.tr.setSelection(selection);this.view.dispatch(transaction),this.view.focus()};focusAtEnd=()=>{const selection=dist.Y1.atEnd(this.view.state.doc),transaction=this.view.state.tr.setSelection(selection);this.view.dispatch(transaction),this.view.focus()};getHeadings=()=>{const headings=[],previouslySeen={};return this.view.state.doc.forEach((node=>{if("heading"===node.type.name){const slug=headingToSlug(node);let id=slug;previouslySeen[slug]>0&&(id=headingToSlug(node,previouslySeen[slug])),previouslySeen[slug]=void 0!==previouslySeen[slug]?previouslySeen[slug]+1:1,headings.push({title:node.textContent,level:node.attrs.level,id})}})),headings};theme=()=>this.props.theme||(this.props.dark?theme_dark:light);dictionary=memoize_default()((providedDictionary=>({...dictionary,...providedDictionary})));render(){const{dir,readOnly,readOnlyWriteCheckboxes,style,tooltip,className,onKeyDown}=this.props,{isRTL}=this.state,dictionary=this.dictionary(this.props.dictionary);return(0,jsx_runtime.jsx)(components_Flex,{onKeyDown,style,className,align:"flex-start",justify:"center",dir,column:!0,children:(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:this.theme(),children:(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(StyledEditor,{dir,rtl:isRTL,readOnly,readOnlyWriteCheckboxes,ref:ref=>this.element=ref}),!readOnly&&this.view&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(SelectionToolbar,{view:this.view,dictionary,commands:this.commands,rtl:isRTL,isTemplate:!0===this.props.template,onOpen:this.handleOpenSelectionMenu,onClose:this.handleCloseSelectionMenu,onSearchLink:this.props.onSearchLink,onClickLink:this.props.onClickLink,onCreateLink:this.props.onCreateLink,tooltip}),(0,jsx_runtime.jsx)(LinkToolbar,{view:this.view,dictionary,isActive:this.state.linkMenuOpen,onCreateLink:this.props.onCreateLink,onSearchLink:this.props.onSearchLink,onClickLink:this.props.onClickLink,onShowToast:this.props.onShowToast,onClose:this.handleCloseLinkMenu,tooltip}),(0,jsx_runtime.jsx)(components_EmojiMenu,{view:this.view,commands:this.commands,dictionary,rtl:isRTL,isActive:this.state.emojiMenuOpen,search:this.state.blockMenuSearch,onClose:()=>this.setState({emojiMenuOpen:!1})}),(0,jsx_runtime.jsx)(components_BlockMenu,{view:this.view,commands:this.commands,dictionary,rtl:isRTL,isActive:this.state.blockMenuOpen,search:this.state.blockMenuSearch,onClose:this.handleCloseBlockMenu,uploadImage:this.props.uploadImage,onLinkToolbarOpen:this.handleOpenLinkMenu,onImageUploadStart:this.props.onImageUploadStart,onImageUploadStop:this.props.onImageUploadStop,onShowToast:this.props.onShowToast,embeds:this.props.embeds})]})]})})})}}RichMarkdownEditor.displayName="RichMarkdownEditor";const src=RichMarkdownEditor;try{Schema.displayName="Schema",Schema.__docgenInfo={description:"A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark\ntype](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may\noccur in conforming documents, and provides functionality for\ncreating and deserializing such documents.\n\nWhen given, the type parameters provide the names of the nodes and\nmarks in this schema.",displayName:"Schema",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#Schema"]={docgenInfo:Schema.__docgenInfo,name:"Schema",path:"src/index.tsx#Schema"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownParser.displayName="MarkdownParser",MarkdownParser.__docgenInfo={description:"A configuration of a Markdown parser. Such a parser uses\n[markdown-it](https://github.com/markdown-it/markdown-it) to\ntokenize a file, and then runs the custom rules it is given over\nthe tokens to create a ProseMirror document tree.",displayName:"MarkdownParser",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#MarkdownParser"]={docgenInfo:MarkdownParser.__docgenInfo,name:"MarkdownParser",path:"src/index.tsx#MarkdownParser"})}catch(__react_docgen_typescript_loader_error){}try{renderToHtml.displayName="renderToHtml",renderToHtml.__docgenInfo={description:"",displayName:"renderToHtml",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#renderToHtml"]={docgenInfo:renderToHtml.__docgenInfo,name:"renderToHtml",path:"src/index.tsx#renderToHtml"})}catch(__react_docgen_typescript_loader_error){}try{RichMarkdownEditor.displayName="RichMarkdownEditor",RichMarkdownEditor.__docgenInfo={description:"",displayName:"RichMarkdownEditor",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Write something nice…"},description:"",name:"placeholder",required:!1,type:{name:"string"}},extensions:{defaultValue:{value:"[]"},description:"",name:"extensions",required:!1,type:{name:"Extension[]"}},disableExtensions:{defaultValue:null,description:"",name:"disableExtensions",required:!1,type:{name:'("placeholder" | "ordered_list" | "br" | "paragraph" | "blockquote" | "emoji" | "bullet_list" | "checkbox_list" | "list_item" | "hr" | "table" | "td" | "th" | "tr" | "strong" | ... 12 more ... | "code_block")[]'}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},readOnlyWriteCheckboxes:{defaultValue:null,description:"",name:"readOnlyWriteCheckboxes",required:!1,type:{name:"boolean"}},dictionary:{defaultValue:null,description:"",name:"dictionary",required:!1,type:{name:"Partial<{ addColumnAfter: string; addColumnBefore: string; addRowAfter: string; addRowBefore: string; alignCenter: string; alignLeft: string; alignRight: string; bulletList: string; checkboxList: string; ... 50 more ...; warningNotice: string; }>"}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},dir:{defaultValue:{value:"auto"},description:"",name:"dir",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"{ background: string; text: string; code: string; cursor: string; divider: string; toolbarBackground: string; toolbarHoverBackground: string; toolbarInput: string; toolbarItem: string; tableDivider: string; ... 63 more ...; greyDark: string; }"}},template:{defaultValue:null,description:"",name:"template",required:!1,type:{name:"boolean"}},headingsOffset:{defaultValue:null,description:"",name:"headingsOffset",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},scrollTo:{defaultValue:null,description:"",name:"scrollTo",required:!1,type:{name:"string"}},handleDOMEvents:{defaultValue:null,description:"",name:"handleDOMEvents",required:!1,type:{name:"{ [name: string]: (view: EditorView, event: Event) => boolean; }"}},uploadImage:{defaultValue:null,description:"",name:"uploadImage",required:!1,type:{name:"((file: File) => Promise<string>)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((event: { done: boolean; }) => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: () => string) => void)"}},onImageUploadStart:{defaultValue:{value:"() => {\n      // no default behavior\n    }"},description:"",name:"onImageUploadStart",required:!1,type:{name:"(() => void)"}},onImageUploadStop:{defaultValue:{value:"() => {\n      // no default behavior\n    }"},description:"",name:"onImageUploadStop",required:!1,type:{name:"(() => void)"}},onCreateLink:{defaultValue:null,description:"",name:"onCreateLink",required:!1,type:{name:"((title: string) => Promise<string>)"}},onSearchLink:{defaultValue:null,description:"",name:"onSearchLink",required:!1,type:{name:"((term: string) => Promise<SearchResult[]>)"}},onClickLink:{defaultValue:{value:'(href) => {\n      window.open(href, "_blank");\n    }'},description:"",name:"onClickLink",required:!1,type:{name:"(href: string, event: MouseEvent) => void"}},onHoverLink:{defaultValue:null,description:"",name:"onHoverLink",required:!1,type:{name:"((event: MouseEvent) => boolean)"}},onClickHashtag:{defaultValue:null,description:"",name:"onClickHashtag",required:!1,type:{name:"((tag: string, event: MouseEvent) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLDivElement>) => void)"}},embeds:{defaultValue:{value:"[]"},description:"",name:"embeds",required:!1,type:{name:"EmbedDescriptor[]"}},onShowToast:{defaultValue:null,description:"",name:"onShowToast",required:!1,type:{name:"((message: string, code: ToastType) => void)"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"typeof Component | FC<any>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#RichMarkdownEditor"]={docgenInfo:RichMarkdownEditor.__docgenInfo,name:"RichMarkdownEditor",path:"src/index.tsx#RichMarkdownEditor"})}catch(__react_docgen_typescript_loader_error){}const docSearchResults=[{title:"Hiring",subtitle:"Created by Jane",url:"/doc/hiring"},{title:"Product Roadmap",subtitle:"Created by Tom",url:"/doc/product-roadmap"},{title:"Finances",subtitle:"Created by Coley",url:"/doc/finances"},{title:"Security",subtitle:"Created by Coley",url:"/doc/security"},{title:"Super secret stuff",subtitle:"Created by Coley",url:"/doc/secret-stuff"},{title:"Supero notes",subtitle:"Created by Vanessa",url:"/doc/supero-notes"},{title:"Meeting notes",subtitle:"Created by Rob",url:"/doc/meeting-notes"}];class YoutubeEmbed extends react.Component{render(){const{attrs}=this.props,videoId=attrs.matches[1];return(0,jsx_runtime.jsx)("iframe",{className:this.props.isSelected?"ProseMirror-selectednode":"",src:`https://www.youtube.com/embed/${videoId}?modestbranding=1`})}}YoutubeEmbed.displayName="YoutubeEmbed";const stories_embeds=[{title:"YouTube",keywords:"youtube video tube google",defaultHidden:!0,icon:()=>(0,jsx_runtime.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",width:24,height:24}),matcher:url=>url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i),component:YoutubeEmbed}];function Example(props){const{body}=document;return body&&(body.style.backgroundColor=props.dark?theme_dark.background:light.background),(0,jsx_runtime.jsx)("div",{style:{padding:"1em 2em"},children:(0,jsx_runtime.jsx)(src,{onCreateLink:title=>new Promise(((resolve,reject)=>{setTimeout((()=>{if("error"!==title)return resolve(`/doc/${encodeURIComponent(title.toLowerCase())}`);reject("500 error")}),1500)})),onSearchLink:async term=>(console.log("Searched link: ",term),new Promise((resolve=>{setTimeout((()=>{resolve(docSearchResults.filter((result=>result.title.toLowerCase().includes(term.toLowerCase()))))}),500*Math.random())}))),uploadImage:file=>(console.log("File upload triggered: ",file),new Promise((resolve=>{setTimeout((()=>resolve(URL.createObjectURL(file))),1500)}))),embeds:stories_embeds,...props})})}Example.displayName="Example";try{stories.displayName="stories",stories.__docgenInfo={description:"",displayName:"stories",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.tsx#stories"]={docgenInfo:stories.__docgenInfo,name:"stories",path:"src/stories/index.tsx#stories"})}catch(__react_docgen_typescript_loader_error){}var debounce=__webpack_require__("./node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce);const index_stories={title:"Editor",component:Example,argTypes:{value:{control:"text"},readOnly:{control:"boolean"},onSave:{action:"save"},onCancel:{action:"cancel"},onClickHashtag:{action:"hashtag clicked"},onClickLink:{action:"link clicked"},onHoverLink:{action:"link hovered"},onShowToast:{action:"toast"},onFocus:{action:"focused"},onBlur:{action:"blurred"},disableExtensions:{control:"array"}},args:{disableExtensions:[]}},Template=args=>(0,jsx_runtime.jsx)(Example,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={defaultValue:"# Welcome\n\nJust an easy to use **Markdown** editor with `slash commands`"};const index_stories_Emoji=Template.bind({});index_stories_Emoji.args={defaultValue:"# Emoji\n\n:1st_place_medal:\n"};const TemplateDoc=Template.bind({});TemplateDoc.args={template:!0,defaultValue:'# Template\n\nThis document acts as a "template document", it\'s possible to insert placeholder marks that can be filled in later by others in a non-template document.\n\n\\\n!!This is a template placeholder!!'};const Headings=Template.bind({});Headings.args={defaultValue:"# Heading 1\n\n## Heading 2\n\n### Heading 3\n\n#### Heading 4"};const Lists=Template.bind({});Lists.args={defaultValue:"# Lists\n\n- An\n- Unordered\n- List\n\n\\\n1. An\n1. Ordered\n1. List"};const Blockquotes=Template.bind({});Blockquotes.args={defaultValue:"# Block quotes\n\n> Quotes are another way to callout text within a larger document\n> They are often used to incorrectly attribute words to historical figures"};const Tables=Template.bind({});Tables.args={defaultValue:"# Tables\n\nSimple tables with alignment and row/col editing are supported, they can be inserted from the slash menu\n\n| Editor      | Rank | React | Collaborative |\n|-------------|------|-------|--------------:|\n| Prosemirror | A    |   No  |           Yes |\n| Slate       | B    |  Yes  |            No |\n| CKEdit      | C    |   No  |           Yes |\n"};const Marks=Template.bind({});Marks.args={defaultValue:"This document shows the variety of marks available, most can be accessed through the formatting menu by selecting text or by typing out the Markdown manually.\n\n\\\n**bold**\n_italic_\n~~strikethrough~~\n__underline__\n==highlighted==\n`inline code`\n!!placeholder!!\n[a link](http://thoughtback.com)\n"};const index_stories_Code=Template.bind({});index_stories_Code.args={defaultValue:'# Code\n\n```html\n<html>\n  <p class="content">Simple code blocks are supported</html>\n</html>\n```\n'};const Notices=Template.bind({});Notices.args={defaultValue:"# Notices\n\nThere are three types of editable notice blocks that can be used to callout information:\n\n\\\n:::info\nInformational\n:::\n\n:::tip\nTip\n:::\n\n:::warning\nWarning\n:::\n"};const ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,defaultValue:"# Read Only\n  \nThe content of this editor cannot be edited"};const index_stories_MaxLength=Template.bind({});index_stories_MaxLength.args={maxLength:100,defaultValue:"This document has a max length of 100 characters. Once reached typing is prevented"};const Checkboxes=Template.bind({});Checkboxes.args={defaultValue:"\n- [x] done\n- [ ] todo"};const ReadOnlyWriteCheckboxes=Template.bind({});ReadOnlyWriteCheckboxes.args={readOnly:!0,readOnlyWriteCheckboxes:!0,defaultValue:"A read-only editor with the exception that checkboxes remain toggleable, like GitHub\n\n\\\n- [x] done\n- [ ] todo"};const Persisted=Template.bind({});Persisted.args={defaultValue:localStorage.getItem("saved")||"# Persisted\n  \nThe contents of this editor are persisted to local storage on change (edit and reload)",onChange:debounce_default()((value=>{const text=value();localStorage.setItem("saved",text)}),250)};const index_stories_Placeholder=Template.bind({});index_stories_Placeholder.args={defaultValue:"",placeholder:"This is a custom placeholder…"};const Images=Template.bind({});Images.args={defaultValue:"# Images\n![A caption](https://upload.wikimedia.org/wikipedia/commons/0/06/Davide-ragusa-gcDwzUGuUoI-unsplash.jpg)"};const Focused=Template.bind({});Focused.args={autoFocus:!0,defaultValue:"# Focused\n  \n  This editor starts in focus"};const Dark=Template.bind({});Dark.args={dark:!0,defaultValue:"# Dark\n\nThere's a customizable dark theme too"};const RTL=Template.bind({});RTL.args={dir:"rtl",defaultValue:"# خوش آمدید\n\nمتن نمونه برای نمایش پشتیبانی از زبان‌های RTL نظیر فارسی، عربی، عبری و ...\n\n\\\n- [x] آیتم اول\n- [ ] آیتم دوم"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Default.parameters?.docs?.source}}},index_stories_Emoji.parameters={...index_stories_Emoji.parameters,docs:{...index_stories_Emoji.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...index_stories_Emoji.parameters?.docs?.source}}},TemplateDoc.parameters={...TemplateDoc.parameters,docs:{...TemplateDoc.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...TemplateDoc.parameters?.docs?.source}}},Headings.parameters={...Headings.parameters,docs:{...Headings.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Headings.parameters?.docs?.source}}},Lists.parameters={...Lists.parameters,docs:{...Lists.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Lists.parameters?.docs?.source}}},Blockquotes.parameters={...Blockquotes.parameters,docs:{...Blockquotes.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Blockquotes.parameters?.docs?.source}}},Tables.parameters={...Tables.parameters,docs:{...Tables.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Tables.parameters?.docs?.source}}},Marks.parameters={...Marks.parameters,docs:{...Marks.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Marks.parameters?.docs?.source}}},index_stories_Code.parameters={...index_stories_Code.parameters,docs:{...index_stories_Code.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...index_stories_Code.parameters?.docs?.source}}},Notices.parameters={...Notices.parameters,docs:{...Notices.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Notices.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...ReadOnly.parameters?.docs?.source}}},index_stories_MaxLength.parameters={...index_stories_MaxLength.parameters,docs:{...index_stories_MaxLength.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...index_stories_MaxLength.parameters?.docs?.source}}},Checkboxes.parameters={...Checkboxes.parameters,docs:{...Checkboxes.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Checkboxes.parameters?.docs?.source}}},ReadOnlyWriteCheckboxes.parameters={...ReadOnlyWriteCheckboxes.parameters,docs:{...ReadOnlyWriteCheckboxes.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...ReadOnlyWriteCheckboxes.parameters?.docs?.source}}},Persisted.parameters={...Persisted.parameters,docs:{...Persisted.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Persisted.parameters?.docs?.source}}},index_stories_Placeholder.parameters={...index_stories_Placeholder.parameters,docs:{...index_stories_Placeholder.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...index_stories_Placeholder.parameters?.docs?.source}}},Images.parameters={...Images.parameters,docs:{...Images.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Images.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Focused.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...Dark.parameters?.docs?.source}}},RTL.parameters={...RTL.parameters,docs:{...RTL.parameters?.docs,source:{originalSource:"args => <Editor {...args} />",...RTL.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Emoji","TemplateDoc","Headings","Lists","Blockquotes","Tables","Marks","Code","Notices","ReadOnly","MaxLength","Checkboxes","ReadOnlyWriteCheckboxes","Persisted","Placeholder","Images","Focused","Dark","RTL"]}}]);
//# sourceMappingURL=stories-index-stories.f56dafe7.iframe.bundle.js.map