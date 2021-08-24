(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(93)),c=a(96),l=a(97),o=["components"],s={title:"\ud83d\ude80 Usage"},b={unversionedId:"configuration/usage",id:"configuration/usage",isDocsHomePage:!1,title:"\ud83d\ude80 Usage",description:"Creating a new trace",source:"@site/docs/configuration/usage.mdx",slug:"/configuration/usage",permalink:"/sdks-documentation/docs/configuration/usage",editUrl:"https://github.com/stratumn/sdks-documentation/blob/master/docs/configuration/usage.mdx",version:"current",sidebar:"configuration",previous:{title:"\ud83d\udd27  Configuration",permalink:"/sdks-documentation/docs/configuration/configuration"},next:{title:"\ud83d\udcbe Handling files",permalink:"/sdks-documentation/docs/configuration/handling-files"}},p=[{value:"Creating a new trace",id:"creating-a-new-trace",children:[]},{value:"Appending a link to an existing trace",id:"appending-a-link-to-an-existing-trace",children:[]},{value:"Retrieving traces",id:"retrieving-traces",children:[]},{value:"Searching for traces",id:"searching-for-traces",children:[]},{value:"Pagination",id:"pagination",children:[]}],u={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"creating-a-new-trace"},"Creating a new trace"),Object(i.b)("p",null,"You can create a new trace this way:"),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'let myFirstTrace = await sdk.newTrace({\n  actionKey: YOUR_CONFIG.actionNewShipment,\n  data: {\n    operation: "new shipment XYZ for ABC",\n    weight: 123,\n    valid: true,\n    operators: ["Ludovic K.", "Bernard Q."],\n  },\n});\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Note that the return type of ",Object(i.b)("inlineCode",{parentName:"li"},"sdk.newTrace")," is ",Object(i.b)("inlineCode",{parentName:"li"},"Promise<TraceState>")," since this operation is asynchronous. You must ",Object(i.b)("inlineCode",{parentName:"li"},"await")," for the response in order to effectively use it."))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'IDictionary<string, object> data = new Dictionary<string, object> {\n  ["weight"] = "123",\n  ["valid"] = true,\n  ["operators"] = new string[] { "1", "2" },\n  ["operation"] = "my new operation 1"\n};\nNewTraceInput<object> input = new NewTraceInput<object>(YOUR_CONFIG.actionKey, data);\nTraceState<object, object> myFirstTrace = await sdk.NewTraceAsync<object>(input);\n'))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},' Map<String, Object> data = new HashMap<String, Object>();\n data.put("weight", "123");\n data.put("valid", true);\n data.put("operators", new String[]{"1", "2" });\n data.put("operation", "my new operation 1");\n NewTraceInput<Object> newTraceInput = new\n NewTraceInput<Object>(YOUR_CONFIG.actionKey, data);\n TraceState<Object, Object> state = sdk.newTrace(newTraceInput);\n')))),Object(i.b)("p",null,"You must provide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"actionKey"),": a valid action key that exists in the targeted workflow,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": the data object corresponding to the action being done.")),Object(i.b)("p",null,'The Sdk will return an object corresponding to the "state" of your new trace. This state exposes the following fields:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id (uuid format) which uniquely identify the newly created trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headLink"),": the link that was last appended to the trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedAt"),": the ",Object(i.b)("inlineCode",{parentName:"li"},"Date")," at which the trace was last updated,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedBy"),": the id of the user who last updated the trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": the aggregated data modelling the state the trace is in.")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"data")," object argument must be valid against the JSON schema of the form you are using, otherwise Trace will throw a validation error.")),Object(i.b)("h3",{id:"appending-a-link-to-an-existing-trace"},"Appending a link to an existing trace"),Object(i.b)("p",null,"Assuming you have access to the head link of the trace you wish to append a link to (in this example it is ",Object(i.b)("inlineCode",{parentName:"p"},"myFirstTrace.headLink"),"), you can proceed this way:"),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'await sdk.appendLink({\n  prevLink: myFirstTrace.headLink,\n  actionKey: YOUR_CONFIG.actionDeparture,\n  data: {\n    operation: "XYZ shipment departed port for ABC",\n    destination: "ABC",\n    customsCheck: true,\n    eta: "2019-07-02T12:00:00.000Z",\n  },\n});\n')),Object(i.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.appendLink({\n  traceId: someTraceId,\n  actionKey: YOUR_CONFIG.actionDeparture,\n  data: {\n    ...\n  }\n});\n"))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"AppendLinkInput<object> appLinkInput = new AppendLinkInput<object>(YOUR_CONFIG.actionKey, data, prevLink);\nTraceState<object, object> state = await GetSdk().AppendLinkAsync(appLinkInput);\n")),Object(i.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"AppendLinkInput<object> appLinkInput = new AppendLinkInput<object>(YOUR_CONFIG.actionKey, data, traceId);\nTraceState<object, object> state = await GetSdk().AppendLinkAsync(appLinkInput);\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"AppendLinkInput<Object> appLinkInput = new AppendLinkInput<Object>(YOUR_CONFIG.actionKey, data, prevLink);\nTraceState<Object, Object> state =   sdk.appendLink(appLinkInput);\n\n")),Object(i.b)("p",null,"If you don't have access to the head link, you can also provide the trace id:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"AppendLinkInput<Object> appLinkInput = new AppendLinkInput<Object>(YOUR_CONFIG.actionKey, data, traceId);\nTraceState<Object, Object> state =   sdk.appendLink(appLinkInput);\n")))),Object(i.b)("p",null,"You must provide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"actionKey"),": a valid action key that exists in the targeted workflow,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": the data object corresponding to the action being done,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prevLink")," or ",Object(i.b)("inlineCode",{parentName:"li"},"traceId"),".")),Object(i.b)("p",null,"The Sdk will return the new state object of the trace. The shape of this object is the same as explained ",Object(i.b)("a",{parentName:"p",href:"#creating-a-new-trace"},"previously"),"."),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"data")," object argument must be valid against the JSON schema of the form you are using, otherwise Trace will throw a validation error.")),Object(i.b)("h3",{id:"retrieving-traces"},"Retrieving traces"),Object(i.b)("p",null,"When all you have is the id of a trace, you can get its state by calling:"),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getTraceState({\n  traceId,\n});\n")),Object(i.b)("p",null,"The argument:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(i.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getTraceDetails({\n  traceId,\n  first: 5,\n});\n"))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"GetTraceStateInput input = new GetTraceStateInput(traceId);\nTraceState<object, object> state = await sdk.GetTraceStateAsync<object>(input);\n")),Object(i.b)("p",null,"The argument:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(i.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"GetTraceDetailsInput input = new GetTraceDetailsInput(traceId, first, after, last, before);\nTraceDetails<object> details = await sdk.GetTraceDetailsAsync<object>(input);\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"GetTraceStateInput input = new GetTraceStateInput(traceId);\nTraceState<Object, Object> state = sdk.getTraceState<Object>(input);\n")),Object(i.b)("p",null,"The argument:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace")),Object(i.b)("p",null,"You can also retrieve the links of a given trace this way:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"GetTraceDetailsInput input = new GetTraceDetailsInput(traceId, first, after, last, before);\nTraceDetails<Object> details =  sdk.getTraceDetails<Object>(input);\n")))),Object(i.b)("p",null,"In this case, we are asking for the first 5 links (see ",Object(i.b)("a",{parentName:"p",href:"#pagination"},"pagination"),")."),Object(i.b)("p",null,"Arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(i.b)("p",null,"For more explanation on how the pagination work, go to the dedication ",Object(i.b)("a",{parentName:"p",href:"#pagination"},"section"),"."),Object(i.b)("p",null,"The Sdk will return an object with the details about the trace you asked for. This object exposes the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"links"),": the paginated array of links,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"totalCount"),": the total number of links in the trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"info"),": a pagination object (more on this ",Object(i.b)("a",{parentName:"li",href:"#pagination"},"here"),").")),Object(i.b)("p",null,"To retrieve all the traces of a given stage, you can:"),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getIncomingTraces({\n  first: 10,\n});\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getOutgoingTraces();\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await sdk.getBacklogTraces();\n"))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<object, object> state = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<object, object> state = await sdk.GetOutgoingTracesAsync<object>(paginationInfo);\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"var sdk = GetSdk();\nPaginationInfo info = new PaginationInfo(first, after, last, before);\nawait sdk.GetBacklogTracesAsync<object>(info);\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state =  sdk.getIncomingTraces<Object>(paginationInfo);\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"}," Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state =  sdk.getOutgoingTraces<Object>(paginationInfo);\n")),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"var sdk = GetSdk();\nPaginationInfo info = new PaginationInfo(first, after, last, before);\nTracesState<Object, Object> state = sdk.GetBacklogTraces<Object>(info);\n")))),Object(i.b)("p",null,"Arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(i.b)("p",null,"For more explanation on how the pagination work, go to the dedication ",Object(i.b)("a",{parentName:"p",href:"#pagination"},"section"),"."),Object(i.b)("p",null,"The Sdk will return an object with the traces currently in the given stage. This object exposes the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traces"),": the paginated array of traces (trace states actually),"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"totalCount"),": the total number of traces in the trace,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"info"),": a pagination object (more on this ",Object(i.b)("a",{parentName:"li",href:"#pagination"},"here"),").")),Object(i.b)("h3",{id:"searching-for-traces"},"Searching for traces"),Object(i.b)("p",null,"Traces can be searched by tag. So in order to search you must first add a tag to a trace.\nTags are not unique, so multiple traces can have the same tag. Traces can also have multiple tags."),Object(i.b)("p",null,"\u26a0\ufe0f All traces containing any one of the provided tags will be returned."),Object(i.b)("p",null,"The tag trace arguments look like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"traceId"),": the id of the trace to add tags too"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tags"),": array of tags to add to the trace")),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'await sdk.addTagsToTrace({\n  traceId: "191516ec-5f8c-4757-9061-8c7ab06cf0a0",\n  tags: ["accepted", "todo"],\n});\n\n// Now that there is a trace with a tag we can search for it.\n// In order to search for any of the tags provided, use the `overlaps` parameter :\n\nawait sdk.searchTraces(\n  {\n    tags: {\n      overlaps: ["todo", "other tag"],\n    },\n  },\n  {\n    first: 1,\n  }\n);\n\n// If you want to search for all tags provided, use the `contains` parameter :\nawait sdk.searchTraces(\n  {\n    tags: {\n      contains: ["todo", "accepted"],\n    },\n  },\n  {\n    first: 1,\n  }\n);\n'))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'String traceId = "191516ec-5f8c-4757-9061-8c7ab06cf0a0"\n// Add a tag to a trace\nAddTagsToTraceInput input = new AddTagsToTraceInput(traceId, new string[] { "todo", "other tag" });\nTraceState<Object, Object> state = await sdk.AddTagsToTraceAsync<Object>(input);\n\n// Now that there is a trace with a tag we can search for it.\nList<String> tags = new List<string>();\ntags.Add("todo");\ntags.Add("other tag");\n\nSearchTracesFilter f = new SearchTracesFilter();\nf.Tags = tags;\n\n// By default, the filter mode is set to "overlaps", which checks for any matching tag\nf.SearchType = SearchTracesFilter.SEARCH_TYPE.TAGS_OVERLAPS;\n\n// The "contains" filter is available to check for traces that match all provided tags\nf.SearchType = SearchTracesFilter.SEARCH_TYPE.TAGS_CONTAINS;\nTracesState<Object, Object> res = await sdk.SearchTracesAsync<Object>(f, new PaginationInfo());\n'))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'String traceId = "191516ec-5f8c-4757-9061-8c7ab06cf0a0";\n\n// Add a tag to a trace\nAddTagsToTraceInput input = new AddTagsToTraceInput();\ninput.setTraceId(traceId);\ninput.setTags(new String[] { "todo", "other tag" });\n\nTraceState<Object, Object> t = getSdk().addTagsToTrace(input);\n\n// Now that there is a trace with a tag we can search for it.\n\nList<String> tags = new ArrayList<String>();\ntags.add("todo");\ntags.add("other tag");\nSearchTracesFilter f = new SearchTracesFilter();\nf.setTags(tags);\n// By default, the filter mode is set to "overlaps", which checks for any matching tag\nf.setSearchType(SearchTracesFilter.SEARCH_TYPE.TAGS_OVERLAPS);\n\n// The "contains" filter is available to check for traces that match all provided tags\nf.setSearchType(SearchTracesFilter.SEARCH_TYPE.TAGS_CONTAINS);\nTracesState<Object, Object> res = sdk.searchTraces(f, new PaginationInfo());\n')))),Object(i.b)("p",null,"Arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filter"),": specify an array of tags to filter on. All traces containing any one of the provided tags will be returned."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paginationInfo"),": pagination arguments, in case there are multiple traces with the provided tags. More info at ",Object(i.b)("a",{parentName:"li",href:"#pagination"},"pagination"))),Object(i.b)("h3",{id:"pagination"},"Pagination"),Object(i.b)("p",null,"When a method returns an array of elements (traces, links, etc..), it will be paginated. It means that you can provide arguments to specify how many elements to retrieve from which point in the full list. The pagination arguments will always look like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first"),": (optional) retrieve the first n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"after"),": (optional) retrieve the elements after a certain point,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"last"),": (optional) retrieve the last n elements,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"before"),": (optional) retrieve the elements before a certain point.")),Object(i.b)("p",null,"You must use ",Object(i.b)("inlineCode",{parentName:"p"},"first")," and/or ",Object(i.b)("inlineCode",{parentName:"p"},"after")," together, ",Object(i.b)("inlineCode",{parentName:"p"},"last")," and/or ",Object(i.b)("inlineCode",{parentName:"p"},"before")," together. If you try to retrieve the ",Object(i.b)("inlineCode",{parentName:"p"},"first=n before=xyz")," the Sdk will throw an error."),Object(i.b)("p",null,"In the result object, you will have the ",Object(i.b)("inlineCode",{parentName:"p"},"totalCount")," and an ",Object(i.b)("inlineCode",{parentName:"p"},"info")," object that has the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hasNext"),": a flag telling if there is a next series of elements to retrieve after this one,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hasPrevious"),": a flag telling if there is a previous series of elements to retrieve before this one,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startCursor"),": (optional) a cursor (string) representing the position of the first element in this series,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endCursor"),": (optional) a cursor (string) representing the position of the last element in this series.")),Object(i.b)("p",null,"Let's look at a pagination example. We start by retrieving (and consuming) the first 10 incoming traces:"),Object(i.b)(c.a,{groupId:"choosen-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C#",value:"csharp"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let results = await sdk.getIncomingTraces({\n  first: 10,\n});\n\nconsume(results.traces);\n")),Object(i.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"if (results.info.hasNext) {\n  results = await sdk.getIncomingTraces({\n    first: 10,\n    after: results.info.endCursor,\n  });\n  consume(results.traces);\n}\n")),Object(i.b)("p",null,"In the case there are more traces to retrieve (",Object(i.b)("inlineCode",{parentName:"p"},"hasNext === true"),"), we call the ",Object(i.b)("inlineCode",{parentName:"p"},"getIncomingTraces")," method again setting the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," argument to the ",Object(i.b)("inlineCode",{parentName:"p"},"endCursor"),". We keep doing this until ",Object(i.b)("inlineCode",{parentName:"p"},"hasNext === false"),".\nPutting all this together, we can synthetize this in a loop:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let results;\ndo {\n  results = await sdk.getIncomingTraces({\n    first: 10,\n    after: results.info.endCursor,\n  });\n  consume(results.traces);\n} while (results.info.hasNext);\n"))),Object(i.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"Sdk<object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(10, null, null, null);\nTracesState<object, object> results = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n")),Object(i.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"if (results.Info.HasNext)\n{\n  PaginationInfo paginationInfo = new PaginationInfo(10, results.Info.EndCursor, null, null);\n  TracesState<object, object> results = await sdk.GetIncomingTracesAsync<object>(paginationInfo);\n}\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Sdk<Object> sdk = GetSdk();\nPaginationInfo paginationInfo = new PaginationInfo(10, null, null, null);\nTracesState<Object, Object> results =  sdk.getIncomingTraces<Object>(paginationInfo);\n")),Object(i.b)("p",null,"Next, we look at the pagination info results to know if there are more traces to retrieve:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"if (results.Info.HasNext) {\nPaginationInfo paginationInfo = new PaginationInfo(10, results.Info.EndCursor, null, null);\nTracesState<Object, Object> results =  sdk.getIncomingTraces<Object>(paginationInfo);\n}\n")))))}d.isMDXComponent=!0},91:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,j=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(j,l(l({ref:t},s),{},{components:a})):r.a.createElement(j,l({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";var n=a(0),r=a(95);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(94),c=a(91),l=a(56),o=a.n(l);var s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,j=Object(i.a)(),m=j.tabGroupChoices,g=j.setTabGroupChoices,O=Object(n.useState)(l),f=O[0],h=O[1],N=n.Children.toArray(e.children),v=[];if(null!=u){var T=m[u];null!=T&&T!==f&&p.some((function(e){return e.value===T}))&&h(T)}var w=function(e){var t=e.target,a=v.indexOf(t),n=N[a].props.value;h(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,i,c,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,c=window,l=c.innerHeight,s=c.innerWidth,a>=0&&i<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},y=function(e){var t,a;switch(e.keyCode){case b:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case s:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:y,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);