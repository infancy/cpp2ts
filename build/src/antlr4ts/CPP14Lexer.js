import {ATNDeserializer} from "../../_snowpack/pkg/antlr4ts/atn/ATNDeserializer.js";
import {Lexer} from "../../_snowpack/pkg/antlr4ts/Lexer.js";
import {LexerATNSimulator} from "../../_snowpack/pkg/antlr4ts/atn/LexerATNSimulator.js";
import {VocabularyImpl} from "../../_snowpack/pkg/antlr4ts/VocabularyImpl.js";
import * as Utils from "../../_snowpack/pkg/antlr4ts/misc/Utils.js";
const _CPP14Lexer = class extends Lexer {
  get vocabulary() {
    return _CPP14Lexer.VOCABULARY;
  }
  constructor(input) {
    super(input);
    this._interp = new LexerATNSimulator(_CPP14Lexer._ATN, this);
  }
  get grammarFileName() {
    return "CPP14Lexer.g4";
  }
  get ruleNames() {
    return _CPP14Lexer.ruleNames;
  }
  get serializedATN() {
    return _CPP14Lexer._serializedATN;
  }
  get channelNames() {
    return _CPP14Lexer.channelNames;
  }
  get modeNames() {
    return _CPP14Lexer.modeNames;
  }
  static get _ATN() {
    if (!_CPP14Lexer.__ATN) {
      _CPP14Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(_CPP14Lexer._serializedATN));
    }
    return _CPP14Lexer.__ATN;
  }
};
export let CPP14Lexer = _CPP14Lexer;
CPP14Lexer.IntegerLiteral = 1;
CPP14Lexer.CharacterLiteral = 2;
CPP14Lexer.FloatingLiteral = 3;
CPP14Lexer.StringLiteral = 4;
CPP14Lexer.BooleanLiteral = 5;
CPP14Lexer.PointerLiteral = 6;
CPP14Lexer.UserDefinedLiteral = 7;
CPP14Lexer.MultiLineMacro = 8;
CPP14Lexer.Directive = 9;
CPP14Lexer.Alignas = 10;
CPP14Lexer.Alignof = 11;
CPP14Lexer.Asm = 12;
CPP14Lexer.Auto = 13;
CPP14Lexer.Bool = 14;
CPP14Lexer.Break = 15;
CPP14Lexer.Case = 16;
CPP14Lexer.Catch = 17;
CPP14Lexer.Char = 18;
CPP14Lexer.Char16 = 19;
CPP14Lexer.Char32 = 20;
CPP14Lexer.Class = 21;
CPP14Lexer.Const = 22;
CPP14Lexer.Constexpr = 23;
CPP14Lexer.Const_cast = 24;
CPP14Lexer.Continue = 25;
CPP14Lexer.Decltype = 26;
CPP14Lexer.Default = 27;
CPP14Lexer.Delete = 28;
CPP14Lexer.Do = 29;
CPP14Lexer.Double = 30;
CPP14Lexer.Dynamic_cast = 31;
CPP14Lexer.Else = 32;
CPP14Lexer.Enum = 33;
CPP14Lexer.Explicit = 34;
CPP14Lexer.Export = 35;
CPP14Lexer.Extern = 36;
CPP14Lexer.False_ = 37;
CPP14Lexer.Final = 38;
CPP14Lexer.Float = 39;
CPP14Lexer.For = 40;
CPP14Lexer.Friend = 41;
CPP14Lexer.Goto = 42;
CPP14Lexer.If = 43;
CPP14Lexer.Inline = 44;
CPP14Lexer.Int = 45;
CPP14Lexer.Long = 46;
CPP14Lexer.Mutable = 47;
CPP14Lexer.Namespace = 48;
CPP14Lexer.New = 49;
CPP14Lexer.Noexcept = 50;
CPP14Lexer.Nullptr = 51;
CPP14Lexer.Operator = 52;
CPP14Lexer.Override = 53;
CPP14Lexer.Private = 54;
CPP14Lexer.Protected = 55;
CPP14Lexer.Public = 56;
CPP14Lexer.Register = 57;
CPP14Lexer.Reinterpret_cast = 58;
CPP14Lexer.Return = 59;
CPP14Lexer.Short = 60;
CPP14Lexer.Signed = 61;
CPP14Lexer.Sizeof = 62;
CPP14Lexer.Static = 63;
CPP14Lexer.Static_assert = 64;
CPP14Lexer.Static_cast = 65;
CPP14Lexer.Struct = 66;
CPP14Lexer.Switch = 67;
CPP14Lexer.Template = 68;
CPP14Lexer.This = 69;
CPP14Lexer.Thread_local = 70;
CPP14Lexer.Throw = 71;
CPP14Lexer.True_ = 72;
CPP14Lexer.Try = 73;
CPP14Lexer.Typedef = 74;
CPP14Lexer.Typeid_ = 75;
CPP14Lexer.Typename_ = 76;
CPP14Lexer.Union = 77;
CPP14Lexer.Unsigned = 78;
CPP14Lexer.Using = 79;
CPP14Lexer.Virtual = 80;
CPP14Lexer.Void = 81;
CPP14Lexer.Volatile = 82;
CPP14Lexer.Wchar = 83;
CPP14Lexer.While = 84;
CPP14Lexer.LeftParen = 85;
CPP14Lexer.RightParen = 86;
CPP14Lexer.LeftBracket = 87;
CPP14Lexer.RightBracket = 88;
CPP14Lexer.LeftBrace = 89;
CPP14Lexer.RightBrace = 90;
CPP14Lexer.Plus = 91;
CPP14Lexer.Minus = 92;
CPP14Lexer.Star = 93;
CPP14Lexer.Div = 94;
CPP14Lexer.Mod = 95;
CPP14Lexer.Caret = 96;
CPP14Lexer.And = 97;
CPP14Lexer.Or = 98;
CPP14Lexer.Tilde = 99;
CPP14Lexer.Not = 100;
CPP14Lexer.Assign = 101;
CPP14Lexer.Less = 102;
CPP14Lexer.Greater = 103;
CPP14Lexer.PlusAssign = 104;
CPP14Lexer.MinusAssign = 105;
CPP14Lexer.StarAssign = 106;
CPP14Lexer.DivAssign = 107;
CPP14Lexer.ModAssign = 108;
CPP14Lexer.XorAssign = 109;
CPP14Lexer.AndAssign = 110;
CPP14Lexer.OrAssign = 111;
CPP14Lexer.LeftShiftAssign = 112;
CPP14Lexer.RightShiftAssign = 113;
CPP14Lexer.Equal = 114;
CPP14Lexer.NotEqual = 115;
CPP14Lexer.LessEqual = 116;
CPP14Lexer.GreaterEqual = 117;
CPP14Lexer.AndAnd = 118;
CPP14Lexer.OrOr = 119;
CPP14Lexer.PlusPlus = 120;
CPP14Lexer.MinusMinus = 121;
CPP14Lexer.Comma = 122;
CPP14Lexer.ArrowStar = 123;
CPP14Lexer.Arrow = 124;
CPP14Lexer.Question = 125;
CPP14Lexer.Colon = 126;
CPP14Lexer.Doublecolon = 127;
CPP14Lexer.Semi = 128;
CPP14Lexer.Dot = 129;
CPP14Lexer.DotStar = 130;
CPP14Lexer.Ellipsis = 131;
CPP14Lexer.Identifier = 132;
CPP14Lexer.DecimalLiteral = 133;
CPP14Lexer.OctalLiteral = 134;
CPP14Lexer.HexadecimalLiteral = 135;
CPP14Lexer.BinaryLiteral = 136;
CPP14Lexer.Integersuffix = 137;
CPP14Lexer.UserDefinedIntegerLiteral = 138;
CPP14Lexer.UserDefinedFloatingLiteral = 139;
CPP14Lexer.UserDefinedStringLiteral = 140;
CPP14Lexer.UserDefinedCharacterLiteral = 141;
CPP14Lexer.Whitespace = 142;
CPP14Lexer.Newline = 143;
CPP14Lexer.BlockComment = 144;
CPP14Lexer.LineComment = 145;
CPP14Lexer.channelNames = [
  "DEFAULT_TOKEN_CHANNEL",
  "HIDDEN"
];
CPP14Lexer.modeNames = [
  "DEFAULT_MODE"
];
CPP14Lexer.ruleNames = [
  "IntegerLiteral",
  "CharacterLiteral",
  "FloatingLiteral",
  "StringLiteral",
  "BooleanLiteral",
  "PointerLiteral",
  "UserDefinedLiteral",
  "MultiLineMacro",
  "Directive",
  "Alignas",
  "Alignof",
  "Asm",
  "Auto",
  "Bool",
  "Break",
  "Case",
  "Catch",
  "Char",
  "Char16",
  "Char32",
  "Class",
  "Const",
  "Constexpr",
  "Const_cast",
  "Continue",
  "Decltype",
  "Default",
  "Delete",
  "Do",
  "Double",
  "Dynamic_cast",
  "Else",
  "Enum",
  "Explicit",
  "Export",
  "Extern",
  "False_",
  "Final",
  "Float",
  "For",
  "Friend",
  "Goto",
  "If",
  "Inline",
  "Int",
  "Long",
  "Mutable",
  "Namespace",
  "New",
  "Noexcept",
  "Nullptr",
  "Operator",
  "Override",
  "Private",
  "Protected",
  "Public",
  "Register",
  "Reinterpret_cast",
  "Return",
  "Short",
  "Signed",
  "Sizeof",
  "Static",
  "Static_assert",
  "Static_cast",
  "Struct",
  "Switch",
  "Template",
  "This",
  "Thread_local",
  "Throw",
  "True_",
  "Try",
  "Typedef",
  "Typeid_",
  "Typename_",
  "Union",
  "Unsigned",
  "Using",
  "Virtual",
  "Void",
  "Volatile",
  "Wchar",
  "While",
  "LeftParen",
  "RightParen",
  "LeftBracket",
  "RightBracket",
  "LeftBrace",
  "RightBrace",
  "Plus",
  "Minus",
  "Star",
  "Div",
  "Mod",
  "Caret",
  "And",
  "Or",
  "Tilde",
  "Not",
  "Assign",
  "Less",
  "Greater",
  "PlusAssign",
  "MinusAssign",
  "StarAssign",
  "DivAssign",
  "ModAssign",
  "XorAssign",
  "AndAssign",
  "OrAssign",
  "LeftShiftAssign",
  "RightShiftAssign",
  "Equal",
  "NotEqual",
  "LessEqual",
  "GreaterEqual",
  "AndAnd",
  "OrOr",
  "PlusPlus",
  "MinusMinus",
  "Comma",
  "ArrowStar",
  "Arrow",
  "Question",
  "Colon",
  "Doublecolon",
  "Semi",
  "Dot",
  "DotStar",
  "Ellipsis",
  "Hexquad",
  "Universalcharactername",
  "Identifier",
  "Identifiernondigit",
  "NONDIGIT",
  "DIGIT",
  "DecimalLiteral",
  "OctalLiteral",
  "HexadecimalLiteral",
  "BinaryLiteral",
  "NONZERODIGIT",
  "OCTALDIGIT",
  "HEXADECIMALDIGIT",
  "BINARYDIGIT",
  "Integersuffix",
  "Unsignedsuffix",
  "Longsuffix",
  "Longlongsuffix",
  "Cchar",
  "Escapesequence",
  "Simpleescapesequence",
  "Octalescapesequence",
  "Hexadecimalescapesequence",
  "Fractionalconstant",
  "Exponentpart",
  "SIGN",
  "Digitsequence",
  "Floatingsuffix",
  "Encodingprefix",
  "Schar",
  "Rawstring",
  "UserDefinedIntegerLiteral",
  "UserDefinedFloatingLiteral",
  "UserDefinedStringLiteral",
  "UserDefinedCharacterLiteral",
  "Udsuffix",
  "Whitespace",
  "Newline",
  "BlockComment",
  "LineComment"
];
CPP14Lexer._LITERAL_NAMES = [
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  "'alignas'",
  "'alignof'",
  "'asm'",
  "'auto'",
  "'bool'",
  "'break'",
  "'case'",
  "'catch'",
  "'char'",
  "'char16_t'",
  "'char32_t'",
  "'class'",
  "'const'",
  "'constexpr'",
  "'const_cast'",
  "'continue'",
  "'decltype'",
  "'default'",
  "'delete'",
  "'do'",
  "'double'",
  "'dynamic_cast'",
  "'else'",
  "'enum'",
  "'explicit'",
  "'export'",
  "'extern'",
  "'false'",
  "'final'",
  "'float'",
  "'for'",
  "'friend'",
  "'goto'",
  "'if'",
  "'inline'",
  "'int'",
  "'long'",
  "'mutable'",
  "'namespace'",
  "'new'",
  "'noexcept'",
  "'nullptr'",
  "'operator'",
  "'override'",
  "'private'",
  "'protected'",
  "'public'",
  "'register'",
  "'reinterpret_cast'",
  "'return'",
  "'short'",
  "'signed'",
  "'sizeof'",
  "'static'",
  "'static_assert'",
  "'static_cast'",
  "'struct'",
  "'switch'",
  "'template'",
  "'this'",
  "'thread_local'",
  "'throw'",
  "'true'",
  "'try'",
  "'typedef'",
  "'typeid'",
  "'typename'",
  "'union'",
  "'unsigned'",
  "'using'",
  "'virtual'",
  "'void'",
  "'volatile'",
  "'wchar_t'",
  "'while'",
  "'('",
  "')'",
  "'['",
  "']'",
  "'{'",
  "'}'",
  "'+'",
  "'-'",
  "'*'",
  "'/'",
  "'%'",
  "'^'",
  "'&'",
  "'|'",
  "'~'",
  void 0,
  "'='",
  "'<'",
  "'>'",
  "'+='",
  "'-='",
  "'*='",
  "'/='",
  "'%='",
  "'^='",
  "'&='",
  "'|='",
  "'<<='",
  "'>>='",
  "'=='",
  "'!='",
  "'<='",
  "'>='",
  void 0,
  void 0,
  "'++'",
  "'--'",
  "','",
  "'->*'",
  "'->'",
  "'?'",
  "':'",
  "'::'",
  "';'",
  "'.'",
  "'.*'",
  "'...'"
];
CPP14Lexer._SYMBOLIC_NAMES = [
  void 0,
  "IntegerLiteral",
  "CharacterLiteral",
  "FloatingLiteral",
  "StringLiteral",
  "BooleanLiteral",
  "PointerLiteral",
  "UserDefinedLiteral",
  "MultiLineMacro",
  "Directive",
  "Alignas",
  "Alignof",
  "Asm",
  "Auto",
  "Bool",
  "Break",
  "Case",
  "Catch",
  "Char",
  "Char16",
  "Char32",
  "Class",
  "Const",
  "Constexpr",
  "Const_cast",
  "Continue",
  "Decltype",
  "Default",
  "Delete",
  "Do",
  "Double",
  "Dynamic_cast",
  "Else",
  "Enum",
  "Explicit",
  "Export",
  "Extern",
  "False_",
  "Final",
  "Float",
  "For",
  "Friend",
  "Goto",
  "If",
  "Inline",
  "Int",
  "Long",
  "Mutable",
  "Namespace",
  "New",
  "Noexcept",
  "Nullptr",
  "Operator",
  "Override",
  "Private",
  "Protected",
  "Public",
  "Register",
  "Reinterpret_cast",
  "Return",
  "Short",
  "Signed",
  "Sizeof",
  "Static",
  "Static_assert",
  "Static_cast",
  "Struct",
  "Switch",
  "Template",
  "This",
  "Thread_local",
  "Throw",
  "True_",
  "Try",
  "Typedef",
  "Typeid_",
  "Typename_",
  "Union",
  "Unsigned",
  "Using",
  "Virtual",
  "Void",
  "Volatile",
  "Wchar",
  "While",
  "LeftParen",
  "RightParen",
  "LeftBracket",
  "RightBracket",
  "LeftBrace",
  "RightBrace",
  "Plus",
  "Minus",
  "Star",
  "Div",
  "Mod",
  "Caret",
  "And",
  "Or",
  "Tilde",
  "Not",
  "Assign",
  "Less",
  "Greater",
  "PlusAssign",
  "MinusAssign",
  "StarAssign",
  "DivAssign",
  "ModAssign",
  "XorAssign",
  "AndAssign",
  "OrAssign",
  "LeftShiftAssign",
  "RightShiftAssign",
  "Equal",
  "NotEqual",
  "LessEqual",
  "GreaterEqual",
  "AndAnd",
  "OrOr",
  "PlusPlus",
  "MinusMinus",
  "Comma",
  "ArrowStar",
  "Arrow",
  "Question",
  "Colon",
  "Doublecolon",
  "Semi",
  "Dot",
  "DotStar",
  "Ellipsis",
  "Identifier",
  "DecimalLiteral",
  "OctalLiteral",
  "HexadecimalLiteral",
  "BinaryLiteral",
  "Integersuffix",
  "UserDefinedIntegerLiteral",
  "UserDefinedFloatingLiteral",
  "UserDefinedStringLiteral",
  "UserDefinedCharacterLiteral",
  "Whitespace",
  "Newline",
  "BlockComment",
  "LineComment"
];
CPP14Lexer.VOCABULARY = new VocabularyImpl(_CPP14Lexer._LITERAL_NAMES, _CPP14Lexer._SYMBOLIC_NAMES, []);
CPP14Lexer._serializedATNSegments = 3;
CPP14Lexer._serializedATNSegment0 = `줝쪺֍꾺体؇쉁ֶ\b					\x07	\x07\b	\b			
	
\v	\v\f	\f\r	\r																		 	 !	!"	"#	#$	$%	%&	&'	'(	()	)*	*+	+,	,-	-.	./	/0	01	12	23	34	45	56	67	78	89	9:	:;	;<	<=	=>	>?	?@	@A	AB	BC	CD	DE	EF	FG	GH	HI	IJ	JK	KL	LM	MN	NO	OP	PQ	QR	RS	ST	TU	UV	VW	WX	XY	YZ	Z[	[\\	\\]	]^	^_	_\`	\`a	ab	bc	cd	de	ef	fg	gh	hi	ij	jk	kl	lm	mn	no	op	pq	qr	rs	st	tu	uv	vw	wx	xy	yz	z{	{|	|}	}~	~																																	 	 ¡	¡¢	¢£	£¤	¤¥	¥¦	¦§	§¨	¨©	©ª	ª«	«¬	¬Ŝ
Š
Ť
Ũ
Ū
ŭ
ű
\rŲŹ
ż
Ɓ
ƃ
Ɔ
\x07Ƌ
\fƎ\vƑ
ƕ
\x07\x07\b\b\b\b\bƝ
\b		\x07	ơ
	\f		Ƥ\v				ƨ
			ƫ
	\r		Ƭ		ư
	\r		Ʊ		

\x07
Ƹ

\f

ƻ\v


\v\v\v\v\v\v\v\v\f\f\f\f\f\f\f\f\r\r\r\r             !!!!!"""""#########$$$$$$$%%%%%%%&&&&&&''''''(((((())))*******+++++,,,-------..../////0000000011111111112222333333333444444445555555556666666667777777788888888889999999:::::::::;;;;;;;;;;;;;;;;;<<<<<<<======>>>>>>>???????@@@@@@@AAAAAAAAAAAAAABBBBBBBBBBBBCCCCCCCDDDDDDDEEEEEEEEEFFFFFGGGGGGGGGGGGGHHHHHHIIIIIJJJJKKKKKKKKLLLLLLLMMMMMMMMMNNNNNNOOOOOOOOOPPPPPPQQQQQQQQRRRRRSSSSSSSSSTTTTTTTTUUUUUUVVWWXXYYZZ[[\\\\]]^^__\`\`aabbccddeeeeeЇ
effgghhiiijjjkkklllmmmnnnooopppqqqqrrrrssstttuuuvvvwwwwwwр
wxxxxxц
xyyyzzz{{||||}}}~~Ѹ
\x07ѽ
\fҀ\v҄
Ҍ
\x07ҏ
\fҒ\vҖ
\x07ҙ
\fҜ\vҢ
Ҧ
\x07ҩ
\fҬ\vҲ
Ҷ
\x07ҹ
\fҼ\vӈ
ӌ
Ӑ
Ӕ
Ӗ
Ӡ
ӥ
Ӫ
ԁ
Ԅ
Ԋ
ԗ
ԝ
\rԞԢ
ԩ
ԭ
Բ
Ե
Ի
\x07Ծ
\fՁ\v  ¡¡¡¡Ո
¡¢¢¢¢Ս
¢££££££\x07£Օ
£\f££՘\v£££\x07£՜
£\f££՟\v£££££\x07£ե
£\f££ը\v£££¤¤¤¤¤¤¤¤¤¤¤¤¤ո
¤¥¥¥ռ
¥¥¥¥¥¥¥¥ք
¥¦¦¦§§§¨¨©©֏
©\r©©֐©©ªªª֗
ªªª֚
ªªª««««\x07«֢
«\f««֥\v««««««¬¬¬¬\x07¬ְ
¬\f¬¬ֳ\v¬¬¬\x07ƢՖ՝զ֣­\x07	\v\x07\r\b	
\v\f\r!#%')+-/13579;= ?!A"C#E$G%I&K'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@ABCDEFGHIJKLMNOPQ¡R£S¥T§U©V«W­X¯Y±Z³[µ\\·]¹^»_½\`¿aÁbÃcÅdÇeÉfËgÍhÏiÑjÓkÕl×mÙnÛoÝpßqárãsåtçuévëwíxïyñzó{õ|÷}ù~ûýÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĹĻĽĿŁŃŅŇŉŋōŏőœŕŗNNWWww\f\fC\\aac|2;3;292;CHch23WWwwNNnn\f\f))^^--//HHNNhhnn\f\f$$^^$$*+\f\f""**++\f\f""$$\v\v""\f\f׺\x07	\v\r!#%')+-/13579;=?ACEGIKMOQSUWY[]_acegikmoqsuwy{}¡£¥§©«­¯±³µ·¹»½¿ÁÃÅÇÉËÍÏÑÓÕ×ÙÛÝßáãåçéëíïñóõ÷ùûýÿāăąćčĕėęěĥŇŉŋōőœŕŗũŬ\x07Ƃ	ƅ\vƔ\rƖƜƞƵƾǆǎǒǗǜ!Ǣ#ǧ%ǭ'ǲ)ǻ+Ȅ-Ȋ/Ȑ1Ț3ȥ5Ȯ7ȷ9ȿ;Ɇ=ɉ?ɐAɝCɢEɧGɰIɷKɾMʄOʊQʐSʔUʛWʠYʣ[ʪ]ʮ_ʳaʻc˅eˉg˒i˚kˣmˬo˴q˾s̅u̎w̟y̦{̬}̳̺́͏͛͢ͩͲͷ΄ΊΏΓΛ`;
CPP14Lexer._serializedATNSegment1 = "΢Ϋακ¡π£ψ¥ύ§ϖ©Ϟ«Ϥ­Ϧ¯Ϩ±Ϫ³ϬµϮ·ϰ¹ϲ»ϴ½϶¿ϸÁϺÃϼÅϾÇЀÉІËЈÍЊÏЌÑЎÓБÕД×ЗÙКÛНÝРßУáЦãЪåЮçбéдëзíпïхñчóъõэ÷яùѓûіýјÿњāѝăџąѡćѤĉѨċѷčѹď҃đ҅ē҇ĕ҉ėғęҡěұĝҽğҿġӁģӃĥӕħӗĩәīӟĭӤįөıԉĳԖĵԘķԨĹԴĻԶĽԸĿՂŁՇŃՌŅՎŇշŉփŋօōֈŏ֋ő֎œ֙ŕ֝ŗ֫řśĕŚŜĥśŚśŜŜŪŝşėŞŠĥşŞşŠŠŪšţęŢŤĥţŢţŤŤŪťŧěŦŨĥŧŦŧŨŨŪũřũŝũšũťŪūŭ	ŬūŬŭŭŮŮŰ\x07)ůűĭŰůűŲŲŰŲųųŴŴŵ\x07)ŵŶŸķŷŹĹŸŷŸŹŹŻźżĿ ŻźŻżżƃŽžĽžƀĹſƁĿ ƀſƀƁƁƃƂŶƂŽƃ\bƄƆŁ¡ƅƄƅƆƆƐƇƑŅ£ƈƌ\x07$ƉƋŃ¢ƊƉƋƎƌƊƌƍƍƏƎƌƏƑ\x07$ƐƇƐƈƑ\nƒƕK&ƓƕIƔƒƔƓƕ\fƖƗg4ƗƘƝŇ¤ƙƝŉ¥ƚƝŋ¦ƛƝō§ƜƘƜƙƜƚƜƛƝƞƪ\x07%Ɵơ\nƠƟơƤƢƣƢƠƣƥƤƢƥƧ\x07^Ʀƨ\x07ƧƦƧƨƨƩƩƫ\x07\fƪƢƫƬƬƪƬƭƭƯƮư\nƯƮưƱƱƯƱƲƲƳƳƴ\b	ƴƵƹ\x07%ƶƸ\nƷƶƸƻƹƷƹƺƺƼƻƹƼƽ\b\nƽƾƿ\x07cƿǀ\x07nǀǁ\x07kǁǂ\x07iǂǃ\x07pǃǄ\x07cǄǅ\x07uǅǆǇ\x07cǇǈ\x07nǈǉ\x07kǉǊ\x07iǊǋ\x07pǋǌ\x07qǌǍ\x07hǍǎǏ\x07cǏǐ\x07uǐǑ\x07oǑǒǓ\x07cǓǔ\x07wǔǕ\x07vǕǖ\x07qǖǗǘ\x07dǘǙ\x07qǙǚ\x07qǚǛ\x07nǛǜǝ\x07dǝǞ\x07tǞǟ\x07gǟǠ\x07cǠǡ\x07mǡ Ǣǣ\x07eǣǤ\x07cǤǥ\x07uǥǦ\x07gǦ\"ǧǨ\x07eǨǩ\x07cǩǪ\x07vǪǫ\x07eǫǬ\x07jǬ$ǭǮ\x07eǮǯ\x07jǯǰ\x07cǰǱ\x07tǱ&ǲǳ\x07eǳǴ\x07jǴǵ\x07cǵǶ\x07tǶǷ\x073ǷǸ\x078Ǹǹ\x07aǹǺ\x07vǺ(ǻǼ\x07eǼǽ\x07jǽǾ\x07cǾǿ\x07tǿȀ\x075Ȁȁ\x074ȁȂ\x07aȂȃ\x07vȃ*Ȅȅ\x07eȅȆ\x07nȆȇ\x07cȇȈ\x07uȈȉ\x07uȉ,Ȋȋ\x07eȋȌ\x07qȌȍ\x07pȍȎ\x07uȎȏ\x07vȏ.Ȑȑ\x07eȑȒ\x07qȒȓ\x07pȓȔ\x07uȔȕ\x07vȕȖ\x07gȖȗ\x07zȗȘ\x07rȘș\x07tș0Țț\x07ețȜ\x07qȜȝ\x07pȝȞ\x07uȞȟ\x07vȟȠ\x07aȠȡ\x07eȡȢ\x07cȢȣ\x07uȣȤ\x07vȤ2ȥȦ\x07eȦȧ\x07qȧȨ\x07pȨȩ\x07vȩȪ\x07kȪȫ\x07pȫȬ\x07wȬȭ\x07gȭ4Ȯȯ\x07fȯȰ\x07gȰȱ\x07eȱȲ\x07nȲȳ\x07vȳȴ\x07{ȴȵ\x07rȵȶ\x07gȶ6ȷȸ\x07fȸȹ\x07gȹȺ\x07hȺȻ\x07cȻȼ\x07wȼȽ\x07nȽȾ\x07vȾ8ȿɀ\x07fɀɁ\x07gɁɂ\x07nɂɃ\x07gɃɄ\x07vɄɅ\x07gɅ:Ɇɇ\x07fɇɈ\x07qɈ<ɉɊ\x07fɊɋ\x07qɋɌ\x07wɌɍ\x07dɍɎ\x07nɎɏ\x07gɏ>ɐɑ\x07fɑɒ\x07{ɒɓ\x07pɓɔ\x07cɔɕ\x07oɕɖ\x07kɖɗ\x07eɗɘ\x07aɘə\x07eəɚ\x07cɚɛ\x07uɛɜ\x07vɜ@ɝɞ\x07gɞɟ\x07nɟɠ\x07uɠɡ\x07gɡBɢɣ\x07gɣɤ\x07pɤɥ\x07wɥɦ\x07oɦDɧɨ\x07gɨɩ\x07zɩɪ\x07rɪɫ\x07nɫɬ\x07kɬɭ\x07eɭɮ\x07kɮɯ\x07vɯFɰɱ\x07gɱɲ\x07zɲɳ\x07rɳɴ\x07qɴɵ\x07tɵɶ\x07vɶHɷɸ\x07gɸɹ\x07zɹɺ\x07vɺɻ\x07gɻɼ\x07tɼɽ\x07pɽJɾɿ\x07hɿʀ\x07cʀʁ\x07nʁʂ\x07uʂʃ\x07gʃLʄʅ\x07hʅʆ\x07kʆʇ\x07pʇʈ\x07cʈʉ\x07nʉNʊʋ\x07hʋʌ\x07nʌʍ\x07qʍʎ\x07cʎʏ\x07vʏPʐʑ\x07hʑʒ\x07qʒʓ\x07tʓRʔʕ\x07hʕʖ\x07tʖʗ\x07kʗʘ\x07gʘʙ\x07pʙʚ\x07fʚTʛʜ\x07iʜʝ\x07qʝʞ\x07vʞʟ\x07qʟVʠʡ\x07kʡʢ\x07hʢXʣʤ\x07kʤʥ\x07pʥʦ\x07nʦʧ\x07kʧʨ\x07pʨʩ\x07gʩZʪʫ\x07kʫʬ\x07pʬʭ\x07vʭ\\ʮʯ\x07nʯʰ\x07qʰʱ\x07pʱʲ\x07iʲ^ʳʴ\x07oʴʵ\x07wʵʶ\x07vʶʷ\x07cʷʸ\x07dʸʹ\x07nʹʺ\x07gʺ`ʻʼ\x07pʼʽ\x07cʽʾ\x07oʾʿ\x07gʿˀ\x07uˀˁ\x07rˁ˂\x07c˂˃\x07e˃˄\x07g˄b˅ˆ\x07pˆˇ\x07gˇˈ\x07yˈdˉˊ\x07pˊˋ\x07qˋˌ\x07gˌˍ\x07zˍˎ\x07eˎˏ\x07gˏː\x07rːˑ\x07vˑf˒˓\x07p˓˔\x07w˔˕\x07n˕˖\x07n˖˗\x07r˗˘\x07v˘˙\x07t˙h˚˛\x07q˛˜\x07r˜˝\x07g˝˞\x07t˞˟\x07c˟ˠ\x07vˠˡ\x07qˡˢ\x07tˢjˣˤ\x07qˤ˥\x07x˥˦\x07g˦˧\x07t˧˨\x07t˨˩\x07k˩˪\x07f˪˫\x07g˫lˬ˭\x07r˭ˮ\x07tˮ˯\x07k˯˰\x07x˰˱\x07c˱˲\x07v˲˳\x07g˳n˴˵\x07r˵˶\x07t˶˷\x07q˷˸\x07v˸˹\x07g˹˺\x07e˺˻\x07v˻˼\x07g˼˽\x07f˽p˾˿\x07r˿̀\x07w̀́\x07d́̂\x07n̂̃\x07k̃̄\x07e̄r̅̆\x07t̆̇\x07g̇̈\x07i̈̉\x07k̉̊\x07u̊̋\x07v̋̌\x07g̌̍\x07t̍t̎̏\x07t̏̐\x07g̐̑\x07k̑̒\x07p̒̓\x07v̓̔\x07g̔̕\x07t̖̕\x07r̖̗\x07t̗̘\x07g̘̙\x07v̙̚\x07a̛̚\x07e̛̜\x07c̜̝\x07u̝̞\x07v̞v̟̠\x07t̡̠\x07g̡̢\x07v̢̣\x07w̣̤\x07t̤̥\x07p̥x̧̦\x07u̧̨\x07j̨̩\x07q̩̪\x07t̪̫\x07v̫z̬̭\x07u̭̮\x07k̮̯\x07i̯̰\x07p̰̱\x07g̱̲\x07f̲|̴̳\x07u̴̵\x07k̵̶\x07|̶̷\x07g̷̸\x07q̸̹\x07h̹~̺̻\x07u̻̼\x07v̼̽\x07c̽̾\x07v̾̿\x07k̿̀\x07e̀́͂\x07u͂̓\x07v̓̈́\x07c̈́ͅ\x07v͆ͅ\x07k͇͆\x07e͇͈\x07a͈͉\x07c͉͊\x07u͊͋\x07u͋͌\x07g͍͌\x07t͍͎\x07v͎͏͐\x07u͐͑\x07v͑͒\x07c͓͒\x07v͓͔\x07k͔͕\x07e͕͖\x07a͖͗\x07e͗͘\x07c͙͘\x07u͙͚\x07v͚͛͜\x07u͜͝\x07v͝͞\x07t͟͞\x07w͟͠\x07e͠͡\x07v͡ͣ͢\x07uͣͤ\x07yͤͥ\x07kͥͦ\x07vͦͧ\x07eͧͨ\x07jͨͩͪ\x07vͪͫ\x07gͫͬ\x07oͬͭ\x07rͭͮ\x07nͮͯ\x07cͯͰ\x07vͰͱ\x07gͱͲͳ\x07vͳʹ\x07jʹ͵\x07k͵Ͷ\x07uͶͷ͸\x07v͸͹\x07j͹ͺ\x07tͺͻ\x07gͻͼ\x07cͼͽ\x07fͽ;\x07a;Ϳ\x07nͿ΀\x07q΀΁\x07e΁΂\x07c΂΃\x07n΃΄΅\x07v΅Ά\x07jΆ·\x07t·Έ\x07qΈΉ\x07yΉΊ΋\x07v΋Ό\x07tΌ΍\x07w΍Ύ\x07gΎΏΐ\x07vΐΑ\x07tΑΒ\x07{ΒΓΔ\x07vΔΕ\x07{ΕΖ\x07rΖΗ\x07gΗΘ\x07fΘΙ\x07gΙΚ\x07hΚΛΜ\x07vΜΝ\x07{ΝΞ\x07rΞΟ\x07gΟΠ\x07kΠΡ\x07fΡ΢Σ\x07vΣΤ\x07{ΤΥ\x07rΥΦ\x07gΦΧ\x07pΧΨ\x07cΨΩ\x07oΩΪ\x07gΪΫά\x07wάέ\x07pέή\x07kήί\x07qίΰ\x07pΰαβ\x07wβγ\x07pγδ\x07uδε\x07kεζ\x07iζη\x07pηθ\x07gθι\x07fικλ\x07wλμ\x07uμν\x07kνξ\x07pξο\x07iο πρ\x07xρς\x07kςσ\x07tστ\x07vτυ\x07wυφ\x07cφχ\x07nχ¢ψω\x07xωϊ\x07qϊϋ\x07kϋό\x07fό¤ύώ\x07xώϏ\x07qϏϐ\x07nϐϑ\x07cϑϒ\x07vϒϓ\x07kϓϔ\x07nϔϕ\x07gϕ¦ϖϗ\x07yϗϘ\x07eϘϙ\x07jϙϚ\x07cϚϛ\x07tϛϜ\x07aϜϝ\x07vϝ¨Ϟϟ\x07yϟϠ\x07jϠϡ\x07kϡϢ\x07nϢϣ\x07gϣªϤϥ\x07*ϥ¬Ϧϧ\x07+ϧ®Ϩϩ\x07]ϩ°Ϫϫ\x07_ϫ²Ϭϭ\x07}ϭ´Ϯϯ\x07ϯ¶ϰϱ\x07-ϱ¸ϲϳ\x07/ϳºϴϵ\x07,ϵ¼϶Ϸ\x071Ϸ¾ϸϹ\x07'ϹÀϺϻ\x07`ϻÂϼϽ\x07(ϽÄϾϿ\x07~ϿÆЀЁ\x07ЁÈЂЇ\x07#ЃЄ\x07pЄЅ\x07qЅЇ\x07vІЂІЃЇÊЈЉ\x07?ЉÌЊЋ\x07>ЋÎЌЍ\x07@ЍÐЎЏ\x07-ЏА\x07?АÒБВ\x07/ВГ\x07?ГÔДЕ\x07,ЕЖ\x07?ЖÖЗИ\x071ИЙ\x07?ЙØКЛ\x07'ЛМ\x07?МÚНО\x07`ОП\x07?ПÜ";
CPP14Lexer._serializedATNSegment2 = "РС\x07(СТ\x07?ТÞУФ\x07~ФХ\x07?ХàЦЧ\x07>ЧШ\x07>ШЩ\x07?ЩâЪЫ\x07@ЫЬ\x07@ЬЭ\x07?ЭäЮЯ\x07?Яа\x07?аæбв\x07#вг\x07?гèде\x07>еж\x07?жêзи\x07@ий\x07?йìкл\x07(лр\x07(мн\x07cно\x07pор\x07fпкпмрîст\x07~тц\x07~уф\x07qфц\x07tхсхуцðчш\x07-шщ\x07-щòъы\x07/ыь\x07/ьôэю\x07.юöяѐ\x07/ѐё\x07@ёђ\x07,ђøѓє\x07/єѕ\x07@ѕúії\x07Aїüјљ\x07<љþњћ\x07<ћќ\x07<ќĀѝў\x07=ўĂџѠ\x070ѠĄѡѢ\x070Ѣѣ\x07,ѣĆѤѥ\x070ѥѦ\x070Ѧѧ\x070ѧĈѨѩġѩѪġѪѫġѫѬġѬĊѭѮ\x07^Ѯѯ\x07wѯѰѰѸĉѱѲ\x07^Ѳѳ\x07WѳѴѴѵĉѵѶĉѶѸѷѭѷѱѸČѹѾďѺѽďѻѽēѼѺѼѻѽҀѾѼѾѿѿĎҀѾҁ҄đ҂҄ċ҃ҁ҃҂҄Đ҅҆	҆Ē҇҈	҈Ĕ҉ҐĝҊҌ\x07)ҋҊҋҌҌҍҍҏēҎҋҏҒҐҎҐґґĖҒҐғҚ\x072ҔҖ\x07)ҕҔҕҖҖҗҗҙğҘҕҙҜҚҘҚққĘҜҚҝҞ\x072ҞҢ\x07zҟҠ\x072ҠҢ\x07ZҡҝҡҟҢңңҪġҤҦ\x07)ҥҤҥҦҦҧҧҩġҨҥҩҬҪҨҪҫҫĚҬҪҭҮ\x072ҮҲ\x07dүҰ\x072ҰҲ\x07DұҭұүҲҳҳҺģҴҶ\x07)ҵҴҵҶҶҷҷҹģҸҵҹҼҺҸҺһһĜҼҺҽҾ	ҾĞҿӀ	\x07ӀĠӁӂ	\bӂĢӃӄ		ӄĤӅӇħӆӈĩӇӆӇӈӈӖӉӋħӊӌīӋӊӋӌӌӖӍӏĩӎӐħӏӎӏӐӐӖӑӓīӒӔħӓӒӓӔӔӖӕӅӕӉӕӍӕӑӖĦӗӘ	\nӘĨәӚ	\vӚĪӛӜ\x07nӜӠ\x07nӝӞ\x07NӞӠ\x07NӟӛӟӝӠĬӡӥ\n\fӢӥįӣӥċӤӡӤӢӤӣӥĮӦӪıӧӪĳӨӪĵөӦөӧөӨӪİӫӬ\x07^ӬԊ\x07)ӭӮ\x07^ӮԊ\x07$ӯӰ\x07^ӰԊ\x07AӱӲ\x07^ӲԊ\x07^ӳӴ\x07^ӴԊ\x07cӵӶ\x07^ӶԊ\x07dӷӸ\x07^ӸԊ\x07hӹӺ\x07^ӺԊ\x07pӻӼ\x07^ӼԊ\x07tӽԃ\x07^ӾԀ\x07ӿԁ\x07\fԀӿԀԁԁԄԂԄ\x07\fԃӾԃԂԄԊԅԆ\x07^ԆԊ\x07vԇԈ\x07^ԈԊ\x07xԉӫԉӭԉӯԉӱԉӳԉӵԉӷԉӹԉӻԉӽԉԅԉԇԊĲԋԌ\x07^ԌԗğԍԎ\x07^ԎԏğԏԐğԐԗԑԒ\x07^ԒԓğԓԔğԔԕğԕԗԖԋԖԍԖԑԗĴԘԙ\x07^ԙԚ\x07zԚԜԛԝġԜԛԝԞԞԜԞԟԟĶԠԢĽԡԠԡԢԢԣԣԤ\x070ԤԩĽԥԦĽԦԧ\x070ԧԩԨԡԨԥԩĸԪԬ\x07gԫԭĻԬԫԬԭԭԮԮԵĽԯԱ\x07G԰ԲĻԱ԰ԱԲԲԳԳԵĽԴԪԴԯԵĺԶԷ	\rԷļԸԿēԹԻ\x07)ԺԹԺԻԻԼԼԾēԽԺԾՁԿԽԿՀՀľՁԿՂՃ	ՃŀՄՅ\x07wՅՈ\x07:ՆՈ	ՇՄՇՆՈłՉՍ\nՊՍįՋՍċՌՉՌՊՌՋՍńՎՏ\x07TՏՐ\x07$ՐՖՑՒ\x07^ՒՕ	ՓՕ\nՔՑՔՓՕ՘Ֆ՗ՖՔ՗ՙ՘Ֆՙ՝\x07*՚՜\n՛՚՜՟՝՞՝՛՞ՠ՟՝ՠզ\x07+աբ\x07^բե	գե\nդադգեըզէզդէթըզթժ\x07$ժņիլĕլխŏ¨խոծկėկհŏ¨հոձղęղճŏ¨ճոմյěյնŏ¨նոշիշծշձշմոňչջķպռĹջպջռռսսվŏ¨վքտրĽրցĹցւŏ¨ւքփչփտքŊօֆ	ֆևŏ¨ևŌֈ։։֊ŏ¨֊Ŏ֋֌č֌Ő֍֏	֎֍֏֐֐֎֐֑֑֒֒֓\b©֓Œ֖֔\x07֕֗\x07\f֖֕֖֗֚֗֚֘\x07\f֙֔֙֘֛֚֛֜\bª֜Ŕ֝֞\x071֞֟\x07,֣֟֢֠\v֡֠֢֥֣֤֣֡֤֦֥֣֦֧\x07,֧֨\x071֨֩֪֩\b«֪Ŗ֫֬\x071֭֬\x071ֱ֭ְ֮\n֮֯ְֳֱ֯ֱֲֲִֱֳִֵ\b¬ֵŘLśşţŧũŬŲŸŻƀƂƅƌƐƔƜƢƧƬƱƹІпхѷѼѾ҃ҋҐҕҚҡҥҪұҵҺӇӋӏӓӕӟӤөԀԃԉԖԞԡԨԬԱԴԺԿՇՌՔՖ՝դզշջփ֐ֱ֖֣֙\b";
CPP14Lexer._serializedATN = Utils.join([
  _CPP14Lexer._serializedATNSegment0,
  _CPP14Lexer._serializedATNSegment1,
  _CPP14Lexer._serializedATNSegment2
], "");
