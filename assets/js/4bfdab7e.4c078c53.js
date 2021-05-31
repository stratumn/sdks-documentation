(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(92)),l=a(95),c=a(96),o={title:"\ud83d\ude80 Usage"},s={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"\ud83d\ude80 Usage",description:"Creating a new trace",source:"@site/docs/usage.mdx",slug:"/usage",permalink:"/sdks-documentation/docs/usage",editUrl:"https://github.com/stratumn/sdks-documentation/blob/master/docs/usage.mdx",version:"current",sidebar:"docs",previous:{title:"\ud83d\udd27  Configuration",permalink:"/sdks-documentation/docs/configuration"},next:{title:"\ud83d\udcbe Handling files",permalink:"/sdks-documentation/docs/handling-files"}},b=[{value:"Creating a new trace",id:"creating-a-new-trace",children:[]},{value:"Appending a link to an existing trace",id:"appending-a-link-to-an-existing-trace",children:[]},{value:"Trace stages",id:"trace-stages",children:[]},{value:"Retrieving traces",id:"retrieving-traces",children:[]},{value:"Searching for traces",id:"searching-for-traces",children:[]},{value:"Pagination",id:"pagination",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"creating-a-new-trace"},"Creating a new trace"),Object(r.b)("p",null,"You can create a new trace this way:"),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'let myFirstTrace = await sdk.newTrace({\n  actionKey: YOUR_CONFIG.actionNewShipment,\n  data: {\n    operation: "new shipment XYZ for ABC",\n    weight: 123,\n    valid: true,\n    operators: ["Ludovic K.", "Bernard Q."],\n  },\n});\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Note that the return type of ",Object(r.b)("inlineCode",{parentName:"li"},"sdk.newTrace")," is ",Object(r.b)("inlineCode",{parentName:"li"},"Promise<TraceState>")," since this operation is asynchronous. You must ",Object(r.b)("inlineCode",{parentName:"li"},"await")," for the response in order to effectively use it."))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'IDictionary<string, object> data = new Dictionary<string, object> {\n  ["weight"] = "123",\n  ["valid"] = true,\n  ["operators"] = new string[] { "1", "2" },\n  ["operation"] = "my new operation 1"\n};\nNewTraceInput<object> input = new NewTraceInput<object>(YOUR_CONFIG.actionKey, data);\nTraceState<object, object> myFirstTrace = await sdk.NewTraceAsync<object>(input);\n'))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},' Map<String, Object> data = new HashMap<String, Object>();\n data.put("weight", "123");\n data.put("valid", true);\n data.put("operators", new String[]{"1", "2" });\n data.put("operation", "my new operation 1");\n NewTraceInput<Object> newTraceInput = new\n NewTraceInput<Object>(YOUR_CONFIG.actionKey, data);\n TraceState<Object, Object> state = sdk.newTrace(newTraceInput);\n')))),Object(r.b)("p",null,"You must provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"actionKey"),": a valid action key that exists in the targeted workflow,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": the data object corresponding to the action being done.")),Object(r.b)("p",null,'The Sdk will return an object corresponding to the "state" of your new trace. This state exposes the following fields:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id (uuid format) which uniquely identify the newly created trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headLink"),": the link that was last appended to the trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updatedAt"),": the ",Object(r.b)("inlineCode",{parentName:"li"},"Date")," at which the trace was last updated,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updatedBy"),": the id of the user who last updated the trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": the aggregated data modelling the state the trace is in.")),Object(r.b)("p",null,"Notes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"data")," object argument must be valid against the JSON schema of the form you are using, otherwise Trace will throw a validation error.")),Object(r.b)("h3",{id:"appending-a-link-to-an-existing-trace"},"Appending a link to an existing trace"),Object(r.b)("p",null,"Assuming you have access to the head link of the trace you wish to append a link to (in this example it is ",Object(r.b)("inlineCode",{parentName:"p"},"myFirstTrace.headLink"),"), you can proceed this way:"),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'await sdk.appendLink({\n  prevLink: myFirstTrace.headLink,\n  actionKey: YOUR_CONFIG.actionDeparture,\n  data: {\n    operation: "XYZ shipment departed port for ABC",\n    destination: "ABC",\n    customsCheck: true,\n    eta: "2019-07-02T12:00:00.000Z",\n  },\n});\n')),Object(r.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.appendLink({\n  traceId: someTraceId,\n  actionKey: YOUR_CONFIG.actionDeparture,\n  data: {\n    ...\n  }\n});\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"AppendLinkInput<object> appLinkInput = new AppendLinkInput<object>(YOUR_CONFIG.actionKey, data, prevLink);\nTraceState<object, object> state = await GetSdk().AppendLinkAsync(appLinkInput);\n")),Object(r.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"AppendLinkInput<object> appLinkInput = new AppendLinkInput<object>(YOUR_CONFIG.actionKey, data, traceId);\nTraceState<object, object> state = await GetSdk().AppendLinkAsync(appLinkInput);\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"AppendLinkInput<Object> appLinkInput = new AppendLinkInput<Object>(YOUR_CONFIG.actionKey, data, prevLink);\nTraceState<Object, Object> state =   sdk.appendLink(appLinkInput);\n\n")),Object(r.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"AppendLinkInput<Object> appLinkInput = new AppendLinkInput<Object>(YOUR_CONFIG.actionKey, data, traceId);\nTraceState<Object, Object> state =   sdk.appendLink(appLinkInput);\n")))),Object(r.b)("p",null,"You must provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"actionKey"),": a valid action key that exists in the targeted workflow,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": the data object corresponding to the action being done,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevLink")," or ",Object(r.b)("inlineCode",{parentName:"li"},"traceId"),".")),Object(r.b)("p",null,"The Sdk will return the new state object of the trace. The shape of this object is the same as explained ",Object(r.b)("a",{parentName:"p",href:"#creating-a-new-trace"},"previously"),"."),Object(r.b)("p",null,"Notes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"data")," object argument must be valid against the JSON schema of the form you are using, otherwise Trace will throw a validation error.")),Object(r.b)("h3",{id:"trace-stages"},"Trace stages"),Object(r.b)("p",null,"Your group in the workflow is composed of multiple stages. There are always 3 default stages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Incoming"),": this stage lists all the traces that are being transferred to your group (push or pull),"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Backlog"),": this stage lists all the traces that have been transferred to your group and accepted,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Outgoing"),": this stage lists all the traces that are being transferred to another group (push or pull).")),Object(r.b)("p",null,"The other stages are called ",Object(r.b)("inlineCode",{parentName:"p"},"Attestation")," stages. They compose the logic of your group in the context of this workflow."),Object(r.b)("p",null,"Notes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When someone pushes a trace to your group, it will appear in your ",Object(r.b)("inlineCode",{parentName:"li"},"Incoming")," stage and their ",Object(r.b)("inlineCode",{parentName:"li"},"Outgoing")," stage."),Object(r.b)("li",{parentName:"ul"},"When you accept a transfer, the trace will move to your ",Object(r.b)("inlineCode",{parentName:"li"},"Backlog")," stage."),Object(r.b)("li",{parentName:"ul"},"When you reject a transfer, the trace will move back to its previous ",Object(r.b)("inlineCode",{parentName:"li"},"Attestation")," stage and disappear from the ",Object(r.b)("inlineCode",{parentName:"li"},"Outgoing")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Incoming")," stages it was in.")),Object(r.b)("h3",{id:"retrieving-traces"},"Retrieving traces"),Object(r.b)("p",null,"When all you have is the id of a trace, you can get its state by calling:"),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getTraceState({\n  traceId,\n});\n")),Object(r.b)("p",null,"The argument:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(r.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getTraceDetails({\n  traceId,\n  first: 5,\n});\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"GetTraceStateInput input = new GetTraceStateInput(traceId);\nTraceState<object, object> state = await sdk.GetTraceStateAsync<object>(input);\n")),Object(r.b)("p",null,"The argument:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(r.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"GetTraceDetailsInput input = new GetTraceDetailsInput(traceId, first, after, last, before);\nTraceDetails<object> details = await sdk.GetTraceDetailsAsync<object>(input);\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"GetTraceStateInput input = new GetTraceStateInput(traceId);\nTraceState<Object, Object> state = sdk.getTraceState<Object>(input);\n")),Object(r.b)("p",null,"The argument:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(r.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"GetTraceDetailsInput input = new GetTraceDetailsInput(traceId, first, after, last, before);\nTraceDetails<Object> details =  sdk.getTraceDetails<Object>(input);\n")))),Object(r.b)("p",null,"In this case, we are asking for the first 5 links (see ",Object(r.b)("a",{parentName:"p",href:"#pagination"},"pagination"),")."),Object(r.b)("p",null,"Arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(r.b)("p",null,"For more explanation on how the pagination work, go to the dedication ",Object(r.b)("a",{parentName:"p",href:"#pagination"},"section"),"."),Object(r.b)("p",null,"The Sdk will return an object with the details about the trace you asked for. This object exposes the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"links"),": the paginated array of links,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"totalCount"),": the total number of links in the trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"info"),": a pagination object (more on this ",Object(r.b)("a",{parentName:"li",href:"#pagination"},"here"),").")),Object(r.b)("p",null,"To retrieve all the traces of a given stage, you can:"),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getIncomingTraces({\n  first: 10,\n});\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getOutgoingTraces();\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getBacklogTraces();\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<object, object> state = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<object, object> state = await sdk.GetOutgoingTracesAsync<object>(paginationInfo);\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"var sdk = GetSdk();\nPaginationInfo info = new PaginationInfo(first, after, last, before);\nawait sdk.GetBacklogTracesAsync<object>(info);\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state =  sdk.getIncomingTraces<Object>(paginationInfo);\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"}," Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state =  sdk.getOutgoingTraces<Object>(paginationInfo);\n")),Object(r.b)("p",null,"Or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"var sdk = GetSdk();\nPaginationInfo info = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state = sdk.GetBacklogTraces<Object>(info);\n")))),Object(r.b)("p",null,"Arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(r.b)("p",null,"For more explanation on how the pagination work, go to the dedication ",Object(r.b)("a",{parentName:"p",href:"#pagination"},"section"),"."),Object(r.b)("p",null,"The Sdk will return an object with the traces currently in the given stage. This object exposes the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces"),": the paginated array of traces (trace states actually),"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"totalCount"),": the total number of traces in the trace,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"info"),": a pagination object (more on this ",Object(r.b)("a",{parentName:"li",href:"#pagination"},"here"),").")),Object(r.b)("h3",{id:"searching-for-traces"},"Searching for traces"),Object(r.b)("p",null,"Traces can be searched by tag. So in order to search you must first add a tag to a trace.\nTags are not unique, so multiple traces can have the same tag. Traces can also have multiple tags."),Object(r.b)("p",null,"\u26a0\ufe0f All traces containing any one of the provided tags will be returned."),Object(r.b)("p",null,"The tag trace arguments look like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace to add tags too"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tags"),": array of tags to add to the trace")),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'await sdk.addTagsToTrace({\n  traceId: "191516ec-5f8c-4757-9061-8c7ab06cf0a0",\n  tags: ["accepted", "todo"],\n});\n\n// Now that there is a trace with a tag we can search for it.\n// In order to search for any of the tags provided, use the `overlaps` parameter :\n\nawait sdk.searchTraces(\n  {\n    tags: {\n      overlaps: ["todo", "other tag"],\n    },\n  },\n  {\n    first: 1,\n  }\n);\n\n// If you want to search for all tags provided, use the `contains` parameter :\nawait sdk.searchTraces(\n  {\n    tags: {\n      contains: ["todo", "accepted"],\n    },\n  },\n  {\n    first: 1,\n  }\n);\n'))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'String traceId = "191516ec-5f8c-4757-9061-8c7ab06cf0a0"\n// Add a tag to a trace\nAddTagsToTraceInput input = new AddTagsToTraceInput(traceId, new string[] { "todo", "other tag" });\nTraceState<Object, Object> state = await sdk.AddTagsToTraceAsync<Object>(input);\n\n// Now that there is a trace with a tag we can search for it.\nList<String> tags = new List<string>();\ntags.Add("todo");\ntags.Add("other tag");\n\nSearchTracesFilter f = new SearchTracesFilter();\nf.Tags = tags;\n\n// By default, the filter mode is set to "overlaps", which checks for any matching tag\nf.SearchType = SearchTracesFilter.SEARCH_TYPE.TAGS_OVERLAPS;\n\n// The "contains" filter is available to check for traces that match all provided tags\nf.SearchType = SearchTracesFilter.SEARCH_TYPE.TAGS_CONTAINS;\nTracesState<Object, Object> res = await sdk.SearchTracesAsync<Object>(f, new PaginationInfo());\n'))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'String traceId = "191516ec-5f8c-4757-9061-8c7ab06cf0a0";\n\n// Add a tag to a trace\nAddTagsToTraceInput input = new AddTagsToTraceInput();\ninput.setTraceId(traceId);\ninput.setTags(new String[] { "todo", "other tag" });\n\nTraceState<Object, Object> t = getSdk().addTagsToTrace(input);\n\n// Now that there is a trace with a tag we can search for it.\n\nList<String> tags = new ArrayList<String>();\ntags.add("todo");\ntags.add("other tag");\nSearchTracesFilter f = new SearchTracesFilter();\nf.setTags(tags);\n// By default, the filter mode is set to "overlaps", which checks for any matching tag\nf.setSearchType(SearchTracesFilter.SEARCH_TYPE.TAGS_OVERLAPS);\n\n// The "contains" filter is available to check for traces that match all provided tags\nf.setSearchType(SearchTracesFilter.SEARCH_TYPE.TAGS_CONTAINS);\nTracesState<Object, Object> res = sdk.searchTraces(f, new PaginationInfo());\n')))),Object(r.b)("p",null,"Arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter"),": specify an array of tags to filter on. All traces containing any one of the provided tags will be returned."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paginationInfo"),": pagination arguments, in case there are multiple traces with the provided tags. More info at ",Object(r.b)("a",{parentName:"li",href:"#pagination"},"pagination"))),Object(r.b)("h3",{id:"pagination"},"Pagination"),Object(r.b)("p",null,"When a method returns an array of elements (traces, links, etc..), it will be paginated. It means that you can provide arguments to specify how many elements to retrieve from which point in the full list. The pagination arguments will always look like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(r.b)("p",null,"You must use ",Object(r.b)("inlineCode",{parentName:"p"},"first")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},"after")," together, ",Object(r.b)("inlineCode",{parentName:"p"},"last")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},"before")," together. If you try to retrieve the ",Object(r.b)("inlineCode",{parentName:"p"},"first=n before=xyz")," the Sdk will throw an error."),Object(r.b)("p",null,"In the result object, you will have the ",Object(r.b)("inlineCode",{parentName:"p"},"totalCount")," and an ",Object(r.b)("inlineCode",{parentName:"p"},"info")," object that has the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hasNext"),": a flag telling if there is a next series of elements to retrieve after this one,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hasPrevious"),": a flag telling if there is a previous series of elements to retrieve before this one,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"startCursor"),": (optional) a cursor (string) representing the position of the first element in this series,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"endCursor"),": (optional) a cursor (string) representing the position of the last element in this series.")),Object(r.b)("p",null,"Let's look at a pagination example. We start by retrieving (and consuming) the first 10 incoming traces:"),Object(r.b)(l.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let results = await sdk.getIncomingTraces({\n  first: 10,\n});\n\nconsume(results.traces);\n")),Object(r.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"if (results.info.hasNext) {\n  results = await sdk.getIncomingTraces({\n    first: 10,\n    after: results.info.endCursor,\n  });\n  consume(results.traces);\n}\n")),Object(r.b)("p",null,"In the case there are more traces to retrieve (",Object(r.b)("inlineCode",{parentName:"p"},"hasNext === true"),"), we call the ",Object(r.b)("inlineCode",{parentName:"p"},"getIncomingTraces")," method again setting the ",Object(r.b)("inlineCode",{parentName:"p"},"after")," argument to the ",Object(r.b)("inlineCode",{parentName:"p"},"endCursor"),". We keep doing this until ",Object(r.b)("inlineCode",{parentName:"p"},"hasNext === false"),".\nPutting all this together, we can synthetize this in a loop:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let results;\ndo {\n  results = await sdk.getIncomingTraces({\n    first: 10,\n    after: results.info.endCursor,\n  });\n  consume(results.traces);\n} while (results.info.hasNext);\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(10, null, null, null);\nTracesState<object, object> results = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n")),Object(r.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"if (results.Info.HasNext)\n{\n  PaginationInfo paginationInfo = new PaginationInfo(10, results.Info.EndCursor, null, null);\n  TracesState<object, object> results = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n}\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(10, null, null, null);\nTracesState<Object, Object> results =  sdk.getIncomingTraces<Object>(paginationInfo);\n")),Object(r.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"if (results.Info.HasNext) {\nPaginationInfo paginationInfo = new PaginationInfo(10, results.Info.EndCursor, null, null);\nTracesState<Object, Object> results =  sdk.getIncomingTraces<Object>(paginationInfo);\n}\n")))))}u.isMDXComponent=!0}}]);