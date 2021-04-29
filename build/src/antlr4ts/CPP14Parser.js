import {ATN} from "../../_snowpack/pkg/antlr4ts/atn/ATN.js";
import {ATNDeserializer} from "../../_snowpack/pkg/antlr4ts/atn/ATNDeserializer.js";
import {FailedPredicateException} from "../../_snowpack/pkg/antlr4ts/FailedPredicateException.js";
import {NoViableAltException} from "../../_snowpack/pkg/antlr4ts/NoViableAltException.js";
import {Parser} from "../../_snowpack/pkg/antlr4ts/Parser.js";
import {ParserRuleContext} from "../../_snowpack/pkg/antlr4ts/ParserRuleContext.js";
import {ParserATNSimulator} from "../../_snowpack/pkg/antlr4ts/atn/ParserATNSimulator.js";
import {RecognitionException} from "../../_snowpack/pkg/antlr4ts/RecognitionException.js";
import {Token} from "../../_snowpack/pkg/antlr4ts/Token.js";
import {VocabularyImpl} from "../../_snowpack/pkg/antlr4ts/VocabularyImpl.js";
import * as Utils from "../../_snowpack/pkg/antlr4ts/misc/Utils.js";
const _CPP14Parser = class extends Parser {
  get vocabulary() {
    return _CPP14Parser.VOCABULARY;
  }
  get grammarFileName() {
    return "CPP14Parser.g4";
  }
  get ruleNames() {
    return _CPP14Parser.ruleNames;
  }
  get serializedATN() {
    return _CPP14Parser._serializedATN;
  }
  createFailedPredicateException(predicate, message) {
    return new FailedPredicateException(this, predicate, message);
  }
  constructor(input) {
    super(input);
    this._interp = new ParserATNSimulator(_CPP14Parser._ATN, this);
  }
  translationUnit() {
    let _localctx = new TranslationUnitContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, _CPP14Parser.RULE_translationUnit);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 383;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Asm - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Namespace - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
          {
            this.state = 382;
            this.declarationseq();
          }
        }
        this.state = 385;
        this.match(_CPP14Parser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  primaryExpression() {
    let _localctx = new PrimaryExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, _CPP14Parser.RULE_primaryExpression);
    try {
      let _alt;
      this.state = 399;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.IntegerLiteral:
        case _CPP14Parser.CharacterLiteral:
        case _CPP14Parser.FloatingLiteral:
        case _CPP14Parser.StringLiteral:
        case _CPP14Parser.BooleanLiteral:
        case _CPP14Parser.PointerLiteral:
        case _CPP14Parser.UserDefinedLiteral:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 388;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 387;
                      this.literal();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 390;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
          }
          break;
        case _CPP14Parser.This:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 392;
            this.match(_CPP14Parser.This);
          }
          break;
        case _CPP14Parser.LeftParen:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 393;
            this.match(_CPP14Parser.LeftParen);
            this.state = 394;
            this.expression();
            this.state = 395;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Operator:
        case _CPP14Parser.Tilde:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 397;
            this.idExpression();
          }
          break;
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 398;
            this.lambdaExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  idExpression() {
    let _localctx = new IdExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, _CPP14Parser.RULE_idExpression);
    try {
      this.state = 403;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 401;
            this.unqualifiedId();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 402;
            this.qualifiedId();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  unqualifiedId() {
    let _localctx = new UnqualifiedIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, _CPP14Parser.RULE_unqualifiedId);
    try {
      this.state = 415;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 405;
            this.match(_CPP14Parser.Identifier);
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 406;
            this.operatorFunctionId();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 407;
            this.conversionFunctionId();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 408;
            this.literalOperatorId();
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 409;
            this.match(_CPP14Parser.Tilde);
            this.state = 412;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.Identifier:
                {
                  this.state = 410;
                  this.className();
                }
                break;
              case _CPP14Parser.Decltype:
                {
                  this.state = 411;
                  this.decltypeSpecifier();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 414;
            this.templateId();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  qualifiedId() {
    let _localctx = new QualifiedIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, _CPP14Parser.RULE_qualifiedId);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 417;
        this.nestedNameSpecifier(0);
        this.state = 419;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Template) {
          {
            this.state = 418;
            this.match(_CPP14Parser.Template);
          }
        }
        this.state = 421;
        this.unqualifiedId();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  nestedNameSpecifier(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new NestedNameSpecifierContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 10;
    this.enterRecursionRule(_localctx, 10, _CPP14Parser.RULE_nestedNameSpecifier, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 427;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
            case 1:
              {
                this.state = 424;
                this.theTypeName();
              }
              break;
            case 2:
              {
                this.state = 425;
                this.namespaceName();
              }
              break;
            case 3:
              {
                this.state = 426;
                this.decltypeSpecifier();
              }
              break;
          }
          this.state = 429;
          this.match(_CPP14Parser.Doublecolon);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 442;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new NestedNameSpecifierContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_nestedNameSpecifier);
                this.state = 431;
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                }
                this.state = 437;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                  case 1:
                    {
                      this.state = 432;
                      this.match(_CPP14Parser.Identifier);
                    }
                    break;
                  case 2:
                    {
                      this.state = 434;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === _CPP14Parser.Template) {
                        {
                          this.state = 433;
                          this.match(_CPP14Parser.Template);
                        }
                      }
                      this.state = 436;
                      this.simpleTemplateId();
                    }
                    break;
                }
                this.state = 439;
                this.match(_CPP14Parser.Doublecolon);
              }
            }
          }
          this.state = 444;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  lambdaExpression() {
    let _localctx = new LambdaExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, _CPP14Parser.RULE_lambdaExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 445;
        this.lambdaIntroducer();
        this.state = 447;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.LeftParen) {
          {
            this.state = 446;
            this.lambdaDeclarator();
          }
        }
        this.state = 449;
        this.compoundStatement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  lambdaIntroducer() {
    let _localctx = new LambdaIntroducerContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, _CPP14Parser.RULE_lambdaIntroducer);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 451;
        this.match(_CPP14Parser.LeftBracket);
        this.state = 453;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.This || _la === _CPP14Parser.And || _la === _CPP14Parser.Assign || _la === _CPP14Parser.Identifier) {
          {
            this.state = 452;
            this.lambdaCapture();
          }
        }
        this.state = 455;
        this.match(_CPP14Parser.RightBracket);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  lambdaCapture() {
    let _localctx = new LambdaCaptureContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, _CPP14Parser.RULE_lambdaCapture);
    let _la;
    try {
      this.state = 463;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 457;
            this.captureList();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 458;
            this.captureDefault();
            this.state = 461;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Comma) {
              {
                this.state = 459;
                this.match(_CPP14Parser.Comma);
                this.state = 460;
                this.captureList();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  captureDefault() {
    let _localctx = new CaptureDefaultContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, _CPP14Parser.RULE_captureDefault);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 465;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.And || _la === _CPP14Parser.Assign)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  captureList() {
    let _localctx = new CaptureListContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, _CPP14Parser.RULE_captureList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 467;
        this.capture();
        this.state = 472;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 468;
              this.match(_CPP14Parser.Comma);
              this.state = 469;
              this.capture();
            }
          }
          this.state = 474;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 476;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 475;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  capture() {
    let _localctx = new CaptureContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, _CPP14Parser.RULE_capture);
    try {
      this.state = 480;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 478;
            this.simpleCapture();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 479;
            this.initcapture();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleCapture() {
    let _localctx = new SimpleCaptureContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, _CPP14Parser.RULE_simpleCapture);
    let _la;
    try {
      this.state = 487;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.And:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 483;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.And) {
              {
                this.state = 482;
                this.match(_CPP14Parser.And);
              }
            }
            this.state = 485;
            this.match(_CPP14Parser.Identifier);
          }
          break;
        case _CPP14Parser.This:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 486;
            this.match(_CPP14Parser.This);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initcapture() {
    let _localctx = new InitcaptureContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, _CPP14Parser.RULE_initcapture);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 490;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.And) {
          {
            this.state = 489;
            this.match(_CPP14Parser.And);
          }
        }
        this.state = 492;
        this.match(_CPP14Parser.Identifier);
        this.state = 493;
        this.initializer();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  lambdaDeclarator() {
    let _localctx = new LambdaDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, _CPP14Parser.RULE_lambdaDeclarator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 495;
        this.match(_CPP14Parser.LeftParen);
        this.state = 497;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Double)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Explicit - 33 | 1 << _CPP14Parser.Extern - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Friend - 33 | 1 << _CPP14Parser.Inline - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Mutable - 33 | 1 << _CPP14Parser.Register - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Static - 33)) !== 0 || (_la - 66 & ~31) === 0 && (1 << _la - 66 & (1 << _CPP14Parser.Struct - 66 | 1 << _CPP14Parser.Thread_local - 66 | 1 << _CPP14Parser.Typedef - 66 | 1 << _CPP14Parser.Typename_ - 66 | 1 << _CPP14Parser.Union - 66 | 1 << _CPP14Parser.Unsigned - 66 | 1 << _CPP14Parser.Virtual - 66 | 1 << _CPP14Parser.Void - 66 | 1 << _CPP14Parser.Volatile - 66 | 1 << _CPP14Parser.Wchar - 66 | 1 << _CPP14Parser.LeftBracket - 66)) !== 0 || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
          {
            this.state = 496;
            this.parameterDeclarationClause();
          }
        }
        this.state = 499;
        this.match(_CPP14Parser.RightParen);
        this.state = 501;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Mutable) {
          {
            this.state = 500;
            this.match(_CPP14Parser.Mutable);
          }
        }
        this.state = 504;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Noexcept || _la === _CPP14Parser.Throw) {
          {
            this.state = 503;
            this.exceptionSpecification();
          }
        }
        this.state = 507;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 506;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 510;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Arrow) {
          {
            this.state = 509;
            this.trailingReturnType();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  postfixExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new PostfixExpressionContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 30;
    this.enterRecursionRule(_localctx, 30, _CPP14Parser.RULE_postfixExpression, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 542;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
          case 1:
            {
              this.state = 513;
              this.primaryExpression();
            }
            break;
          case 2:
            {
              this.state = 516;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case _CPP14Parser.Auto:
                case _CPP14Parser.Bool:
                case _CPP14Parser.Char:
                case _CPP14Parser.Char16:
                case _CPP14Parser.Char32:
                case _CPP14Parser.Decltype:
                case _CPP14Parser.Double:
                case _CPP14Parser.Float:
                case _CPP14Parser.Int:
                case _CPP14Parser.Long:
                case _CPP14Parser.Short:
                case _CPP14Parser.Signed:
                case _CPP14Parser.Unsigned:
                case _CPP14Parser.Void:
                case _CPP14Parser.Wchar:
                case _CPP14Parser.Doublecolon:
                case _CPP14Parser.Identifier:
                  {
                    this.state = 514;
                    this.simpleTypeSpecifier();
                  }
                  break;
                case _CPP14Parser.Typename_:
                  {
                    this.state = 515;
                    this.typeNameSpecifier();
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 524;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case _CPP14Parser.LeftParen:
                  {
                    this.state = 518;
                    this.match(_CPP14Parser.LeftParen);
                    this.state = 520;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.LeftBrace - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                      {
                        this.state = 519;
                        this.expressionList();
                      }
                    }
                    this.state = 522;
                    this.match(_CPP14Parser.RightParen);
                  }
                  break;
                case _CPP14Parser.LeftBrace:
                  {
                    this.state = 523;
                    this.bracedInitList();
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
            break;
          case 3:
            {
              this.state = 526;
              _la = this._input.LA(1);
              if (!(_la === _CPP14Parser.Const_cast || _la === _CPP14Parser.Dynamic_cast || _la === _CPP14Parser.Reinterpret_cast || _la === _CPP14Parser.Static_cast)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 527;
              this.match(_CPP14Parser.Less);
              this.state = 528;
              this.theTypeId();
              this.state = 529;
              this.match(_CPP14Parser.Greater);
              this.state = 530;
              this.match(_CPP14Parser.LeftParen);
              this.state = 531;
              this.expression();
              this.state = 532;
              this.match(_CPP14Parser.RightParen);
            }
            break;
          case 4:
            {
              this.state = 534;
              this.typeIdOfTheTypeId();
              this.state = 535;
              this.match(_CPP14Parser.LeftParen);
              this.state = 538;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                  {
                    this.state = 536;
                    this.expression();
                  }
                  break;
                case 2:
                  {
                    this.state = 537;
                    this.theTypeId();
                  }
                  break;
              }
              this.state = 540;
              this.match(_CPP14Parser.RightParen);
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 571;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 569;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_postfixExpression);
                    this.state = 544;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                    }
                    this.state = 545;
                    this.match(_CPP14Parser.LeftBracket);
                    this.state = 548;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case _CPP14Parser.IntegerLiteral:
                      case _CPP14Parser.CharacterLiteral:
                      case _CPP14Parser.FloatingLiteral:
                      case _CPP14Parser.StringLiteral:
                      case _CPP14Parser.BooleanLiteral:
                      case _CPP14Parser.PointerLiteral:
                      case _CPP14Parser.UserDefinedLiteral:
                      case _CPP14Parser.Alignof:
                      case _CPP14Parser.Auto:
                      case _CPP14Parser.Bool:
                      case _CPP14Parser.Char:
                      case _CPP14Parser.Char16:
                      case _CPP14Parser.Char32:
                      case _CPP14Parser.Const_cast:
                      case _CPP14Parser.Decltype:
                      case _CPP14Parser.Delete:
                      case _CPP14Parser.Double:
                      case _CPP14Parser.Dynamic_cast:
                      case _CPP14Parser.Float:
                      case _CPP14Parser.Int:
                      case _CPP14Parser.Long:
                      case _CPP14Parser.New:
                      case _CPP14Parser.Noexcept:
                      case _CPP14Parser.Operator:
                      case _CPP14Parser.Reinterpret_cast:
                      case _CPP14Parser.Short:
                      case _CPP14Parser.Signed:
                      case _CPP14Parser.Sizeof:
                      case _CPP14Parser.Static_cast:
                      case _CPP14Parser.This:
                      case _CPP14Parser.Throw:
                      case _CPP14Parser.Typeid_:
                      case _CPP14Parser.Typename_:
                      case _CPP14Parser.Unsigned:
                      case _CPP14Parser.Void:
                      case _CPP14Parser.Wchar:
                      case _CPP14Parser.LeftParen:
                      case _CPP14Parser.LeftBracket:
                      case _CPP14Parser.Plus:
                      case _CPP14Parser.Minus:
                      case _CPP14Parser.Star:
                      case _CPP14Parser.And:
                      case _CPP14Parser.Or:
                      case _CPP14Parser.Tilde:
                      case _CPP14Parser.Not:
                      case _CPP14Parser.PlusPlus:
                      case _CPP14Parser.MinusMinus:
                      case _CPP14Parser.Doublecolon:
                      case _CPP14Parser.Identifier:
                        {
                          this.state = 546;
                          this.expression();
                        }
                        break;
                      case _CPP14Parser.LeftBrace:
                        {
                          this.state = 547;
                          this.bracedInitList();
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 550;
                    this.match(_CPP14Parser.RightBracket);
                  }
                  break;
                case 2:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_postfixExpression);
                    this.state = 552;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                    }
                    this.state = 553;
                    this.match(_CPP14Parser.LeftParen);
                    this.state = 555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.LeftBrace - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                      {
                        this.state = 554;
                        this.expressionList();
                      }
                    }
                    this.state = 557;
                    this.match(_CPP14Parser.RightParen);
                  }
                  break;
                case 3:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_postfixExpression);
                    this.state = 558;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 559;
                    _la = this._input.LA(1);
                    if (!(_la === _CPP14Parser.Arrow || _la === _CPP14Parser.Dot)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 565;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                      case 1:
                        {
                          this.state = 561;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === _CPP14Parser.Template) {
                            {
                              this.state = 560;
                              this.match(_CPP14Parser.Template);
                            }
                          }
                          this.state = 563;
                          this.idExpression();
                        }
                        break;
                      case 2:
                        {
                          this.state = 564;
                          this.pseudoDestructorName();
                        }
                        break;
                    }
                  }
                  break;
                case 4:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_postfixExpression);
                    this.state = 567;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                    }
                    this.state = 568;
                    _la = this._input.LA(1);
                    if (!(_la === _CPP14Parser.PlusPlus || _la === _CPP14Parser.MinusMinus)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                  }
                  break;
              }
            }
          }
          this.state = 573;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  typeIdOfTheTypeId() {
    let _localctx = new TypeIdOfTheTypeIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, _CPP14Parser.RULE_typeIdOfTheTypeId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 574;
        this.match(_CPP14Parser.Typeid_);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  expressionList() {
    let _localctx = new ExpressionListContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, _CPP14Parser.RULE_expressionList);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 576;
        this.initializerList();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pseudoDestructorName() {
    let _localctx = new PseudoDestructorNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, _CPP14Parser.RULE_pseudoDestructorName);
    let _la;
    try {
      this.state = 597;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 579;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
              case 1:
                {
                  this.state = 578;
                  this.nestedNameSpecifier(0);
                }
                break;
            }
            this.state = 584;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Identifier) {
              {
                this.state = 581;
                this.theTypeName();
                this.state = 582;
                this.match(_CPP14Parser.Doublecolon);
              }
            }
            this.state = 586;
            this.match(_CPP14Parser.Tilde);
            this.state = 587;
            this.theTypeName();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 588;
            this.nestedNameSpecifier(0);
            this.state = 589;
            this.match(_CPP14Parser.Template);
            this.state = 590;
            this.simpleTemplateId();
            this.state = 591;
            this.match(_CPP14Parser.Doublecolon);
            this.state = 592;
            this.match(_CPP14Parser.Tilde);
            this.state = 593;
            this.theTypeName();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 595;
            this.match(_CPP14Parser.Tilde);
            this.state = 596;
            this.decltypeSpecifier();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  unaryExpression() {
    let _localctx = new UnaryExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, _CPP14Parser.RULE_unaryExpression);
    try {
      this.state = 626;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 599;
            this.postfixExpression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 604;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.PlusPlus:
                {
                  this.state = 600;
                  this.match(_CPP14Parser.PlusPlus);
                }
                break;
              case _CPP14Parser.MinusMinus:
                {
                  this.state = 601;
                  this.match(_CPP14Parser.MinusMinus);
                }
                break;
              case _CPP14Parser.Plus:
              case _CPP14Parser.Minus:
              case _CPP14Parser.Star:
              case _CPP14Parser.And:
              case _CPP14Parser.Or:
              case _CPP14Parser.Tilde:
              case _CPP14Parser.Not:
                {
                  this.state = 602;
                  this.unaryOperator();
                }
                break;
              case _CPP14Parser.Sizeof:
                {
                  this.state = 603;
                  this.match(_CPP14Parser.Sizeof);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 606;
            this.unaryExpression();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 607;
            this.match(_CPP14Parser.Sizeof);
            this.state = 616;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.LeftParen:
                {
                  this.state = 608;
                  this.match(_CPP14Parser.LeftParen);
                  this.state = 609;
                  this.theTypeId();
                  this.state = 610;
                  this.match(_CPP14Parser.RightParen);
                }
                break;
              case _CPP14Parser.Ellipsis:
                {
                  this.state = 612;
                  this.match(_CPP14Parser.Ellipsis);
                  this.state = 613;
                  this.match(_CPP14Parser.LeftParen);
                  this.state = 614;
                  this.match(_CPP14Parser.Identifier);
                  this.state = 615;
                  this.match(_CPP14Parser.RightParen);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 618;
            this.match(_CPP14Parser.Alignof);
            this.state = 619;
            this.match(_CPP14Parser.LeftParen);
            this.state = 620;
            this.theTypeId();
            this.state = 621;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 623;
            this.noExceptExpression();
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 624;
            this.newExpression();
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 625;
            this.deleteExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  unaryOperator() {
    let _localctx = new UnaryOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, _CPP14Parser.RULE_unaryOperator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 628;
        _la = this._input.LA(1);
        if (!((_la - 91 & ~31) === 0 && (1 << _la - 91 & (1 << _CPP14Parser.Plus - 91 | 1 << _CPP14Parser.Minus - 91 | 1 << _CPP14Parser.Star - 91 | 1 << _CPP14Parser.And - 91 | 1 << _CPP14Parser.Or - 91 | 1 << _CPP14Parser.Tilde - 91 | 1 << _CPP14Parser.Not - 91)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  newExpression() {
    let _localctx = new NewExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, _CPP14Parser.RULE_newExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 631;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Doublecolon) {
          {
            this.state = 630;
            this.match(_CPP14Parser.Doublecolon);
          }
        }
        this.state = 633;
        this.match(_CPP14Parser.New);
        this.state = 635;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
          case 1:
            {
              this.state = 634;
              this.newPlacement();
            }
            break;
        }
        this.state = 642;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Auto:
          case _CPP14Parser.Bool:
          case _CPP14Parser.Char:
          case _CPP14Parser.Char16:
          case _CPP14Parser.Char32:
          case _CPP14Parser.Class:
          case _CPP14Parser.Const:
          case _CPP14Parser.Decltype:
          case _CPP14Parser.Double:
          case _CPP14Parser.Enum:
          case _CPP14Parser.Float:
          case _CPP14Parser.Int:
          case _CPP14Parser.Long:
          case _CPP14Parser.Short:
          case _CPP14Parser.Signed:
          case _CPP14Parser.Struct:
          case _CPP14Parser.Typename_:
          case _CPP14Parser.Union:
          case _CPP14Parser.Unsigned:
          case _CPP14Parser.Void:
          case _CPP14Parser.Volatile:
          case _CPP14Parser.Wchar:
          case _CPP14Parser.Doublecolon:
          case _CPP14Parser.Identifier:
            {
              this.state = 637;
              this.newTypeId();
            }
            break;
          case _CPP14Parser.LeftParen:
            {
              {
                this.state = 638;
                this.match(_CPP14Parser.LeftParen);
                this.state = 639;
                this.theTypeId();
                this.state = 640;
                this.match(_CPP14Parser.RightParen);
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 645;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.LeftParen || _la === _CPP14Parser.LeftBrace) {
          {
            this.state = 644;
            this.newInitializer();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  newPlacement() {
    let _localctx = new NewPlacementContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, _CPP14Parser.RULE_newPlacement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 647;
        this.match(_CPP14Parser.LeftParen);
        this.state = 648;
        this.expressionList();
        this.state = 649;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  newTypeId() {
    let _localctx = new NewTypeIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, _CPP14Parser.RULE_newTypeId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 651;
        this.typeSpecifierSeq();
        this.state = 653;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
          case 1:
            {
              this.state = 652;
              this.newDeclarator();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  newDeclarator() {
    let _localctx = new NewDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, _CPP14Parser.RULE_newDeclarator);
    try {
      this.state = 660;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Star:
        case _CPP14Parser.And:
        case _CPP14Parser.AndAnd:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 655;
            this.pointerOperator();
            this.state = 657;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
              case 1:
                {
                  this.state = 656;
                  this.newDeclarator();
                }
                break;
            }
          }
          break;
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 659;
            this.noPointerNewDeclarator(0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noPointerNewDeclarator(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new NoPointerNewDeclaratorContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 50;
    this.enterRecursionRule(_localctx, 50, _CPP14Parser.RULE_noPointerNewDeclarator, _p);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 663;
          this.match(_CPP14Parser.LeftBracket);
          this.state = 664;
          this.expression();
          this.state = 665;
          this.match(_CPP14Parser.RightBracket);
          this.state = 667;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
            case 1:
              {
                this.state = 666;
                this.attributeSpecifierSeq();
              }
              break;
          }
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 678;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new NoPointerNewDeclaratorContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_noPointerNewDeclarator);
                this.state = 669;
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                }
                this.state = 670;
                this.match(_CPP14Parser.LeftBracket);
                this.state = 671;
                this.constantExpression();
                this.state = 672;
                this.match(_CPP14Parser.RightBracket);
                this.state = 674;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                  case 1:
                    {
                      this.state = 673;
                      this.attributeSpecifierSeq();
                    }
                    break;
                }
              }
            }
          }
          this.state = 680;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  newInitializer() {
    let _localctx = new NewInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, _CPP14Parser.RULE_newInitializer);
    let _la;
    try {
      this.state = 687;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftParen:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 681;
            this.match(_CPP14Parser.LeftParen);
            this.state = 683;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.LeftBrace - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
              {
                this.state = 682;
                this.expressionList();
              }
            }
            this.state = 685;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case _CPP14Parser.LeftBrace:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 686;
            this.bracedInitList();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  deleteExpression() {
    let _localctx = new DeleteExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, _CPP14Parser.RULE_deleteExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 690;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Doublecolon) {
          {
            this.state = 689;
            this.match(_CPP14Parser.Doublecolon);
          }
        }
        this.state = 692;
        this.match(_CPP14Parser.Delete);
        this.state = 695;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
          case 1:
            {
              this.state = 693;
              this.match(_CPP14Parser.LeftBracket);
              this.state = 694;
              this.match(_CPP14Parser.RightBracket);
            }
            break;
        }
        this.state = 697;
        this.castExpression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noExceptExpression() {
    let _localctx = new NoExceptExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, _CPP14Parser.RULE_noExceptExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 699;
        this.match(_CPP14Parser.Noexcept);
        this.state = 700;
        this.match(_CPP14Parser.LeftParen);
        this.state = 701;
        this.expression();
        this.state = 702;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  castExpression() {
    let _localctx = new CastExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, _CPP14Parser.RULE_castExpression);
    try {
      this.state = 710;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 704;
            this.unaryExpression();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 705;
            this.match(_CPP14Parser.LeftParen);
            this.state = 706;
            this.theTypeId();
            this.state = 707;
            this.match(_CPP14Parser.RightParen);
            this.state = 708;
            this.castExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pointerMemberExpression() {
    let _localctx = new PointerMemberExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, _CPP14Parser.RULE_pointerMemberExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 712;
        this.castExpression();
        this.state = 717;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.ArrowStar || _la === _CPP14Parser.DotStar) {
          {
            {
              this.state = 713;
              _la = this._input.LA(1);
              if (!(_la === _CPP14Parser.ArrowStar || _la === _CPP14Parser.DotStar)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 714;
              this.castExpression();
            }
          }
          this.state = 719;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  multiplicativeExpression() {
    let _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, _CPP14Parser.RULE_multiplicativeExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 720;
        this.pointerMemberExpression();
        this.state = 725;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la - 93 & ~31) === 0 && (1 << _la - 93 & (1 << _CPP14Parser.Star - 93 | 1 << _CPP14Parser.Div - 93 | 1 << _CPP14Parser.Mod - 93)) !== 0) {
          {
            {
              this.state = 721;
              _la = this._input.LA(1);
              if (!((_la - 93 & ~31) === 0 && (1 << _la - 93 & (1 << _CPP14Parser.Star - 93 | 1 << _CPP14Parser.Div - 93 | 1 << _CPP14Parser.Mod - 93)) !== 0)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 722;
              this.pointerMemberExpression();
            }
          }
          this.state = 727;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  additiveExpression() {
    let _localctx = new AdditiveExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, _CPP14Parser.RULE_additiveExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 728;
        this.multiplicativeExpression();
        this.state = 733;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Plus || _la === _CPP14Parser.Minus) {
          {
            {
              this.state = 729;
              _la = this._input.LA(1);
              if (!(_la === _CPP14Parser.Plus || _la === _CPP14Parser.Minus)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 730;
              this.multiplicativeExpression();
            }
          }
          this.state = 735;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  shiftExpression() {
    let _localctx = new ShiftExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, _CPP14Parser.RULE_shiftExpression);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 736;
        this.additiveExpression();
        this.state = 742;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 737;
                this.shiftOperator();
                this.state = 738;
                this.additiveExpression();
              }
            }
          }
          this.state = 744;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  shiftOperator() {
    let _localctx = new ShiftOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, _CPP14Parser.RULE_shiftOperator);
    try {
      this.state = 749;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Greater:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 745;
            this.match(_CPP14Parser.Greater);
            this.state = 746;
            this.match(_CPP14Parser.Greater);
          }
          break;
        case _CPP14Parser.Less:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 747;
            this.match(_CPP14Parser.Less);
            this.state = 748;
            this.match(_CPP14Parser.Less);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  relationalExpression() {
    let _localctx = new RelationalExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, _CPP14Parser.RULE_relationalExpression);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 751;
        this.shiftExpression();
        this.state = 756;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 752;
                _la = this._input.LA(1);
                if (!((_la - 102 & ~31) === 0 && (1 << _la - 102 & (1 << _CPP14Parser.Less - 102 | 1 << _CPP14Parser.Greater - 102 | 1 << _CPP14Parser.LessEqual - 102 | 1 << _CPP14Parser.GreaterEqual - 102)) !== 0)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }
                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 753;
                this.shiftExpression();
              }
            }
          }
          this.state = 758;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  equalityExpression() {
    let _localctx = new EqualityExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, _CPP14Parser.RULE_equalityExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 759;
        this.relationalExpression();
        this.state = 764;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Equal || _la === _CPP14Parser.NotEqual) {
          {
            {
              this.state = 760;
              _la = this._input.LA(1);
              if (!(_la === _CPP14Parser.Equal || _la === _CPP14Parser.NotEqual)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 761;
              this.relationalExpression();
            }
          }
          this.state = 766;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  andExpression() {
    let _localctx = new AndExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, _CPP14Parser.RULE_andExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 767;
        this.equalityExpression();
        this.state = 772;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.And) {
          {
            {
              this.state = 768;
              this.match(_CPP14Parser.And);
              this.state = 769;
              this.equalityExpression();
            }
          }
          this.state = 774;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  exclusiveOrExpression() {
    let _localctx = new ExclusiveOrExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, _CPP14Parser.RULE_exclusiveOrExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 775;
        this.andExpression();
        this.state = 780;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Caret) {
          {
            {
              this.state = 776;
              this.match(_CPP14Parser.Caret);
              this.state = 777;
              this.andExpression();
            }
          }
          this.state = 782;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  inclusiveOrExpression() {
    let _localctx = new InclusiveOrExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, _CPP14Parser.RULE_inclusiveOrExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 783;
        this.exclusiveOrExpression();
        this.state = 788;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Or) {
          {
            {
              this.state = 784;
              this.match(_CPP14Parser.Or);
              this.state = 785;
              this.exclusiveOrExpression();
            }
          }
          this.state = 790;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  logicalAndExpression() {
    let _localctx = new LogicalAndExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, _CPP14Parser.RULE_logicalAndExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 791;
        this.inclusiveOrExpression();
        this.state = 796;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.AndAnd) {
          {
            {
              this.state = 792;
              this.match(_CPP14Parser.AndAnd);
              this.state = 793;
              this.inclusiveOrExpression();
            }
          }
          this.state = 798;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  logicalOrExpression() {
    let _localctx = new LogicalOrExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, _CPP14Parser.RULE_logicalOrExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 799;
        this.logicalAndExpression();
        this.state = 804;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.OrOr) {
          {
            {
              this.state = 800;
              this.match(_CPP14Parser.OrOr);
              this.state = 801;
              this.logicalAndExpression();
            }
          }
          this.state = 806;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  conditionalExpression() {
    let _localctx = new ConditionalExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, _CPP14Parser.RULE_conditionalExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 807;
        this.logicalOrExpression();
        this.state = 813;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Question) {
          {
            this.state = 808;
            this.match(_CPP14Parser.Question);
            this.state = 809;
            this.expression();
            this.state = 810;
            this.match(_CPP14Parser.Colon);
            this.state = 811;
            this.assignmentExpression();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  assignmentExpression() {
    let _localctx = new AssignmentExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, _CPP14Parser.RULE_assignmentExpression);
    try {
      this.state = 821;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 815;
            this.conditionalExpression();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 816;
            this.logicalOrExpression();
            this.state = 817;
            this.assignmentOperator();
            this.state = 818;
            this.initializerClause();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 820;
            this.throwExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  assignmentOperator() {
    let _localctx = new AssignmentOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, _CPP14Parser.RULE_assignmentOperator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 823;
        _la = this._input.LA(1);
        if (!((_la - 101 & ~31) === 0 && (1 << _la - 101 & (1 << _CPP14Parser.Assign - 101 | 1 << _CPP14Parser.PlusAssign - 101 | 1 << _CPP14Parser.MinusAssign - 101 | 1 << _CPP14Parser.StarAssign - 101 | 1 << _CPP14Parser.DivAssign - 101 | 1 << _CPP14Parser.ModAssign - 101 | 1 << _CPP14Parser.XorAssign - 101 | 1 << _CPP14Parser.AndAssign - 101 | 1 << _CPP14Parser.OrAssign - 101 | 1 << _CPP14Parser.LeftShiftAssign - 101 | 1 << _CPP14Parser.RightShiftAssign - 101)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  expression() {
    let _localctx = new ExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, _CPP14Parser.RULE_expression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 825;
        this.assignmentExpression();
        this.state = 830;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 826;
              this.match(_CPP14Parser.Comma);
              this.state = 827;
              this.assignmentExpression();
            }
          }
          this.state = 832;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  constantExpression() {
    let _localctx = new ConstantExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, _CPP14Parser.RULE_constantExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 833;
        this.conditionalExpression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  statement() {
    let _localctx = new StatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, _CPP14Parser.RULE_statement);
    try {
      this.state = 848;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 835;
            this.labeledStatement();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 837;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
              case 1:
                {
                  this.state = 836;
                  this.attributeSpecifierSeq();
                }
                break;
            }
            this.state = 845;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.IntegerLiteral:
              case _CPP14Parser.CharacterLiteral:
              case _CPP14Parser.FloatingLiteral:
              case _CPP14Parser.StringLiteral:
              case _CPP14Parser.BooleanLiteral:
              case _CPP14Parser.PointerLiteral:
              case _CPP14Parser.UserDefinedLiteral:
              case _CPP14Parser.Alignof:
              case _CPP14Parser.Auto:
              case _CPP14Parser.Bool:
              case _CPP14Parser.Char:
              case _CPP14Parser.Char16:
              case _CPP14Parser.Char32:
              case _CPP14Parser.Const_cast:
              case _CPP14Parser.Decltype:
              case _CPP14Parser.Delete:
              case _CPP14Parser.Double:
              case _CPP14Parser.Dynamic_cast:
              case _CPP14Parser.Float:
              case _CPP14Parser.Int:
              case _CPP14Parser.Long:
              case _CPP14Parser.New:
              case _CPP14Parser.Noexcept:
              case _CPP14Parser.Operator:
              case _CPP14Parser.Reinterpret_cast:
              case _CPP14Parser.Short:
              case _CPP14Parser.Signed:
              case _CPP14Parser.Sizeof:
              case _CPP14Parser.Static_cast:
              case _CPP14Parser.This:
              case _CPP14Parser.Throw:
              case _CPP14Parser.Typeid_:
              case _CPP14Parser.Typename_:
              case _CPP14Parser.Unsigned:
              case _CPP14Parser.Void:
              case _CPP14Parser.Wchar:
              case _CPP14Parser.LeftParen:
              case _CPP14Parser.LeftBracket:
              case _CPP14Parser.Plus:
              case _CPP14Parser.Minus:
              case _CPP14Parser.Star:
              case _CPP14Parser.And:
              case _CPP14Parser.Or:
              case _CPP14Parser.Tilde:
              case _CPP14Parser.Not:
              case _CPP14Parser.PlusPlus:
              case _CPP14Parser.MinusMinus:
              case _CPP14Parser.Doublecolon:
              case _CPP14Parser.Semi:
              case _CPP14Parser.Identifier:
                {
                  this.state = 839;
                  this.expressionStatement();
                }
                break;
              case _CPP14Parser.LeftBrace:
                {
                  this.state = 840;
                  this.compoundStatement();
                }
                break;
              case _CPP14Parser.If:
              case _CPP14Parser.Switch:
                {
                  this.state = 841;
                  this.selectionStatement();
                }
                break;
              case _CPP14Parser.Do:
              case _CPP14Parser.For:
              case _CPP14Parser.While:
                {
                  this.state = 842;
                  this.iterationStatement();
                }
                break;
              case _CPP14Parser.Break:
              case _CPP14Parser.Continue:
              case _CPP14Parser.Goto:
              case _CPP14Parser.Return:
                {
                  this.state = 843;
                  this.jumpStatement();
                }
                break;
              case _CPP14Parser.Try:
                {
                  this.state = 844;
                  this.tryBlock();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 847;
            this.declarationStatement();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  labeledStatement() {
    let _localctx = new LabeledStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, _CPP14Parser.RULE_labeledStatement);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 851;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 850;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 857;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Identifier:
            {
              this.state = 853;
              this.match(_CPP14Parser.Identifier);
            }
            break;
          case _CPP14Parser.Case:
            {
              this.state = 854;
              this.match(_CPP14Parser.Case);
              this.state = 855;
              this.constantExpression();
            }
            break;
          case _CPP14Parser.Default:
            {
              this.state = 856;
              this.match(_CPP14Parser.Default);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 859;
        this.match(_CPP14Parser.Colon);
        this.state = 860;
        this.statement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  expressionStatement() {
    let _localctx = new ExpressionStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, _CPP14Parser.RULE_expressionStatement);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 863;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
          {
            this.state = 862;
            this.expression();
          }
        }
        this.state = 865;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  compoundStatement() {
    let _localctx = new CompoundStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, _CPP14Parser.RULE_compoundStatement);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 867;
        this.match(_CPP14Parser.LeftBrace);
        this.state = 869;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Asm | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Break | 1 << _CPP14Parser.Case | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Continue | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Default | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Do | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Explicit - 33 | 1 << _CPP14Parser.Extern - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.For - 33 | 1 << _CPP14Parser.Friend - 33 | 1 << _CPP14Parser.Goto - 33 | 1 << _CPP14Parser.If - 33 | 1 << _CPP14Parser.Inline - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Mutable - 33 | 1 << _CPP14Parser.Namespace - 33 | 1 << _CPP14Parser.New - 33 | 1 << _CPP14Parser.Noexcept - 33 | 1 << _CPP14Parser.Operator - 33 | 1 << _CPP14Parser.Register - 33 | 1 << _CPP14Parser.Reinterpret_cast - 33 | 1 << _CPP14Parser.Return - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Sizeof - 33 | 1 << _CPP14Parser.Static - 33 | 1 << _CPP14Parser.Static_assert - 33)) !== 0 || (_la - 65 & ~31) === 0 && (1 << _la - 65 & (1 << _CPP14Parser.Static_cast - 65 | 1 << _CPP14Parser.Struct - 65 | 1 << _CPP14Parser.Switch - 65 | 1 << _CPP14Parser.This - 65 | 1 << _CPP14Parser.Thread_local - 65 | 1 << _CPP14Parser.Throw - 65 | 1 << _CPP14Parser.Try - 65 | 1 << _CPP14Parser.Typedef - 65 | 1 << _CPP14Parser.Typeid_ - 65 | 1 << _CPP14Parser.Typename_ - 65 | 1 << _CPP14Parser.Union - 65 | 1 << _CPP14Parser.Unsigned - 65 | 1 << _CPP14Parser.Using - 65 | 1 << _CPP14Parser.Virtual - 65 | 1 << _CPP14Parser.Void - 65 | 1 << _CPP14Parser.Volatile - 65 | 1 << _CPP14Parser.Wchar - 65 | 1 << _CPP14Parser.While - 65 | 1 << _CPP14Parser.LeftParen - 65 | 1 << _CPP14Parser.LeftBracket - 65 | 1 << _CPP14Parser.LeftBrace - 65 | 1 << _CPP14Parser.Plus - 65 | 1 << _CPP14Parser.Minus - 65 | 1 << _CPP14Parser.Star - 65)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << _CPP14Parser.And - 97 | 1 << _CPP14Parser.Or - 97 | 1 << _CPP14Parser.Tilde - 97 | 1 << _CPP14Parser.Not - 97 | 1 << _CPP14Parser.AndAnd - 97 | 1 << _CPP14Parser.PlusPlus - 97 | 1 << _CPP14Parser.MinusMinus - 97 | 1 << _CPP14Parser.Doublecolon - 97 | 1 << _CPP14Parser.Semi - 97)) !== 0 || _la === _CPP14Parser.Ellipsis || _la === _CPP14Parser.Identifier) {
          {
            this.state = 868;
            this.statementSeq();
          }
        }
        this.state = 871;
        this.match(_CPP14Parser.RightBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  statementSeq() {
    let _localctx = new StatementSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, _CPP14Parser.RULE_statementSeq);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 874;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 873;
              this.statement();
            }
          }
          this.state = 876;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Asm | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Break | 1 << _CPP14Parser.Case | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Continue | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Default | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Do | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Explicit - 33 | 1 << _CPP14Parser.Extern - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.For - 33 | 1 << _CPP14Parser.Friend - 33 | 1 << _CPP14Parser.Goto - 33 | 1 << _CPP14Parser.If - 33 | 1 << _CPP14Parser.Inline - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Mutable - 33 | 1 << _CPP14Parser.Namespace - 33 | 1 << _CPP14Parser.New - 33 | 1 << _CPP14Parser.Noexcept - 33 | 1 << _CPP14Parser.Operator - 33 | 1 << _CPP14Parser.Register - 33 | 1 << _CPP14Parser.Reinterpret_cast - 33 | 1 << _CPP14Parser.Return - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Sizeof - 33 | 1 << _CPP14Parser.Static - 33 | 1 << _CPP14Parser.Static_assert - 33)) !== 0 || (_la - 65 & ~31) === 0 && (1 << _la - 65 & (1 << _CPP14Parser.Static_cast - 65 | 1 << _CPP14Parser.Struct - 65 | 1 << _CPP14Parser.Switch - 65 | 1 << _CPP14Parser.This - 65 | 1 << _CPP14Parser.Thread_local - 65 | 1 << _CPP14Parser.Throw - 65 | 1 << _CPP14Parser.Try - 65 | 1 << _CPP14Parser.Typedef - 65 | 1 << _CPP14Parser.Typeid_ - 65 | 1 << _CPP14Parser.Typename_ - 65 | 1 << _CPP14Parser.Union - 65 | 1 << _CPP14Parser.Unsigned - 65 | 1 << _CPP14Parser.Using - 65 | 1 << _CPP14Parser.Virtual - 65 | 1 << _CPP14Parser.Void - 65 | 1 << _CPP14Parser.Volatile - 65 | 1 << _CPP14Parser.Wchar - 65 | 1 << _CPP14Parser.While - 65 | 1 << _CPP14Parser.LeftParen - 65 | 1 << _CPP14Parser.LeftBracket - 65 | 1 << _CPP14Parser.LeftBrace - 65 | 1 << _CPP14Parser.Plus - 65 | 1 << _CPP14Parser.Minus - 65 | 1 << _CPP14Parser.Star - 65)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << _CPP14Parser.And - 97 | 1 << _CPP14Parser.Or - 97 | 1 << _CPP14Parser.Tilde - 97 | 1 << _CPP14Parser.Not - 97 | 1 << _CPP14Parser.AndAnd - 97 | 1 << _CPP14Parser.PlusPlus - 97 | 1 << _CPP14Parser.MinusMinus - 97 | 1 << _CPP14Parser.Doublecolon - 97 | 1 << _CPP14Parser.Semi - 97)) !== 0 || _la === _CPP14Parser.Ellipsis || _la === _CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  selectionStatement() {
    let _localctx = new SelectionStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, _CPP14Parser.RULE_selectionStatement);
    try {
      this.state = 893;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.If:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 878;
            this.match(_CPP14Parser.If);
            this.state = 879;
            this.match(_CPP14Parser.LeftParen);
            this.state = 880;
            this.condition();
            this.state = 881;
            this.match(_CPP14Parser.RightParen);
            this.state = 882;
            this.statement();
            this.state = 885;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
              case 1:
                {
                  this.state = 883;
                  this.match(_CPP14Parser.Else);
                  this.state = 884;
                  this.statement();
                }
                break;
            }
          }
          break;
        case _CPP14Parser.Switch:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 887;
            this.match(_CPP14Parser.Switch);
            this.state = 888;
            this.match(_CPP14Parser.LeftParen);
            this.state = 889;
            this.condition();
            this.state = 890;
            this.match(_CPP14Parser.RightParen);
            this.state = 891;
            this.statement();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  condition() {
    let _localctx = new ConditionContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, _CPP14Parser.RULE_condition);
    let _la;
    try {
      this.state = 906;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 895;
            this.expression();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 897;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
              {
                this.state = 896;
                this.attributeSpecifierSeq();
              }
            }
            this.state = 899;
            this.declSpecifierSeq();
            this.state = 900;
            this.declarator();
            this.state = 904;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.Assign:
                {
                  this.state = 901;
                  this.match(_CPP14Parser.Assign);
                  this.state = 902;
                  this.initializerClause();
                }
                break;
              case _CPP14Parser.LeftBrace:
                {
                  this.state = 903;
                  this.bracedInitList();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  iterationStatement() {
    let _localctx = new IterationStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, _CPP14Parser.RULE_iterationStatement);
    let _la;
    try {
      this.state = 941;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.While:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 908;
            this.match(_CPP14Parser.While);
            this.state = 909;
            this.match(_CPP14Parser.LeftParen);
            this.state = 910;
            this.condition();
            this.state = 911;
            this.match(_CPP14Parser.RightParen);
            this.state = 912;
            this.statement();
          }
          break;
        case _CPP14Parser.Do:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 914;
            this.match(_CPP14Parser.Do);
            this.state = 915;
            this.statement();
            this.state = 916;
            this.match(_CPP14Parser.While);
            this.state = 917;
            this.match(_CPP14Parser.LeftParen);
            this.state = 918;
            this.expression();
            this.state = 919;
            this.match(_CPP14Parser.RightParen);
            this.state = 920;
            this.match(_CPP14Parser.Semi);
          }
          break;
        case _CPP14Parser.For:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 922;
            this.match(_CPP14Parser.For);
            this.state = 923;
            this.match(_CPP14Parser.LeftParen);
            this.state = 936;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
              case 1:
                {
                  this.state = 924;
                  this.forInitStatement();
                  this.state = 926;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Explicit - 33 | 1 << _CPP14Parser.Extern - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Friend - 33 | 1 << _CPP14Parser.Inline - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Mutable - 33 | 1 << _CPP14Parser.New - 33 | 1 << _CPP14Parser.Noexcept - 33 | 1 << _CPP14Parser.Operator - 33 | 1 << _CPP14Parser.Register - 33 | 1 << _CPP14Parser.Reinterpret_cast - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Sizeof - 33 | 1 << _CPP14Parser.Static - 33)) !== 0 || (_la - 65 & ~31) === 0 && (1 << _la - 65 & (1 << _CPP14Parser.Static_cast - 65 | 1 << _CPP14Parser.Struct - 65 | 1 << _CPP14Parser.This - 65 | 1 << _CPP14Parser.Thread_local - 65 | 1 << _CPP14Parser.Throw - 65 | 1 << _CPP14Parser.Typedef - 65 | 1 << _CPP14Parser.Typeid_ - 65 | 1 << _CPP14Parser.Typename_ - 65 | 1 << _CPP14Parser.Union - 65 | 1 << _CPP14Parser.Unsigned - 65 | 1 << _CPP14Parser.Virtual - 65 | 1 << _CPP14Parser.Void - 65 | 1 << _CPP14Parser.Volatile - 65 | 1 << _CPP14Parser.Wchar - 65 | 1 << _CPP14Parser.LeftParen - 65 | 1 << _CPP14Parser.LeftBracket - 65 | 1 << _CPP14Parser.Plus - 65 | 1 << _CPP14Parser.Minus - 65 | 1 << _CPP14Parser.Star - 65)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << _CPP14Parser.And - 97 | 1 << _CPP14Parser.Or - 97 | 1 << _CPP14Parser.Tilde - 97 | 1 << _CPP14Parser.Not - 97 | 1 << _CPP14Parser.PlusPlus - 97 | 1 << _CPP14Parser.MinusMinus - 97 | 1 << _CPP14Parser.Doublecolon - 97)) !== 0 || _la === _CPP14Parser.Identifier) {
                    {
                      this.state = 925;
                      this.condition();
                    }
                  }
                  this.state = 928;
                  this.match(_CPP14Parser.Semi);
                  this.state = 930;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                    {
                      this.state = 929;
                      this.expression();
                    }
                  }
                }
                break;
              case 2:
                {
                  this.state = 932;
                  this.forRangeDeclaration();
                  this.state = 933;
                  this.match(_CPP14Parser.Colon);
                  this.state = 934;
                  this.forRangeInitializer();
                }
                break;
            }
            this.state = 938;
            this.match(_CPP14Parser.RightParen);
            this.state = 939;
            this.statement();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  forInitStatement() {
    let _localctx = new ForInitStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, _CPP14Parser.RULE_forInitStatement);
    try {
      this.state = 945;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 943;
            this.expressionStatement();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 944;
            this.simpleDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  forRangeDeclaration() {
    let _localctx = new ForRangeDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 112, _CPP14Parser.RULE_forRangeDeclaration);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 948;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 947;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 950;
        this.declSpecifierSeq();
        this.state = 951;
        this.declarator();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  forRangeInitializer() {
    let _localctx = new ForRangeInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 114, _CPP14Parser.RULE_forRangeInitializer);
    try {
      this.state = 955;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.IntegerLiteral:
        case _CPP14Parser.CharacterLiteral:
        case _CPP14Parser.FloatingLiteral:
        case _CPP14Parser.StringLiteral:
        case _CPP14Parser.BooleanLiteral:
        case _CPP14Parser.PointerLiteral:
        case _CPP14Parser.UserDefinedLiteral:
        case _CPP14Parser.Alignof:
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Const_cast:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Delete:
        case _CPP14Parser.Double:
        case _CPP14Parser.Dynamic_cast:
        case _CPP14Parser.Float:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.New:
        case _CPP14Parser.Noexcept:
        case _CPP14Parser.Operator:
        case _CPP14Parser.Reinterpret_cast:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Sizeof:
        case _CPP14Parser.Static_cast:
        case _CPP14Parser.This:
        case _CPP14Parser.Throw:
        case _CPP14Parser.Typeid_:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Void:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.LeftParen:
        case _CPP14Parser.LeftBracket:
        case _CPP14Parser.Plus:
        case _CPP14Parser.Minus:
        case _CPP14Parser.Star:
        case _CPP14Parser.And:
        case _CPP14Parser.Or:
        case _CPP14Parser.Tilde:
        case _CPP14Parser.Not:
        case _CPP14Parser.PlusPlus:
        case _CPP14Parser.MinusMinus:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 953;
            this.expression();
          }
          break;
        case _CPP14Parser.LeftBrace:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 954;
            this.bracedInitList();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  jumpStatement() {
    let _localctx = new JumpStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, _CPP14Parser.RULE_jumpStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 966;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Break:
            {
              this.state = 957;
              this.match(_CPP14Parser.Break);
            }
            break;
          case _CPP14Parser.Continue:
            {
              this.state = 958;
              this.match(_CPP14Parser.Continue);
            }
            break;
          case _CPP14Parser.Return:
            {
              this.state = 959;
              this.match(_CPP14Parser.Return);
              this.state = 962;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case _CPP14Parser.IntegerLiteral:
                case _CPP14Parser.CharacterLiteral:
                case _CPP14Parser.FloatingLiteral:
                case _CPP14Parser.StringLiteral:
                case _CPP14Parser.BooleanLiteral:
                case _CPP14Parser.PointerLiteral:
                case _CPP14Parser.UserDefinedLiteral:
                case _CPP14Parser.Alignof:
                case _CPP14Parser.Auto:
                case _CPP14Parser.Bool:
                case _CPP14Parser.Char:
                case _CPP14Parser.Char16:
                case _CPP14Parser.Char32:
                case _CPP14Parser.Const_cast:
                case _CPP14Parser.Decltype:
                case _CPP14Parser.Delete:
                case _CPP14Parser.Double:
                case _CPP14Parser.Dynamic_cast:
                case _CPP14Parser.Float:
                case _CPP14Parser.Int:
                case _CPP14Parser.Long:
                case _CPP14Parser.New:
                case _CPP14Parser.Noexcept:
                case _CPP14Parser.Operator:
                case _CPP14Parser.Reinterpret_cast:
                case _CPP14Parser.Short:
                case _CPP14Parser.Signed:
                case _CPP14Parser.Sizeof:
                case _CPP14Parser.Static_cast:
                case _CPP14Parser.This:
                case _CPP14Parser.Throw:
                case _CPP14Parser.Typeid_:
                case _CPP14Parser.Typename_:
                case _CPP14Parser.Unsigned:
                case _CPP14Parser.Void:
                case _CPP14Parser.Wchar:
                case _CPP14Parser.LeftParen:
                case _CPP14Parser.LeftBracket:
                case _CPP14Parser.Plus:
                case _CPP14Parser.Minus:
                case _CPP14Parser.Star:
                case _CPP14Parser.And:
                case _CPP14Parser.Or:
                case _CPP14Parser.Tilde:
                case _CPP14Parser.Not:
                case _CPP14Parser.PlusPlus:
                case _CPP14Parser.MinusMinus:
                case _CPP14Parser.Doublecolon:
                case _CPP14Parser.Identifier:
                  {
                    this.state = 960;
                    this.expression();
                  }
                  break;
                case _CPP14Parser.LeftBrace:
                  {
                    this.state = 961;
                    this.bracedInitList();
                  }
                  break;
                case _CPP14Parser.Semi:
                  break;
                default:
                  break;
              }
            }
            break;
          case _CPP14Parser.Goto:
            {
              this.state = 964;
              this.match(_CPP14Parser.Goto);
              this.state = 965;
              this.match(_CPP14Parser.Identifier);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 968;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declarationStatement() {
    let _localctx = new DeclarationStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 118, _CPP14Parser.RULE_declarationStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 970;
        this.blockDeclaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declarationseq() {
    let _localctx = new DeclarationseqContext(this._ctx, this.state);
    this.enterRule(_localctx, 120, _CPP14Parser.RULE_declarationseq);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 973;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 972;
              this.declaration();
            }
          }
          this.state = 975;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Asm - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Namespace - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declaration() {
    let _localctx = new DeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 122, _CPP14Parser.RULE_declaration);
    try {
      this.state = 986;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 977;
            this.blockDeclaration();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 978;
            this.functionDefinition();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 979;
            this.templateDeclaration();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 980;
            this.explicitInstantiation();
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 981;
            this.explicitSpecialization();
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 982;
            this.linkageSpecification();
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 983;
            this.namespaceDefinition();
          }
          break;
        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 984;
            this.emptyDeclaration();
          }
          break;
        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 985;
            this.attributeDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  blockDeclaration() {
    let _localctx = new BlockDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, _CPP14Parser.RULE_blockDeclaration);
    try {
      this.state = 996;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 988;
            this.simpleDeclaration();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 989;
            this.asmDefinition();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 990;
            this.namespaceAliasDefinition();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 991;
            this.usingDeclaration();
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 992;
            this.usingDirective();
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 993;
            this.staticAssertDeclaration();
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 994;
            this.aliasDeclaration();
          }
          break;
        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 995;
            this.opaqueEnumDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  aliasDeclaration() {
    let _localctx = new AliasDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 126, _CPP14Parser.RULE_aliasDeclaration);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 998;
        this.match(_CPP14Parser.Using);
        this.state = 999;
        this.match(_CPP14Parser.Identifier);
        this.state = 1001;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1e3;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1003;
        this.match(_CPP14Parser.Assign);
        this.state = 1004;
        this.theTypeId();
        this.state = 1005;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleDeclaration() {
    let _localctx = new SimpleDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 128, _CPP14Parser.RULE_simpleDeclaration);
    let _la;
    try {
      this.state = 1021;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Class:
        case _CPP14Parser.Const:
        case _CPP14Parser.Constexpr:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Double:
        case _CPP14Parser.Enum:
        case _CPP14Parser.Explicit:
        case _CPP14Parser.Extern:
        case _CPP14Parser.Float:
        case _CPP14Parser.Friend:
        case _CPP14Parser.Inline:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.Mutable:
        case _CPP14Parser.Operator:
        case _CPP14Parser.Register:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Static:
        case _CPP14Parser.Struct:
        case _CPP14Parser.Thread_local:
        case _CPP14Parser.Typedef:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Union:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Virtual:
        case _CPP14Parser.Void:
        case _CPP14Parser.Volatile:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.LeftParen:
        case _CPP14Parser.Star:
        case _CPP14Parser.And:
        case _CPP14Parser.Tilde:
        case _CPP14Parser.AndAnd:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Semi:
        case _CPP14Parser.Ellipsis:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1008;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
              case 1:
                {
                  this.state = 1007;
                  this.declSpecifierSeq();
                }
                break;
            }
            this.state = 1011;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Decltype || _la === _CPP14Parser.Operator || (_la - 85 & ~31) === 0 && (1 << _la - 85 & (1 << _CPP14Parser.LeftParen - 85 | 1 << _CPP14Parser.Star - 85 | 1 << _CPP14Parser.And - 85 | 1 << _CPP14Parser.Tilde - 85)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
              {
                this.state = 1010;
                this.initDeclaratorList();
              }
            }
            this.state = 1013;
            this.match(_CPP14Parser.Semi);
          }
          break;
        case _CPP14Parser.Alignas:
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1014;
            this.attributeSpecifierSeq();
            this.state = 1016;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
              case 1:
                {
                  this.state = 1015;
                  this.declSpecifierSeq();
                }
                break;
            }
            this.state = 1018;
            this.initDeclaratorList();
            this.state = 1019;
            this.match(_CPP14Parser.Semi);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  staticAssertDeclaration() {
    let _localctx = new StaticAssertDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 130, _CPP14Parser.RULE_staticAssertDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1023;
        this.match(_CPP14Parser.Static_assert);
        this.state = 1024;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1025;
        this.constantExpression();
        this.state = 1026;
        this.match(_CPP14Parser.Comma);
        this.state = 1027;
        this.match(_CPP14Parser.StringLiteral);
        this.state = 1028;
        this.match(_CPP14Parser.RightParen);
        this.state = 1029;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  emptyDeclaration() {
    let _localctx = new EmptyDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 132, _CPP14Parser.RULE_emptyDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1031;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeDeclaration() {
    let _localctx = new AttributeDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, _CPP14Parser.RULE_attributeDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1033;
        this.attributeSpecifierSeq();
        this.state = 1034;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declSpecifier() {
    let _localctx = new DeclSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, _CPP14Parser.RULE_declSpecifier);
    try {
      this.state = 1042;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Extern:
        case _CPP14Parser.Mutable:
        case _CPP14Parser.Register:
        case _CPP14Parser.Static:
        case _CPP14Parser.Thread_local:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1036;
            this.storageClassSpecifier();
          }
          break;
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Class:
        case _CPP14Parser.Const:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Double:
        case _CPP14Parser.Enum:
        case _CPP14Parser.Float:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Struct:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Union:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Void:
        case _CPP14Parser.Volatile:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1037;
            this.typeSpecifier();
          }
          break;
        case _CPP14Parser.Explicit:
        case _CPP14Parser.Inline:
        case _CPP14Parser.Virtual:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1038;
            this.functionSpecifier();
          }
          break;
        case _CPP14Parser.Friend:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1039;
            this.match(_CPP14Parser.Friend);
          }
          break;
        case _CPP14Parser.Typedef:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1040;
            this.match(_CPP14Parser.Typedef);
          }
          break;
        case _CPP14Parser.Constexpr:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1041;
            this.match(_CPP14Parser.Constexpr);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declSpecifierSeq() {
    let _localctx = new DeclSpecifierSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, _CPP14Parser.RULE_declSpecifierSeq);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1045;
        this._errHandler.sync(this);
        _alt = 1 + 1;
        do {
          switch (_alt) {
            case 1 + 1:
              {
                {
                  this.state = 1044;
                  this.declSpecifier();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1047;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
        } while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1050;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
          case 1:
            {
              this.state = 1049;
              this.attributeSpecifierSeq();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  storageClassSpecifier() {
    let _localctx = new StorageClassSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, _CPP14Parser.RULE_storageClassSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1052;
        _la = this._input.LA(1);
        if (!((_la - 36 & ~31) === 0 && (1 << _la - 36 & (1 << _CPP14Parser.Extern - 36 | 1 << _CPP14Parser.Mutable - 36 | 1 << _CPP14Parser.Register - 36 | 1 << _CPP14Parser.Static - 36)) !== 0 || _la === _CPP14Parser.Thread_local)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  functionSpecifier() {
    let _localctx = new FunctionSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, _CPP14Parser.RULE_functionSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1054;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Explicit || _la === _CPP14Parser.Inline || _la === _CPP14Parser.Virtual)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typedefName() {
    let _localctx = new TypedefNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, _CPP14Parser.RULE_typedefName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1056;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeSpecifier() {
    let _localctx = new TypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, _CPP14Parser.RULE_typeSpecifier);
    try {
      this.state = 1061;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1058;
            this.trailingTypeSpecifier();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1059;
            this.classSpecifier();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1060;
            this.enumSpecifier();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  trailingTypeSpecifier() {
    let _localctx = new TrailingTypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 148, _CPP14Parser.RULE_trailingTypeSpecifier);
    try {
      this.state = 1067;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Double:
        case _CPP14Parser.Float:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Void:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1063;
            this.simpleTypeSpecifier();
          }
          break;
        case _CPP14Parser.Class:
        case _CPP14Parser.Enum:
        case _CPP14Parser.Struct:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1064;
            this.elaboratedTypeSpecifier();
          }
          break;
        case _CPP14Parser.Typename_:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1065;
            this.typeNameSpecifier();
          }
          break;
        case _CPP14Parser.Const:
        case _CPP14Parser.Volatile:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1066;
            this.cvQualifier();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeSpecifierSeq() {
    let _localctx = new TypeSpecifierSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, _CPP14Parser.RULE_typeSpecifierSeq);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1070;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1069;
                  this.typeSpecifier();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1072;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1075;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
          case 1:
            {
              this.state = 1074;
              this.attributeSpecifierSeq();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  trailingTypeSpecifierSeq() {
    let _localctx = new TrailingTypeSpecifierSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, _CPP14Parser.RULE_trailingTypeSpecifierSeq);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1078;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1077;
                  this.trailingTypeSpecifier();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1080;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1083;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
          case 1:
            {
              this.state = 1082;
              this.attributeSpecifierSeq();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleTypeLengthModifier() {
    let _localctx = new SimpleTypeLengthModifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 154, _CPP14Parser.RULE_simpleTypeLengthModifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1085;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Long || _la === _CPP14Parser.Short)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleTypeSignednessModifier() {
    let _localctx = new SimpleTypeSignednessModifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, _CPP14Parser.RULE_simpleTypeSignednessModifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1087;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleTypeSpecifier() {
    let _localctx = new SimpleTypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, _CPP14Parser.RULE_simpleTypeSpecifier);
    let _la;
    try {
      let _alt;
      this.state = 1141;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1090;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
              case 1:
                {
                  this.state = 1089;
                  this.nestedNameSpecifier(0);
                }
                break;
            }
            this.state = 1092;
            this.theTypeName();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1093;
            this.nestedNameSpecifier(0);
            this.state = 1094;
            this.match(_CPP14Parser.Template);
            this.state = 1095;
            this.simpleTemplateId();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1097;
            this.simpleTypeSignednessModifier();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1099;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1098;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1102;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1101;
                      this.simpleTypeLengthModifier();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1104;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1106;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1109;
            this.match(_CPP14Parser.Char);
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1110;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1113;
            this.match(_CPP14Parser.Char16);
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1114;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1117;
            this.match(_CPP14Parser.Char32);
          }
          break;
        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1118;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1121;
            this.match(_CPP14Parser.Wchar);
          }
          break;
        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1122;
            this.match(_CPP14Parser.Bool);
          }
          break;
        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Signed || _la === _CPP14Parser.Unsigned) {
              {
                this.state = 1123;
                this.simpleTypeSignednessModifier();
              }
            }
            this.state = 1129;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === _CPP14Parser.Long || _la === _CPP14Parser.Short) {
              {
                {
                  this.state = 1126;
                  this.simpleTypeLengthModifier();
                }
              }
              this.state = 1131;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1132;
            this.match(_CPP14Parser.Int);
          }
          break;
        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 1133;
            this.match(_CPP14Parser.Float);
          }
          break;
        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 1135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Long || _la === _CPP14Parser.Short) {
              {
                this.state = 1134;
                this.simpleTypeLengthModifier();
              }
            }
            this.state = 1137;
            this.match(_CPP14Parser.Double);
          }
          break;
        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 1138;
            this.match(_CPP14Parser.Void);
          }
          break;
        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 1139;
            this.match(_CPP14Parser.Auto);
          }
          break;
        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 1140;
            this.decltypeSpecifier();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  theTypeName() {
    let _localctx = new TheTypeNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, _CPP14Parser.RULE_theTypeName);
    try {
      this.state = 1147;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1143;
            this.className();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1144;
            this.enumName();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1145;
            this.typedefName();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1146;
            this.simpleTemplateId();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  decltypeSpecifier() {
    let _localctx = new DecltypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, _CPP14Parser.RULE_decltypeSpecifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1149;
        this.match(_CPP14Parser.Decltype);
        this.state = 1150;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1153;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
          case 1:
            {
              this.state = 1151;
              this.expression();
            }
            break;
          case 2:
            {
              this.state = 1152;
              this.match(_CPP14Parser.Auto);
            }
            break;
        }
        this.state = 1155;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  elaboratedTypeSpecifier() {
    let _localctx = new ElaboratedTypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 164, _CPP14Parser.RULE_elaboratedTypeSpecifier);
    let _la;
    try {
      this.state = 1179;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Class:
        case _CPP14Parser.Struct:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1157;
            this.classKey();
            this.state = 1172;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
              case 1:
                {
                  this.state = 1159;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
                    {
                      this.state = 1158;
                      this.attributeSpecifierSeq();
                    }
                  }
                  this.state = 1162;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                    case 1:
                      {
                        this.state = 1161;
                        this.nestedNameSpecifier(0);
                      }
                      break;
                  }
                  this.state = 1164;
                  this.match(_CPP14Parser.Identifier);
                }
                break;
              case 2:
                {
                  this.state = 1165;
                  this.simpleTemplateId();
                }
                break;
              case 3:
                {
                  this.state = 1166;
                  this.nestedNameSpecifier(0);
                  this.state = 1168;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === _CPP14Parser.Template) {
                    {
                      this.state = 1167;
                      this.match(_CPP14Parser.Template);
                    }
                  }
                  this.state = 1170;
                  this.simpleTemplateId();
                }
                break;
            }
          }
          break;
        case _CPP14Parser.Enum:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1174;
            this.match(_CPP14Parser.Enum);
            this.state = 1176;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
              case 1:
                {
                  this.state = 1175;
                  this.nestedNameSpecifier(0);
                }
                break;
            }
            this.state = 1178;
            this.match(_CPP14Parser.Identifier);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumName() {
    let _localctx = new EnumNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 166, _CPP14Parser.RULE_enumName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1181;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumSpecifier() {
    let _localctx = new EnumSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 168, _CPP14Parser.RULE_enumSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1183;
        this.enumHead();
        this.state = 1184;
        this.match(_CPP14Parser.LeftBrace);
        this.state = 1189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Identifier) {
          {
            this.state = 1185;
            this.enumeratorList();
            this.state = 1187;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Comma) {
              {
                this.state = 1186;
                this.match(_CPP14Parser.Comma);
              }
            }
          }
        }
        this.state = 1191;
        this.match(_CPP14Parser.RightBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumHead() {
    let _localctx = new EnumHeadContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, _CPP14Parser.RULE_enumHead);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1193;
        this.enumkey();
        this.state = 1195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1194;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Decltype || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
          {
            this.state = 1198;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
              case 1:
                {
                  this.state = 1197;
                  this.nestedNameSpecifier(0);
                }
                break;
            }
            this.state = 1200;
            this.match(_CPP14Parser.Identifier);
          }
        }
        this.state = 1204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Colon) {
          {
            this.state = 1203;
            this.enumbase();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  opaqueEnumDeclaration() {
    let _localctx = new OpaqueEnumDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, _CPP14Parser.RULE_opaqueEnumDeclaration);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1206;
        this.enumkey();
        this.state = 1208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1207;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1210;
        this.match(_CPP14Parser.Identifier);
        this.state = 1212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Colon) {
          {
            this.state = 1211;
            this.enumbase();
          }
        }
        this.state = 1214;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumkey() {
    let _localctx = new EnumkeyContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, _CPP14Parser.RULE_enumkey);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1216;
        this.match(_CPP14Parser.Enum);
        this.state = 1218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Class || _la === _CPP14Parser.Struct) {
          {
            this.state = 1217;
            _la = this._input.LA(1);
            if (!(_la === _CPP14Parser.Class || _la === _CPP14Parser.Struct)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }
              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumbase() {
    let _localctx = new EnumbaseContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, _CPP14Parser.RULE_enumbase);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1220;
        this.match(_CPP14Parser.Colon);
        this.state = 1221;
        this.typeSpecifierSeq();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumeratorList() {
    let _localctx = new EnumeratorListContext(this._ctx, this.state);
    this.enterRule(_localctx, 178, _CPP14Parser.RULE_enumeratorList);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1223;
        this.enumeratorDefinition();
        this.state = 1228;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1224;
                this.match(_CPP14Parser.Comma);
                this.state = 1225;
                this.enumeratorDefinition();
              }
            }
          }
          this.state = 1230;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumeratorDefinition() {
    let _localctx = new EnumeratorDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 180, _CPP14Parser.RULE_enumeratorDefinition);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1231;
        this.enumerator();
        this.state = 1234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Assign) {
          {
            this.state = 1232;
            this.match(_CPP14Parser.Assign);
            this.state = 1233;
            this.constantExpression();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  enumerator() {
    let _localctx = new EnumeratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 182, _CPP14Parser.RULE_enumerator);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1236;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespaceName() {
    let _localctx = new NamespaceNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, _CPP14Parser.RULE_namespaceName);
    try {
      this.state = 1240;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1238;
            this.originalNamespaceName();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1239;
            this.namespaceAlias();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  originalNamespaceName() {
    let _localctx = new OriginalNamespaceNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 186, _CPP14Parser.RULE_originalNamespaceName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1242;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespaceDefinition() {
    let _localctx = new NamespaceDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 188, _CPP14Parser.RULE_namespaceDefinition);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Inline) {
          {
            this.state = 1244;
            this.match(_CPP14Parser.Inline);
          }
        }
        this.state = 1247;
        this.match(_CPP14Parser.Namespace);
        this.state = 1250;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
          case 1:
            {
              this.state = 1248;
              this.match(_CPP14Parser.Identifier);
            }
            break;
          case 2:
            {
              this.state = 1249;
              this.originalNamespaceName();
            }
            break;
        }
        this.state = 1252;
        this.match(_CPP14Parser.LeftBrace);
        this.state = 1254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Asm - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Namespace - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
          {
            this.state = 1253;
            _localctx._namespaceBody = this.declarationseq();
          }
        }
        this.state = 1256;
        this.match(_CPP14Parser.RightBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespaceAlias() {
    let _localctx = new NamespaceAliasContext(this._ctx, this.state);
    this.enterRule(_localctx, 190, _CPP14Parser.RULE_namespaceAlias);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1258;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  namespaceAliasDefinition() {
    let _localctx = new NamespaceAliasDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 192, _CPP14Parser.RULE_namespaceAliasDefinition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1260;
        this.match(_CPP14Parser.Namespace);
        this.state = 1261;
        this.match(_CPP14Parser.Identifier);
        this.state = 1262;
        this.match(_CPP14Parser.Assign);
        this.state = 1263;
        this.qualifiednamespacespecifier();
        this.state = 1264;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  qualifiednamespacespecifier() {
    let _localctx = new QualifiednamespacespecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 194, _CPP14Parser.RULE_qualifiednamespacespecifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1267;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
          case 1:
            {
              this.state = 1266;
              this.nestedNameSpecifier(0);
            }
            break;
        }
        this.state = 1269;
        this.namespaceName();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  usingDeclaration() {
    let _localctx = new UsingDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 196, _CPP14Parser.RULE_usingDeclaration);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1271;
        this.match(_CPP14Parser.Using);
        this.state = 1277;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
          case 1:
            {
              {
                this.state = 1273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Typename_) {
                  {
                    this.state = 1272;
                    this.match(_CPP14Parser.Typename_);
                  }
                }
                this.state = 1275;
                this.nestedNameSpecifier(0);
              }
            }
            break;
          case 2:
            {
              this.state = 1276;
              this.match(_CPP14Parser.Doublecolon);
            }
            break;
        }
        this.state = 1279;
        this.unqualifiedId();
        this.state = 1280;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  usingDirective() {
    let _localctx = new UsingDirectiveContext(this._ctx, this.state);
    this.enterRule(_localctx, 198, _CPP14Parser.RULE_usingDirective);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1282;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1285;
        this.match(_CPP14Parser.Using);
        this.state = 1286;
        this.match(_CPP14Parser.Namespace);
        this.state = 1288;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
          case 1:
            {
              this.state = 1287;
              this.nestedNameSpecifier(0);
            }
            break;
        }
        this.state = 1290;
        this.namespaceName();
        this.state = 1291;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  asmDefinition() {
    let _localctx = new AsmDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 200, _CPP14Parser.RULE_asmDefinition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1293;
        this.match(_CPP14Parser.Asm);
        this.state = 1294;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1295;
        this.match(_CPP14Parser.StringLiteral);
        this.state = 1296;
        this.match(_CPP14Parser.RightParen);
        this.state = 1297;
        this.match(_CPP14Parser.Semi);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  linkageSpecification() {
    let _localctx = new LinkageSpecificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 202, _CPP14Parser.RULE_linkageSpecification);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1299;
        this.match(_CPP14Parser.Extern);
        this.state = 1300;
        this.match(_CPP14Parser.StringLiteral);
        this.state = 1307;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.LeftBrace:
            {
              this.state = 1301;
              this.match(_CPP14Parser.LeftBrace);
              this.state = 1303;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Asm - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Namespace - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
                {
                  this.state = 1302;
                  this.declarationseq();
                }
              }
              this.state = 1305;
              this.match(_CPP14Parser.RightBrace);
            }
            break;
          case _CPP14Parser.Alignas:
          case _CPP14Parser.Asm:
          case _CPP14Parser.Auto:
          case _CPP14Parser.Bool:
          case _CPP14Parser.Char:
          case _CPP14Parser.Char16:
          case _CPP14Parser.Char32:
          case _CPP14Parser.Class:
          case _CPP14Parser.Const:
          case _CPP14Parser.Constexpr:
          case _CPP14Parser.Decltype:
          case _CPP14Parser.Double:
          case _CPP14Parser.Enum:
          case _CPP14Parser.Explicit:
          case _CPP14Parser.Extern:
          case _CPP14Parser.Float:
          case _CPP14Parser.Friend:
          case _CPP14Parser.Inline:
          case _CPP14Parser.Int:
          case _CPP14Parser.Long:
          case _CPP14Parser.Mutable:
          case _CPP14Parser.Namespace:
          case _CPP14Parser.Operator:
          case _CPP14Parser.Register:
          case _CPP14Parser.Short:
          case _CPP14Parser.Signed:
          case _CPP14Parser.Static:
          case _CPP14Parser.Static_assert:
          case _CPP14Parser.Struct:
          case _CPP14Parser.Template:
          case _CPP14Parser.Thread_local:
          case _CPP14Parser.Typedef:
          case _CPP14Parser.Typename_:
          case _CPP14Parser.Union:
          case _CPP14Parser.Unsigned:
          case _CPP14Parser.Using:
          case _CPP14Parser.Virtual:
          case _CPP14Parser.Void:
          case _CPP14Parser.Volatile:
          case _CPP14Parser.Wchar:
          case _CPP14Parser.LeftParen:
          case _CPP14Parser.LeftBracket:
          case _CPP14Parser.Star:
          case _CPP14Parser.And:
          case _CPP14Parser.Tilde:
          case _CPP14Parser.AndAnd:
          case _CPP14Parser.Doublecolon:
          case _CPP14Parser.Semi:
          case _CPP14Parser.Ellipsis:
          case _CPP14Parser.Identifier:
            {
              this.state = 1306;
              this.declaration();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeSpecifierSeq() {
    let _localctx = new AttributeSpecifierSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 204, _CPP14Parser.RULE_attributeSpecifierSeq);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1310;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1309;
                  this.attributeSpecifier();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1312;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeSpecifier() {
    let _localctx = new AttributeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 206, _CPP14Parser.RULE_attributeSpecifier);
    let _la;
    try {
      this.state = 1322;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1314;
            this.match(_CPP14Parser.LeftBracket);
            this.state = 1315;
            this.match(_CPP14Parser.LeftBracket);
            this.state = 1317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Identifier) {
              {
                this.state = 1316;
                this.attributeList();
              }
            }
            this.state = 1319;
            this.match(_CPP14Parser.RightBracket);
            this.state = 1320;
            this.match(_CPP14Parser.RightBracket);
          }
          break;
        case _CPP14Parser.Alignas:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1321;
            this.alignmentspecifier();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  alignmentspecifier() {
    let _localctx = new AlignmentspecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 208, _CPP14Parser.RULE_alignmentspecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1324;
        this.match(_CPP14Parser.Alignas);
        this.state = 1325;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1328;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
          case 1:
            {
              this.state = 1326;
              this.theTypeId();
            }
            break;
          case 2:
            {
              this.state = 1327;
              this.constantExpression();
            }
            break;
        }
        this.state = 1331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1330;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1333;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeList() {
    let _localctx = new AttributeListContext(this._ctx, this.state);
    this.enterRule(_localctx, 210, _CPP14Parser.RULE_attributeList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1335;
        this.attribute();
        this.state = 1340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1336;
              this.match(_CPP14Parser.Comma);
              this.state = 1337;
              this.attribute();
            }
          }
          this.state = 1342;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1344;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1343;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attribute() {
    let _localctx = new AttributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 212, _CPP14Parser.RULE_attribute);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1349;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
          case 1:
            {
              this.state = 1346;
              this.attributeNamespace();
              this.state = 1347;
              this.match(_CPP14Parser.Doublecolon);
            }
            break;
        }
        this.state = 1351;
        this.match(_CPP14Parser.Identifier);
        this.state = 1353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.LeftParen) {
          {
            this.state = 1352;
            this.attributeArgumentClause();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeNamespace() {
    let _localctx = new AttributeNamespaceContext(this._ctx, this.state);
    this.enterRule(_localctx, 214, _CPP14Parser.RULE_attributeNamespace);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1355;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  attributeArgumentClause() {
    let _localctx = new AttributeArgumentClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 216, _CPP14Parser.RULE_attributeArgumentClause);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1357;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.MultiLineMacro | 1 << _CPP14Parser.Directive | 1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Asm | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Break | 1 << _CPP14Parser.Case | 1 << _CPP14Parser.Catch | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Continue | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Default | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Do | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & (1 << _CPP14Parser.Else - 32 | 1 << _CPP14Parser.Enum - 32 | 1 << _CPP14Parser.Explicit - 32 | 1 << _CPP14Parser.Export - 32 | 1 << _CPP14Parser.Extern - 32 | 1 << _CPP14Parser.False_ - 32 | 1 << _CPP14Parser.Final - 32 | 1 << _CPP14Parser.Float - 32 | 1 << _CPP14Parser.For - 32 | 1 << _CPP14Parser.Friend - 32 | 1 << _CPP14Parser.Goto - 32 | 1 << _CPP14Parser.If - 32 | 1 << _CPP14Parser.Inline - 32 | 1 << _CPP14Parser.Int - 32 | 1 << _CPP14Parser.Long - 32 | 1 << _CPP14Parser.Mutable - 32 | 1 << _CPP14Parser.Namespace - 32 | 1 << _CPP14Parser.New - 32 | 1 << _CPP14Parser.Noexcept - 32 | 1 << _CPP14Parser.Nullptr - 32 | 1 << _CPP14Parser.Operator - 32 | 1 << _CPP14Parser.Override - 32 | 1 << _CPP14Parser.Private - 32 | 1 << _CPP14Parser.Protected - 32 | 1 << _CPP14Parser.Public - 32 | 1 << _CPP14Parser.Register - 32 | 1 << _CPP14Parser.Reinterpret_cast - 32 | 1 << _CPP14Parser.Return - 32 | 1 << _CPP14Parser.Short - 32 | 1 << _CPP14Parser.Signed - 32 | 1 << _CPP14Parser.Sizeof - 32 | 1 << _CPP14Parser.Static - 32)) !== 0 || (_la - 64 & ~31) === 0 && (1 << _la - 64 & (1 << _CPP14Parser.Static_assert - 64 | 1 << _CPP14Parser.Static_cast - 64 | 1 << _CPP14Parser.Struct - 64 | 1 << _CPP14Parser.Switch - 64 | 1 << _CPP14Parser.Template - 64 | 1 << _CPP14Parser.This - 64 | 1 << _CPP14Parser.Thread_local - 64 | 1 << _CPP14Parser.Throw - 64 | 1 << _CPP14Parser.True_ - 64 | 1 << _CPP14Parser.Try - 64 | 1 << _CPP14Parser.Typedef - 64 | 1 << _CPP14Parser.Typeid_ - 64 | 1 << _CPP14Parser.Typename_ - 64 | 1 << _CPP14Parser.Union - 64 | 1 << _CPP14Parser.Unsigned - 64 | 1 << _CPP14Parser.Using - 64 | 1 << _CPP14Parser.Virtual - 64 | 1 << _CPP14Parser.Void - 64 | 1 << _CPP14Parser.Volatile - 64 | 1 << _CPP14Parser.Wchar - 64 | 1 << _CPP14Parser.While - 64 | 1 << _CPP14Parser.LeftParen - 64 | 1 << _CPP14Parser.LeftBracket - 64 | 1 << _CPP14Parser.LeftBrace - 64 | 1 << _CPP14Parser.Plus - 64 | 1 << _CPP14Parser.Minus - 64 | 1 << _CPP14Parser.Star - 64 | 1 << _CPP14Parser.Div - 64 | 1 << _CPP14Parser.Mod - 64)) !== 0 || (_la - 96 & ~31) === 0 && (1 << _la - 96 & (1 << _CPP14Parser.Caret - 96 | 1 << _CPP14Parser.And - 96 | 1 << _CPP14Parser.Or - 96 | 1 << _CPP14Parser.Tilde - 96 | 1 << _CPP14Parser.Not - 96 | 1 << _CPP14Parser.Assign - 96 | 1 << _CPP14Parser.Less - 96 | 1 << _CPP14Parser.Greater - 96 | 1 << _CPP14Parser.PlusAssign - 96 | 1 << _CPP14Parser.MinusAssign - 96 | 1 << _CPP14Parser.StarAssign - 96 | 1 << _CPP14Parser.DivAssign - 96 | 1 << _CPP14Parser.ModAssign - 96 | 1 << _CPP14Parser.XorAssign - 96 | 1 << _CPP14Parser.AndAssign - 96 | 1 << _CPP14Parser.OrAssign - 96 | 1 << _CPP14Parser.LeftShiftAssign - 96 | 1 << _CPP14Parser.RightShiftAssign - 96 | 1 << _CPP14Parser.Equal - 96 | 1 << _CPP14Parser.NotEqual - 96 | 1 << _CPP14Parser.LessEqual - 96 | 1 << _CPP14Parser.GreaterEqual - 96 | 1 << _CPP14Parser.AndAnd - 96 | 1 << _CPP14Parser.OrOr - 96 | 1 << _CPP14Parser.PlusPlus - 96 | 1 << _CPP14Parser.MinusMinus - 96 | 1 << _CPP14Parser.Comma - 96 | 1 << _CPP14Parser.ArrowStar - 96 | 1 << _CPP14Parser.Arrow - 96 | 1 << _CPP14Parser.Question - 96 | 1 << _CPP14Parser.Colon - 96 | 1 << _CPP14Parser.Doublecolon - 96)) !== 0 || (_la - 128 & ~31) === 0 && (1 << _la - 128 & (1 << _CPP14Parser.Semi - 128 | 1 << _CPP14Parser.Dot - 128 | 1 << _CPP14Parser.DotStar - 128 | 1 << _CPP14Parser.Ellipsis - 128 | 1 << _CPP14Parser.Identifier - 128 | 1 << _CPP14Parser.DecimalLiteral - 128 | 1 << _CPP14Parser.OctalLiteral - 128 | 1 << _CPP14Parser.HexadecimalLiteral - 128 | 1 << _CPP14Parser.BinaryLiteral - 128 | 1 << _CPP14Parser.Integersuffix - 128 | 1 << _CPP14Parser.UserDefinedIntegerLiteral - 128 | 1 << _CPP14Parser.UserDefinedFloatingLiteral - 128 | 1 << _CPP14Parser.UserDefinedStringLiteral - 128 | 1 << _CPP14Parser.UserDefinedCharacterLiteral - 128 | 1 << _CPP14Parser.Whitespace - 128 | 1 << _CPP14Parser.Newline - 128 | 1 << _CPP14Parser.BlockComment - 128 | 1 << _CPP14Parser.LineComment - 128)) !== 0) {
          {
            this.state = 1358;
            this.balancedTokenSeq();
          }
        }
        this.state = 1361;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  balancedTokenSeq() {
    let _localctx = new BalancedTokenSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 218, _CPP14Parser.RULE_balancedTokenSeq);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1363;
              this.balancedtoken();
            }
          }
          this.state = 1366;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.MultiLineMacro | 1 << _CPP14Parser.Directive | 1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Asm | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Break | 1 << _CPP14Parser.Case | 1 << _CPP14Parser.Catch | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Continue | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Default | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Do | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & (1 << _CPP14Parser.Else - 32 | 1 << _CPP14Parser.Enum - 32 | 1 << _CPP14Parser.Explicit - 32 | 1 << _CPP14Parser.Export - 32 | 1 << _CPP14Parser.Extern - 32 | 1 << _CPP14Parser.False_ - 32 | 1 << _CPP14Parser.Final - 32 | 1 << _CPP14Parser.Float - 32 | 1 << _CPP14Parser.For - 32 | 1 << _CPP14Parser.Friend - 32 | 1 << _CPP14Parser.Goto - 32 | 1 << _CPP14Parser.If - 32 | 1 << _CPP14Parser.Inline - 32 | 1 << _CPP14Parser.Int - 32 | 1 << _CPP14Parser.Long - 32 | 1 << _CPP14Parser.Mutable - 32 | 1 << _CPP14Parser.Namespace - 32 | 1 << _CPP14Parser.New - 32 | 1 << _CPP14Parser.Noexcept - 32 | 1 << _CPP14Parser.Nullptr - 32 | 1 << _CPP14Parser.Operator - 32 | 1 << _CPP14Parser.Override - 32 | 1 << _CPP14Parser.Private - 32 | 1 << _CPP14Parser.Protected - 32 | 1 << _CPP14Parser.Public - 32 | 1 << _CPP14Parser.Register - 32 | 1 << _CPP14Parser.Reinterpret_cast - 32 | 1 << _CPP14Parser.Return - 32 | 1 << _CPP14Parser.Short - 32 | 1 << _CPP14Parser.Signed - 32 | 1 << _CPP14Parser.Sizeof - 32 | 1 << _CPP14Parser.Static - 32)) !== 0 || (_la - 64 & ~31) === 0 && (1 << _la - 64 & (1 << _CPP14Parser.Static_assert - 64 | 1 << _CPP14Parser.Static_cast - 64 | 1 << _CPP14Parser.Struct - 64 | 1 << _CPP14Parser.Switch - 64 | 1 << _CPP14Parser.Template - 64 | 1 << _CPP14Parser.This - 64 | 1 << _CPP14Parser.Thread_local - 64 | 1 << _CPP14Parser.Throw - 64 | 1 << _CPP14Parser.True_ - 64 | 1 << _CPP14Parser.Try - 64 | 1 << _CPP14Parser.Typedef - 64 | 1 << _CPP14Parser.Typeid_ - 64 | 1 << _CPP14Parser.Typename_ - 64 | 1 << _CPP14Parser.Union - 64 | 1 << _CPP14Parser.Unsigned - 64 | 1 << _CPP14Parser.Using - 64 | 1 << _CPP14Parser.Virtual - 64 | 1 << _CPP14Parser.Void - 64 | 1 << _CPP14Parser.Volatile - 64 | 1 << _CPP14Parser.Wchar - 64 | 1 << _CPP14Parser.While - 64 | 1 << _CPP14Parser.LeftParen - 64 | 1 << _CPP14Parser.LeftBracket - 64 | 1 << _CPP14Parser.LeftBrace - 64 | 1 << _CPP14Parser.Plus - 64 | 1 << _CPP14Parser.Minus - 64 | 1 << _CPP14Parser.Star - 64 | 1 << _CPP14Parser.Div - 64 | 1 << _CPP14Parser.Mod - 64)) !== 0 || (_la - 96 & ~31) === 0 && (1 << _la - 96 & (1 << _CPP14Parser.Caret - 96 | 1 << _CPP14Parser.And - 96 | 1 << _CPP14Parser.Or - 96 | 1 << _CPP14Parser.Tilde - 96 | 1 << _CPP14Parser.Not - 96 | 1 << _CPP14Parser.Assign - 96 | 1 << _CPP14Parser.Less - 96 | 1 << _CPP14Parser.Greater - 96 | 1 << _CPP14Parser.PlusAssign - 96 | 1 << _CPP14Parser.MinusAssign - 96 | 1 << _CPP14Parser.StarAssign - 96 | 1 << _CPP14Parser.DivAssign - 96 | 1 << _CPP14Parser.ModAssign - 96 | 1 << _CPP14Parser.XorAssign - 96 | 1 << _CPP14Parser.AndAssign - 96 | 1 << _CPP14Parser.OrAssign - 96 | 1 << _CPP14Parser.LeftShiftAssign - 96 | 1 << _CPP14Parser.RightShiftAssign - 96 | 1 << _CPP14Parser.Equal - 96 | 1 << _CPP14Parser.NotEqual - 96 | 1 << _CPP14Parser.LessEqual - 96 | 1 << _CPP14Parser.GreaterEqual - 96 | 1 << _CPP14Parser.AndAnd - 96 | 1 << _CPP14Parser.OrOr - 96 | 1 << _CPP14Parser.PlusPlus - 96 | 1 << _CPP14Parser.MinusMinus - 96 | 1 << _CPP14Parser.Comma - 96 | 1 << _CPP14Parser.ArrowStar - 96 | 1 << _CPP14Parser.Arrow - 96 | 1 << _CPP14Parser.Question - 96 | 1 << _CPP14Parser.Colon - 96 | 1 << _CPP14Parser.Doublecolon - 96)) !== 0 || (_la - 128 & ~31) === 0 && (1 << _la - 128 & (1 << _CPP14Parser.Semi - 128 | 1 << _CPP14Parser.Dot - 128 | 1 << _CPP14Parser.DotStar - 128 | 1 << _CPP14Parser.Ellipsis - 128 | 1 << _CPP14Parser.Identifier - 128 | 1 << _CPP14Parser.DecimalLiteral - 128 | 1 << _CPP14Parser.OctalLiteral - 128 | 1 << _CPP14Parser.HexadecimalLiteral - 128 | 1 << _CPP14Parser.BinaryLiteral - 128 | 1 << _CPP14Parser.Integersuffix - 128 | 1 << _CPP14Parser.UserDefinedIntegerLiteral - 128 | 1 << _CPP14Parser.UserDefinedFloatingLiteral - 128 | 1 << _CPP14Parser.UserDefinedStringLiteral - 128 | 1 << _CPP14Parser.UserDefinedCharacterLiteral - 128 | 1 << _CPP14Parser.Whitespace - 128 | 1 << _CPP14Parser.Newline - 128 | 1 << _CPP14Parser.BlockComment - 128 | 1 << _CPP14Parser.LineComment - 128)) !== 0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  balancedtoken() {
    let _localctx = new BalancedtokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 220, _CPP14Parser.RULE_balancedtoken);
    let _la;
    try {
      let _alt;
      this.state = 1385;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftParen:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1368;
            this.match(_CPP14Parser.LeftParen);
            this.state = 1369;
            this.balancedTokenSeq();
            this.state = 1370;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1372;
            this.match(_CPP14Parser.LeftBracket);
            this.state = 1373;
            this.balancedTokenSeq();
            this.state = 1374;
            this.match(_CPP14Parser.RightBracket);
          }
          break;
        case _CPP14Parser.LeftBrace:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1376;
            this.match(_CPP14Parser.LeftBrace);
            this.state = 1377;
            this.balancedTokenSeq();
            this.state = 1378;
            this.match(_CPP14Parser.RightBrace);
          }
          break;
        case _CPP14Parser.IntegerLiteral:
        case _CPP14Parser.CharacterLiteral:
        case _CPP14Parser.FloatingLiteral:
        case _CPP14Parser.StringLiteral:
        case _CPP14Parser.BooleanLiteral:
        case _CPP14Parser.PointerLiteral:
        case _CPP14Parser.UserDefinedLiteral:
        case _CPP14Parser.MultiLineMacro:
        case _CPP14Parser.Directive:
        case _CPP14Parser.Alignas:
        case _CPP14Parser.Alignof:
        case _CPP14Parser.Asm:
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Break:
        case _CPP14Parser.Case:
        case _CPP14Parser.Catch:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Class:
        case _CPP14Parser.Const:
        case _CPP14Parser.Constexpr:
        case _CPP14Parser.Const_cast:
        case _CPP14Parser.Continue:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Default:
        case _CPP14Parser.Delete:
        case _CPP14Parser.Do:
        case _CPP14Parser.Double:
        case _CPP14Parser.Dynamic_cast:
        case _CPP14Parser.Else:
        case _CPP14Parser.Enum:
        case _CPP14Parser.Explicit:
        case _CPP14Parser.Export:
        case _CPP14Parser.Extern:
        case _CPP14Parser.False_:
        case _CPP14Parser.Final:
        case _CPP14Parser.Float:
        case _CPP14Parser.For:
        case _CPP14Parser.Friend:
        case _CPP14Parser.Goto:
        case _CPP14Parser.If:
        case _CPP14Parser.Inline:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.Mutable:
        case _CPP14Parser.Namespace:
        case _CPP14Parser.New:
        case _CPP14Parser.Noexcept:
        case _CPP14Parser.Nullptr:
        case _CPP14Parser.Operator:
        case _CPP14Parser.Override:
        case _CPP14Parser.Private:
        case _CPP14Parser.Protected:
        case _CPP14Parser.Public:
        case _CPP14Parser.Register:
        case _CPP14Parser.Reinterpret_cast:
        case _CPP14Parser.Return:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Sizeof:
        case _CPP14Parser.Static:
        case _CPP14Parser.Static_assert:
        case _CPP14Parser.Static_cast:
        case _CPP14Parser.Struct:
        case _CPP14Parser.Switch:
        case _CPP14Parser.Template:
        case _CPP14Parser.This:
        case _CPP14Parser.Thread_local:
        case _CPP14Parser.Throw:
        case _CPP14Parser.True_:
        case _CPP14Parser.Try:
        case _CPP14Parser.Typedef:
        case _CPP14Parser.Typeid_:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Union:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Using:
        case _CPP14Parser.Virtual:
        case _CPP14Parser.Void:
        case _CPP14Parser.Volatile:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.While:
        case _CPP14Parser.Plus:
        case _CPP14Parser.Minus:
        case _CPP14Parser.Star:
        case _CPP14Parser.Div:
        case _CPP14Parser.Mod:
        case _CPP14Parser.Caret:
        case _CPP14Parser.And:
        case _CPP14Parser.Or:
        case _CPP14Parser.Tilde:
        case _CPP14Parser.Not:
        case _CPP14Parser.Assign:
        case _CPP14Parser.Less:
        case _CPP14Parser.Greater:
        case _CPP14Parser.PlusAssign:
        case _CPP14Parser.MinusAssign:
        case _CPP14Parser.StarAssign:
        case _CPP14Parser.DivAssign:
        case _CPP14Parser.ModAssign:
        case _CPP14Parser.XorAssign:
        case _CPP14Parser.AndAssign:
        case _CPP14Parser.OrAssign:
        case _CPP14Parser.LeftShiftAssign:
        case _CPP14Parser.RightShiftAssign:
        case _CPP14Parser.Equal:
        case _CPP14Parser.NotEqual:
        case _CPP14Parser.LessEqual:
        case _CPP14Parser.GreaterEqual:
        case _CPP14Parser.AndAnd:
        case _CPP14Parser.OrOr:
        case _CPP14Parser.PlusPlus:
        case _CPP14Parser.MinusMinus:
        case _CPP14Parser.Comma:
        case _CPP14Parser.ArrowStar:
        case _CPP14Parser.Arrow:
        case _CPP14Parser.Question:
        case _CPP14Parser.Colon:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Semi:
        case _CPP14Parser.Dot:
        case _CPP14Parser.DotStar:
        case _CPP14Parser.Ellipsis:
        case _CPP14Parser.Identifier:
        case _CPP14Parser.DecimalLiteral:
        case _CPP14Parser.OctalLiteral:
        case _CPP14Parser.HexadecimalLiteral:
        case _CPP14Parser.BinaryLiteral:
        case _CPP14Parser.Integersuffix:
        case _CPP14Parser.UserDefinedIntegerLiteral:
        case _CPP14Parser.UserDefinedFloatingLiteral:
        case _CPP14Parser.UserDefinedStringLiteral:
        case _CPP14Parser.UserDefinedCharacterLiteral:
        case _CPP14Parser.Whitespace:
        case _CPP14Parser.Newline:
        case _CPP14Parser.BlockComment:
        case _CPP14Parser.LineComment:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1381;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1380;
                      _la = this._input.LA(1);
                      if (_la <= 0 || (_la - 85 & ~31) === 0 && (1 << _la - 85 & (1 << _CPP14Parser.LeftParen - 85 | 1 << _CPP14Parser.RightParen - 85 | 1 << _CPP14Parser.LeftBracket - 85 | 1 << _CPP14Parser.RightBracket - 85 | 1 << _CPP14Parser.LeftBrace - 85 | 1 << _CPP14Parser.RightBrace - 85)) !== 0) {
                        this._errHandler.recoverInline(this);
                      } else {
                        if (this._input.LA(1) === Token.EOF) {
                          this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                      }
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1383;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initDeclaratorList() {
    let _localctx = new InitDeclaratorListContext(this._ctx, this.state);
    this.enterRule(_localctx, 222, _CPP14Parser.RULE_initDeclaratorList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1387;
        this.initDeclarator();
        this.state = 1392;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1388;
              this.match(_CPP14Parser.Comma);
              this.state = 1389;
              this.initDeclarator();
            }
          }
          this.state = 1394;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initDeclarator() {
    let _localctx = new InitDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 224, _CPP14Parser.RULE_initDeclarator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1395;
        this.declarator();
        this.state = 1397;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 85 & ~31) === 0 && (1 << _la - 85 & (1 << _CPP14Parser.LeftParen - 85 | 1 << _CPP14Parser.LeftBrace - 85 | 1 << _CPP14Parser.Assign - 85)) !== 0) {
          {
            this.state = 1396;
            this.initializer();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declarator() {
    let _localctx = new DeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 226, _CPP14Parser.RULE_declarator);
    try {
      this.state = 1404;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1399;
            this.pointerDeclarator();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1400;
            this.noPointerDeclarator(0);
            this.state = 1401;
            this.parametersAndQualifiers();
            this.state = 1402;
            this.trailingReturnType();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pointerDeclarator() {
    let _localctx = new PointerDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 228, _CPP14Parser.RULE_pointerDeclarator);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1412;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1406;
                this.pointerOperator();
                this.state = 1408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Const) {
                  {
                    this.state = 1407;
                    this.match(_CPP14Parser.Const);
                  }
                }
              }
            }
          }
          this.state = 1414;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
        }
        this.state = 1415;
        this.noPointerDeclarator(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noPointerDeclarator(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new NoPointerDeclaratorContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 230;
    this.enterRecursionRule(_localctx, 230, _CPP14Parser.RULE_noPointerDeclarator, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1426;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Decltype:
          case _CPP14Parser.Operator:
          case _CPP14Parser.Tilde:
          case _CPP14Parser.Doublecolon:
          case _CPP14Parser.Ellipsis:
          case _CPP14Parser.Identifier:
            {
              this.state = 1418;
              this.declaratorid();
              this.state = 1420;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                case 1:
                  {
                    this.state = 1419;
                    this.attributeSpecifierSeq();
                  }
                  break;
              }
            }
            break;
          case _CPP14Parser.LeftParen:
            {
              this.state = 1422;
              this.match(_CPP14Parser.LeftParen);
              this.state = 1423;
              this.pointerDeclarator();
              this.state = 1424;
              this.match(_CPP14Parser.RightParen);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1442;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new NoPointerDeclaratorContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_noPointerDeclarator);
                this.state = 1428;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                }
                this.state = 1438;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case _CPP14Parser.LeftParen:
                    {
                      this.state = 1429;
                      this.parametersAndQualifiers();
                    }
                    break;
                  case _CPP14Parser.LeftBracket:
                    {
                      this.state = 1430;
                      this.match(_CPP14Parser.LeftBracket);
                      this.state = 1432;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 75 & ~31) === 0 && (1 << _la - 75 & (1 << _CPP14Parser.Typeid_ - 75 | 1 << _CPP14Parser.Typename_ - 75 | 1 << _CPP14Parser.Unsigned - 75 | 1 << _CPP14Parser.Void - 75 | 1 << _CPP14Parser.Wchar - 75 | 1 << _CPP14Parser.LeftParen - 75 | 1 << _CPP14Parser.LeftBracket - 75 | 1 << _CPP14Parser.Plus - 75 | 1 << _CPP14Parser.Minus - 75 | 1 << _CPP14Parser.Star - 75 | 1 << _CPP14Parser.And - 75 | 1 << _CPP14Parser.Or - 75 | 1 << _CPP14Parser.Tilde - 75 | 1 << _CPP14Parser.Not - 75)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                        {
                          this.state = 1431;
                          this.constantExpression();
                        }
                      }
                      this.state = 1434;
                      this.match(_CPP14Parser.RightBracket);
                      this.state = 1436;
                      this._errHandler.sync(this);
                      switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                        case 1:
                          {
                            this.state = 1435;
                            this.attributeSpecifierSeq();
                          }
                          break;
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
            }
          }
          this.state = 1444;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  parametersAndQualifiers() {
    let _localctx = new ParametersAndQualifiersContext(this._ctx, this.state);
    this.enterRule(_localctx, 232, _CPP14Parser.RULE_parametersAndQualifiers);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1445;
        this.match(_CPP14Parser.LeftParen);
        this.state = 1447;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.Alignas | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Constexpr | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Double)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Explicit - 33 | 1 << _CPP14Parser.Extern - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Friend - 33 | 1 << _CPP14Parser.Inline - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Mutable - 33 | 1 << _CPP14Parser.Register - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Static - 33)) !== 0 || (_la - 66 & ~31) === 0 && (1 << _la - 66 & (1 << _CPP14Parser.Struct - 66 | 1 << _CPP14Parser.Thread_local - 66 | 1 << _CPP14Parser.Typedef - 66 | 1 << _CPP14Parser.Typename_ - 66 | 1 << _CPP14Parser.Union - 66 | 1 << _CPP14Parser.Unsigned - 66 | 1 << _CPP14Parser.Virtual - 66 | 1 << _CPP14Parser.Void - 66 | 1 << _CPP14Parser.Volatile - 66 | 1 << _CPP14Parser.Wchar - 66 | 1 << _CPP14Parser.LeftBracket - 66)) !== 0 || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
          {
            this.state = 1446;
            this.parameterDeclarationClause();
          }
        }
        this.state = 1449;
        this.match(_CPP14Parser.RightParen);
        this.state = 1451;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
          case 1:
            {
              this.state = 1450;
              this.cvqualifierseq();
            }
            break;
        }
        this.state = 1454;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
          case 1:
            {
              this.state = 1453;
              this.refqualifier();
            }
            break;
        }
        this.state = 1457;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
          case 1:
            {
              this.state = 1456;
              this.exceptionSpecification();
            }
            break;
        }
        this.state = 1460;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
          case 1:
            {
              this.state = 1459;
              this.attributeSpecifierSeq();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  trailingReturnType() {
    let _localctx = new TrailingReturnTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 234, _CPP14Parser.RULE_trailingReturnType);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1462;
        this.match(_CPP14Parser.Arrow);
        this.state = 1463;
        this.trailingTypeSpecifierSeq();
        this.state = 1465;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
          case 1:
            {
              this.state = 1464;
              this.abstractDeclarator();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pointerOperator() {
    let _localctx = new PointerOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 236, _CPP14Parser.RULE_pointerOperator);
    let _la;
    try {
      this.state = 1481;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.And:
        case _CPP14Parser.AndAnd:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1467;
            _la = this._input.LA(1);
            if (!(_la === _CPP14Parser.And || _la === _CPP14Parser.AndAnd)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1469;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
              case 1:
                {
                  this.state = 1468;
                  this.attributeSpecifierSeq();
                }
                break;
            }
          }
          break;
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Star:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1472;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Decltype || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
              {
                this.state = 1471;
                this.nestedNameSpecifier(0);
              }
            }
            this.state = 1474;
            this.match(_CPP14Parser.Star);
            this.state = 1476;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
              case 1:
                {
                  this.state = 1475;
                  this.attributeSpecifierSeq();
                }
                break;
            }
            this.state = 1479;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
              case 1:
                {
                  this.state = 1478;
                  this.cvqualifierseq();
                }
                break;
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  cvqualifierseq() {
    let _localctx = new CvqualifierseqContext(this._ctx, this.state);
    this.enterRule(_localctx, 238, _CPP14Parser.RULE_cvqualifierseq);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1484;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1483;
                  this.cvQualifier();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1486;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  cvQualifier() {
    let _localctx = new CvQualifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 240, _CPP14Parser.RULE_cvQualifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1488;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Const || _la === _CPP14Parser.Volatile)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  refqualifier() {
    let _localctx = new RefqualifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 242, _CPP14Parser.RULE_refqualifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1490;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.And || _la === _CPP14Parser.AndAnd)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  declaratorid() {
    let _localctx = new DeclaratoridContext(this._ctx, this.state);
    this.enterRule(_localctx, 244, _CPP14Parser.RULE_declaratorid);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1493;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1492;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1495;
        this.idExpression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  theTypeId() {
    let _localctx = new TheTypeIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 246, _CPP14Parser.RULE_theTypeId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1497;
        this.typeSpecifierSeq();
        this.state = 1499;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
          case 1:
            {
              this.state = 1498;
              this.abstractDeclarator();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  abstractDeclarator() {
    let _localctx = new AbstractDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 248, _CPP14Parser.RULE_abstractDeclarator);
    try {
      this.state = 1509;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1501;
            this.pointerAbstractDeclarator();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1503;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
              case 1:
                {
                  this.state = 1502;
                  this.noPointerAbstractDeclarator(0);
                }
                break;
            }
            this.state = 1505;
            this.parametersAndQualifiers();
            this.state = 1506;
            this.trailingReturnType();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1508;
            this.abstractPackDeclarator();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pointerAbstractDeclarator() {
    let _localctx = new PointerAbstractDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 250, _CPP14Parser.RULE_pointerAbstractDeclarator);
    let _la;
    try {
      this.state = 1520;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftParen:
        case _CPP14Parser.LeftBracket:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1511;
            this.noPointerAbstractDeclarator(0);
          }
          break;
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Star:
        case _CPP14Parser.And:
        case _CPP14Parser.AndAnd:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1513;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 1512;
                  this.pointerOperator();
                }
              }
              this.state = 1515;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === _CPP14Parser.Decltype || (_la - 93 & ~31) === 0 && (1 << _la - 93 & (1 << _CPP14Parser.Star - 93 | 1 << _CPP14Parser.And - 93 | 1 << _CPP14Parser.AndAnd - 93)) !== 0 || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier);
            this.state = 1518;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
              case 1:
                {
                  this.state = 1517;
                  this.noPointerAbstractDeclarator(0);
                }
                break;
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noPointerAbstractDeclarator(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new NoPointerAbstractDeclaratorContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 252;
    this.enterRecursionRule(_localctx, 252, _CPP14Parser.RULE_noPointerAbstractDeclarator, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1536;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
          case 1:
            {
              this.state = 1523;
              this.parametersAndQualifiers();
            }
            break;
          case 2:
            {
              this.state = 1524;
              this.match(_CPP14Parser.LeftBracket);
              this.state = 1526;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 75 & ~31) === 0 && (1 << _la - 75 & (1 << _CPP14Parser.Typeid_ - 75 | 1 << _CPP14Parser.Typename_ - 75 | 1 << _CPP14Parser.Unsigned - 75 | 1 << _CPP14Parser.Void - 75 | 1 << _CPP14Parser.Wchar - 75 | 1 << _CPP14Parser.LeftParen - 75 | 1 << _CPP14Parser.LeftBracket - 75 | 1 << _CPP14Parser.Plus - 75 | 1 << _CPP14Parser.Minus - 75 | 1 << _CPP14Parser.Star - 75 | 1 << _CPP14Parser.And - 75 | 1 << _CPP14Parser.Or - 75 | 1 << _CPP14Parser.Tilde - 75 | 1 << _CPP14Parser.Not - 75)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                {
                  this.state = 1525;
                  this.constantExpression();
                }
              }
              this.state = 1528;
              this.match(_CPP14Parser.RightBracket);
              this.state = 1530;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
                case 1:
                  {
                    this.state = 1529;
                    this.attributeSpecifierSeq();
                  }
                  break;
              }
            }
            break;
          case 3:
            {
              this.state = 1532;
              this.match(_CPP14Parser.LeftParen);
              this.state = 1533;
              this.pointerAbstractDeclarator();
              this.state = 1534;
              this.match(_CPP14Parser.RightParen);
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1553;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new NoPointerAbstractDeclaratorContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_noPointerAbstractDeclarator);
                this.state = 1538;
                if (!this.precpred(this._ctx, 4)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                }
                this.state = 1549;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 201, this._ctx)) {
                  case 1:
                    {
                      this.state = 1539;
                      this.parametersAndQualifiers();
                    }
                    break;
                  case 2:
                    {
                      this.state = 1540;
                      this.noPointerAbstractDeclarator(0);
                      this.state = 1541;
                      this.match(_CPP14Parser.LeftBracket);
                      this.state = 1543;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 75 & ~31) === 0 && (1 << _la - 75 & (1 << _CPP14Parser.Typeid_ - 75 | 1 << _CPP14Parser.Typename_ - 75 | 1 << _CPP14Parser.Unsigned - 75 | 1 << _CPP14Parser.Void - 75 | 1 << _CPP14Parser.Wchar - 75 | 1 << _CPP14Parser.LeftParen - 75 | 1 << _CPP14Parser.LeftBracket - 75 | 1 << _CPP14Parser.Plus - 75 | 1 << _CPP14Parser.Minus - 75 | 1 << _CPP14Parser.Star - 75 | 1 << _CPP14Parser.And - 75 | 1 << _CPP14Parser.Or - 75 | 1 << _CPP14Parser.Tilde - 75 | 1 << _CPP14Parser.Not - 75)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                        {
                          this.state = 1542;
                          this.constantExpression();
                        }
                      }
                      this.state = 1545;
                      this.match(_CPP14Parser.RightBracket);
                      this.state = 1547;
                      this._errHandler.sync(this);
                      switch (this.interpreter.adaptivePredict(this._input, 200, this._ctx)) {
                        case 1:
                          {
                            this.state = 1546;
                            this.attributeSpecifierSeq();
                          }
                          break;
                      }
                    }
                    break;
                }
              }
            }
          }
          this.state = 1555;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  abstractPackDeclarator() {
    let _localctx = new AbstractPackDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 254, _CPP14Parser.RULE_abstractPackDeclarator);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1559;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Decltype || (_la - 93 & ~31) === 0 && (1 << _la - 93 & (1 << _CPP14Parser.Star - 93 | 1 << _CPP14Parser.And - 93 | 1 << _CPP14Parser.AndAnd - 93)) !== 0 || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
          {
            {
              this.state = 1556;
              this.pointerOperator();
            }
          }
          this.state = 1561;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1562;
        this.noPointerAbstractPackDeclarator(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noPointerAbstractPackDeclarator(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let _localctx = new NoPointerAbstractPackDeclaratorContext(this._ctx, _parentState);
    let _prevctx = _localctx;
    let _startState = 256;
    this.enterRecursionRule(_localctx, 256, _CPP14Parser.RULE_noPointerAbstractPackDeclarator, _p);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1565;
          this.match(_CPP14Parser.Ellipsis);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1581;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new NoPointerAbstractPackDeclaratorContext(_parentctx, _parentState);
                this.pushNewRecursionContext(_localctx, _startState, _CPP14Parser.RULE_noPointerAbstractPackDeclarator);
                this.state = 1567;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                }
                this.state = 1577;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case _CPP14Parser.LeftParen:
                    {
                      this.state = 1568;
                      this.parametersAndQualifiers();
                    }
                    break;
                  case _CPP14Parser.LeftBracket:
                    {
                      this.state = 1569;
                      this.match(_CPP14Parser.LeftBracket);
                      this.state = 1571;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 75 & ~31) === 0 && (1 << _la - 75 & (1 << _CPP14Parser.Typeid_ - 75 | 1 << _CPP14Parser.Typename_ - 75 | 1 << _CPP14Parser.Unsigned - 75 | 1 << _CPP14Parser.Void - 75 | 1 << _CPP14Parser.Wchar - 75 | 1 << _CPP14Parser.LeftParen - 75 | 1 << _CPP14Parser.LeftBracket - 75 | 1 << _CPP14Parser.Plus - 75 | 1 << _CPP14Parser.Minus - 75 | 1 << _CPP14Parser.Star - 75 | 1 << _CPP14Parser.And - 75 | 1 << _CPP14Parser.Or - 75 | 1 << _CPP14Parser.Tilde - 75 | 1 << _CPP14Parser.Not - 75)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                        {
                          this.state = 1570;
                          this.constantExpression();
                        }
                      }
                      this.state = 1573;
                      this.match(_CPP14Parser.RightBracket);
                      this.state = 1575;
                      this._errHandler.sync(this);
                      switch (this.interpreter.adaptivePredict(this._input, 205, this._ctx)) {
                        case 1:
                          {
                            this.state = 1574;
                            this.attributeSpecifierSeq();
                          }
                          break;
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
            }
          }
          this.state = 1583;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  parameterDeclarationClause() {
    let _localctx = new ParameterDeclarationClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 258, _CPP14Parser.RULE_parameterDeclarationClause);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1584;
        this.parameterDeclarationList();
        this.state = 1589;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Comma || _la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1586;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Comma) {
              {
                this.state = 1585;
                this.match(_CPP14Parser.Comma);
              }
            }
            this.state = 1588;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  parameterDeclarationList() {
    let _localctx = new ParameterDeclarationListContext(this._ctx, this.state);
    this.enterRule(_localctx, 260, _CPP14Parser.RULE_parameterDeclarationList);
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1591;
        this.parameterDeclaration();
        this.state = 1596;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1592;
                this.match(_CPP14Parser.Comma);
                this.state = 1593;
                this.parameterDeclaration();
              }
            }
          }
          this.state = 1598;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  parameterDeclaration() {
    let _localctx = new ParameterDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 262, _CPP14Parser.RULE_parameterDeclaration);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1600;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1599;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1602;
        this.declSpecifierSeq();
        {
          this.state = 1607;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
            case 1:
              {
                this.state = 1603;
                this.declarator();
              }
              break;
            case 2:
              {
                this.state = 1605;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
                  case 1:
                    {
                      this.state = 1604;
                      this.abstractDeclarator();
                    }
                    break;
                }
              }
              break;
          }
          this.state = 1611;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === _CPP14Parser.Assign) {
            {
              this.state = 1609;
              this.match(_CPP14Parser.Assign);
              this.state = 1610;
              this.initializerClause();
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  functionDefinition() {
    let _localctx = new FunctionDefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 264, _CPP14Parser.RULE_functionDefinition);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1614;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1613;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1617;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
          case 1:
            {
              this.state = 1616;
              this.declSpecifierSeq();
            }
            break;
        }
        this.state = 1619;
        this.declarator();
        this.state = 1621;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Final || _la === _CPP14Parser.Override) {
          {
            this.state = 1620;
            this.virtualSpecifierSeq();
          }
        }
        this.state = 1623;
        this.functionBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  functionBody() {
    let _localctx = new FunctionBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 266, _CPP14Parser.RULE_functionBody);
    let _la;
    try {
      this.state = 1633;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftBrace:
        case _CPP14Parser.Colon:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1626;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Colon) {
              {
                this.state = 1625;
                this.constructorInitializer();
              }
            }
            this.state = 1628;
            this.compoundStatement();
          }
          break;
        case _CPP14Parser.Try:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1629;
            this.functionTryBlock();
          }
          break;
        case _CPP14Parser.Assign:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1630;
            this.match(_CPP14Parser.Assign);
            this.state = 1631;
            _la = this._input.LA(1);
            if (!(_la === _CPP14Parser.Default || _la === _CPP14Parser.Delete)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1632;
            this.match(_CPP14Parser.Semi);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initializer() {
    let _localctx = new InitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 268, _CPP14Parser.RULE_initializer);
    try {
      this.state = 1640;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.LeftBrace:
        case _CPP14Parser.Assign:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1635;
            this.braceOrEqualInitializer();
          }
          break;
        case _CPP14Parser.LeftParen:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1636;
            this.match(_CPP14Parser.LeftParen);
            this.state = 1637;
            this.expressionList();
            this.state = 1638;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  braceOrEqualInitializer() {
    let _localctx = new BraceOrEqualInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 270, _CPP14Parser.RULE_braceOrEqualInitializer);
    try {
      this.state = 1645;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Assign:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1642;
            this.match(_CPP14Parser.Assign);
            this.state = 1643;
            this.initializerClause();
          }
          break;
        case _CPP14Parser.LeftBrace:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1644;
            this.bracedInitList();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initializerClause() {
    let _localctx = new InitializerClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 272, _CPP14Parser.RULE_initializerClause);
    try {
      this.state = 1649;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.IntegerLiteral:
        case _CPP14Parser.CharacterLiteral:
        case _CPP14Parser.FloatingLiteral:
        case _CPP14Parser.StringLiteral:
        case _CPP14Parser.BooleanLiteral:
        case _CPP14Parser.PointerLiteral:
        case _CPP14Parser.UserDefinedLiteral:
        case _CPP14Parser.Alignof:
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Const_cast:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Delete:
        case _CPP14Parser.Double:
        case _CPP14Parser.Dynamic_cast:
        case _CPP14Parser.Float:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.New:
        case _CPP14Parser.Noexcept:
        case _CPP14Parser.Operator:
        case _CPP14Parser.Reinterpret_cast:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Sizeof:
        case _CPP14Parser.Static_cast:
        case _CPP14Parser.This:
        case _CPP14Parser.Throw:
        case _CPP14Parser.Typeid_:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Void:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.LeftParen:
        case _CPP14Parser.LeftBracket:
        case _CPP14Parser.Plus:
        case _CPP14Parser.Minus:
        case _CPP14Parser.Star:
        case _CPP14Parser.And:
        case _CPP14Parser.Or:
        case _CPP14Parser.Tilde:
        case _CPP14Parser.Not:
        case _CPP14Parser.PlusPlus:
        case _CPP14Parser.MinusMinus:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1647;
            this.assignmentExpression();
          }
          break;
        case _CPP14Parser.LeftBrace:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1648;
            this.bracedInitList();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  initializerList() {
    let _localctx = new InitializerListContext(this._ctx, this.state);
    this.enterRule(_localctx, 274, _CPP14Parser.RULE_initializerList);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1651;
        this.initializerClause();
        this.state = 1653;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1652;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1662;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1655;
                this.match(_CPP14Parser.Comma);
                this.state = 1656;
                this.initializerClause();
                this.state = 1658;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Ellipsis) {
                  {
                    this.state = 1657;
                    this.match(_CPP14Parser.Ellipsis);
                  }
                }
              }
            }
          }
          this.state = 1664;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  bracedInitList() {
    let _localctx = new BracedInitListContext(this._ctx, this.state);
    this.enterRule(_localctx, 276, _CPP14Parser.RULE_bracedInitList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1665;
        this.match(_CPP14Parser.LeftBrace);
        this.state = 1670;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.LeftBrace - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
          {
            this.state = 1666;
            this.initializerList();
            this.state = 1668;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Comma) {
              {
                this.state = 1667;
                this.match(_CPP14Parser.Comma);
              }
            }
          }
        }
        this.state = 1672;
        this.match(_CPP14Parser.RightBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  className() {
    let _localctx = new ClassNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 278, _CPP14Parser.RULE_className);
    try {
      this.state = 1676;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1674;
            this.match(_CPP14Parser.Identifier);
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1675;
            this.simpleTemplateId();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classSpecifier() {
    let _localctx = new ClassSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 280, _CPP14Parser.RULE_classSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1678;
        this.classHead();
        this.state = 1679;
        this.match(_CPP14Parser.LeftBrace);
        this.state = 1681;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Private - 44 | 1 << _CPP14Parser.Protected - 44 | 1 << _CPP14Parser.Public - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Colon - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
          {
            this.state = 1680;
            this.memberSpecification();
          }
        }
        this.state = 1683;
        this.match(_CPP14Parser.RightBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classHead() {
    let _localctx = new ClassHeadContext(this._ctx, this.state);
    this.enterRule(_localctx, 282, _CPP14Parser.RULE_classHead);
    let _la;
    try {
      this.state = 1708;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Class:
        case _CPP14Parser.Struct:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1685;
            this.classKey();
            this.state = 1687;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
              {
                this.state = 1686;
                this.attributeSpecifierSeq();
              }
            }
            this.state = 1693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Decltype || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
              {
                this.state = 1689;
                this.classHeadName();
                this.state = 1691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Final) {
                  {
                    this.state = 1690;
                    this.classVirtSpecifier();
                  }
                }
              }
            }
            this.state = 1696;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Colon) {
              {
                this.state = 1695;
                this.baseClause();
              }
            }
          }
          break;
        case _CPP14Parser.Union:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1698;
            this.match(_CPP14Parser.Union);
            this.state = 1700;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
              {
                this.state = 1699;
                this.attributeSpecifierSeq();
              }
            }
            this.state = 1706;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Decltype || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
              {
                this.state = 1702;
                this.classHeadName();
                this.state = 1704;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Final) {
                  {
                    this.state = 1703;
                    this.classVirtSpecifier();
                  }
                }
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classHeadName() {
    let _localctx = new ClassHeadNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 284, _CPP14Parser.RULE_classHeadName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1711;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 238, this._ctx)) {
          case 1:
            {
              this.state = 1710;
              this.nestedNameSpecifier(0);
            }
            break;
        }
        this.state = 1713;
        this.className();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classVirtSpecifier() {
    let _localctx = new ClassVirtSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 286, _CPP14Parser.RULE_classVirtSpecifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1715;
        this.match(_CPP14Parser.Final);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classKey() {
    let _localctx = new ClassKeyContext(this._ctx, this.state);
    this.enterRule(_localctx, 288, _CPP14Parser.RULE_classKey);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1717;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Class || _la === _CPP14Parser.Struct)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memberSpecification() {
    let _localctx = new MemberSpecificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 290, _CPP14Parser.RULE_memberSpecification);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1723;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            this.state = 1723;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case _CPP14Parser.Alignas:
              case _CPP14Parser.Auto:
              case _CPP14Parser.Bool:
              case _CPP14Parser.Char:
              case _CPP14Parser.Char16:
              case _CPP14Parser.Char32:
              case _CPP14Parser.Class:
              case _CPP14Parser.Const:
              case _CPP14Parser.Constexpr:
              case _CPP14Parser.Decltype:
              case _CPP14Parser.Double:
              case _CPP14Parser.Enum:
              case _CPP14Parser.Explicit:
              case _CPP14Parser.Extern:
              case _CPP14Parser.Float:
              case _CPP14Parser.Friend:
              case _CPP14Parser.Inline:
              case _CPP14Parser.Int:
              case _CPP14Parser.Long:
              case _CPP14Parser.Mutable:
              case _CPP14Parser.Operator:
              case _CPP14Parser.Register:
              case _CPP14Parser.Short:
              case _CPP14Parser.Signed:
              case _CPP14Parser.Static:
              case _CPP14Parser.Static_assert:
              case _CPP14Parser.Struct:
              case _CPP14Parser.Template:
              case _CPP14Parser.Thread_local:
              case _CPP14Parser.Typedef:
              case _CPP14Parser.Typename_:
              case _CPP14Parser.Union:
              case _CPP14Parser.Unsigned:
              case _CPP14Parser.Using:
              case _CPP14Parser.Virtual:
              case _CPP14Parser.Void:
              case _CPP14Parser.Volatile:
              case _CPP14Parser.Wchar:
              case _CPP14Parser.LeftParen:
              case _CPP14Parser.LeftBracket:
              case _CPP14Parser.Star:
              case _CPP14Parser.And:
              case _CPP14Parser.Tilde:
              case _CPP14Parser.AndAnd:
              case _CPP14Parser.Colon:
              case _CPP14Parser.Doublecolon:
              case _CPP14Parser.Semi:
              case _CPP14Parser.Ellipsis:
              case _CPP14Parser.Identifier:
                {
                  this.state = 1719;
                  this.memberdeclaration();
                }
                break;
              case _CPP14Parser.Private:
              case _CPP14Parser.Protected:
              case _CPP14Parser.Public:
                {
                  this.state = 1720;
                  this.accessSpecifier();
                  this.state = 1721;
                  this.match(_CPP14Parser.Colon);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 1725;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la - 10 & ~31) === 0 && (1 << _la - 10 & (1 << _CPP14Parser.Alignas - 10 | 1 << _CPP14Parser.Auto - 10 | 1 << _CPP14Parser.Bool - 10 | 1 << _CPP14Parser.Char - 10 | 1 << _CPP14Parser.Char16 - 10 | 1 << _CPP14Parser.Char32 - 10 | 1 << _CPP14Parser.Class - 10 | 1 << _CPP14Parser.Const - 10 | 1 << _CPP14Parser.Constexpr - 10 | 1 << _CPP14Parser.Decltype - 10 | 1 << _CPP14Parser.Double - 10 | 1 << _CPP14Parser.Enum - 10 | 1 << _CPP14Parser.Explicit - 10 | 1 << _CPP14Parser.Extern - 10 | 1 << _CPP14Parser.Float - 10 | 1 << _CPP14Parser.Friend - 10)) !== 0 || (_la - 44 & ~31) === 0 && (1 << _la - 44 & (1 << _CPP14Parser.Inline - 44 | 1 << _CPP14Parser.Int - 44 | 1 << _CPP14Parser.Long - 44 | 1 << _CPP14Parser.Mutable - 44 | 1 << _CPP14Parser.Operator - 44 | 1 << _CPP14Parser.Private - 44 | 1 << _CPP14Parser.Protected - 44 | 1 << _CPP14Parser.Public - 44 | 1 << _CPP14Parser.Register - 44 | 1 << _CPP14Parser.Short - 44 | 1 << _CPP14Parser.Signed - 44 | 1 << _CPP14Parser.Static - 44 | 1 << _CPP14Parser.Static_assert - 44 | 1 << _CPP14Parser.Struct - 44 | 1 << _CPP14Parser.Template - 44 | 1 << _CPP14Parser.Thread_local - 44 | 1 << _CPP14Parser.Typedef - 44)) !== 0 || (_la - 76 & ~31) === 0 && (1 << _la - 76 & (1 << _CPP14Parser.Typename_ - 76 | 1 << _CPP14Parser.Union - 76 | 1 << _CPP14Parser.Unsigned - 76 | 1 << _CPP14Parser.Using - 76 | 1 << _CPP14Parser.Virtual - 76 | 1 << _CPP14Parser.Void - 76 | 1 << _CPP14Parser.Volatile - 76 | 1 << _CPP14Parser.Wchar - 76 | 1 << _CPP14Parser.LeftParen - 76 | 1 << _CPP14Parser.LeftBracket - 76 | 1 << _CPP14Parser.Star - 76 | 1 << _CPP14Parser.And - 76 | 1 << _CPP14Parser.Tilde - 76)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Colon - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Semi - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memberdeclaration() {
    let _localctx = new MemberdeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 292, _CPP14Parser.RULE_memberdeclaration);
    let _la;
    try {
      this.state = 1743;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 244, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1728;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 241, this._ctx)) {
              case 1:
                {
                  this.state = 1727;
                  this.attributeSpecifierSeq();
                }
                break;
            }
            this.state = 1731;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 242, this._ctx)) {
              case 1:
                {
                  this.state = 1730;
                  this.declSpecifierSeq();
                }
                break;
            }
            this.state = 1734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.Decltype || _la === _CPP14Parser.Operator || (_la - 85 & ~31) === 0 && (1 << _la - 85 & (1 << _CPP14Parser.LeftParen - 85 | 1 << _CPP14Parser.LeftBracket - 85 | 1 << _CPP14Parser.Star - 85 | 1 << _CPP14Parser.And - 85 | 1 << _CPP14Parser.Tilde - 85)) !== 0 || (_la - 118 & ~31) === 0 && (1 << _la - 118 & (1 << _CPP14Parser.AndAnd - 118 | 1 << _CPP14Parser.Colon - 118 | 1 << _CPP14Parser.Doublecolon - 118 | 1 << _CPP14Parser.Ellipsis - 118 | 1 << _CPP14Parser.Identifier - 118)) !== 0) {
              {
                this.state = 1733;
                this.memberDeclaratorList();
              }
            }
            this.state = 1736;
            this.match(_CPP14Parser.Semi);
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1737;
            this.functionDefinition();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1738;
            this.usingDeclaration();
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1739;
            this.staticAssertDeclaration();
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1740;
            this.templateDeclaration();
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1741;
            this.aliasDeclaration();
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1742;
            this.emptyDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memberDeclaratorList() {
    let _localctx = new MemberDeclaratorListContext(this._ctx, this.state);
    this.enterRule(_localctx, 294, _CPP14Parser.RULE_memberDeclaratorList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1745;
        this.memberDeclarator();
        this.state = 1750;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1746;
              this.match(_CPP14Parser.Comma);
              this.state = 1747;
              this.memberDeclarator();
            }
          }
          this.state = 1752;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memberDeclarator() {
    let _localctx = new MemberDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 296, _CPP14Parser.RULE_memberDeclarator);
    let _la;
    try {
      this.state = 1773;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 252, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1753;
            this.declarator();
            this.state = 1763;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 249, this._ctx)) {
              case 1:
                {
                  this.state = 1755;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === _CPP14Parser.Final || _la === _CPP14Parser.Override) {
                    {
                      this.state = 1754;
                      this.virtualSpecifierSeq();
                    }
                  }
                  this.state = 1758;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === _CPP14Parser.Assign) {
                    {
                      this.state = 1757;
                      this.pureSpecifier();
                    }
                  }
                }
                break;
              case 2:
                {
                  this.state = 1761;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === _CPP14Parser.LeftBrace || _la === _CPP14Parser.Assign) {
                    {
                      this.state = 1760;
                      this.braceOrEqualInitializer();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1766;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Identifier) {
              {
                this.state = 1765;
                this.match(_CPP14Parser.Identifier);
              }
            }
            this.state = 1769;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
              {
                this.state = 1768;
                this.attributeSpecifierSeq();
              }
            }
            this.state = 1771;
            this.match(_CPP14Parser.Colon);
            this.state = 1772;
            this.constantExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  virtualSpecifierSeq() {
    let _localctx = new VirtualSpecifierSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 298, _CPP14Parser.RULE_virtualSpecifierSeq);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1776;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1775;
              this.virtualSpecifier();
            }
          }
          this.state = 1778;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === _CPP14Parser.Final || _la === _CPP14Parser.Override);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  virtualSpecifier() {
    let _localctx = new VirtualSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 300, _CPP14Parser.RULE_virtualSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1780;
        _la = this._input.LA(1);
        if (!(_la === _CPP14Parser.Final || _la === _CPP14Parser.Override)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  pureSpecifier() {
    let _localctx = new PureSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 302, _CPP14Parser.RULE_pureSpecifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1782;
        this.match(_CPP14Parser.Assign);
        this.state = 1783;
        _localctx._val = this.match(_CPP14Parser.OctalLiteral);
        if ((_localctx._val != null ? _localctx._val.text : void 0) !== "0")
          throw new Error(_localctx._val != null ? _localctx._val.text : void 0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  baseClause() {
    let _localctx = new BaseClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 304, _CPP14Parser.RULE_baseClause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1786;
        this.match(_CPP14Parser.Colon);
        this.state = 1787;
        this.baseSpecifierList();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  baseSpecifierList() {
    let _localctx = new BaseSpecifierListContext(this._ctx, this.state);
    this.enterRule(_localctx, 306, _CPP14Parser.RULE_baseSpecifierList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1789;
        this.baseSpecifier();
        this.state = 1791;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1790;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1800;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1793;
              this.match(_CPP14Parser.Comma);
              this.state = 1794;
              this.baseSpecifier();
              this.state = 1796;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Ellipsis) {
                {
                  this.state = 1795;
                  this.match(_CPP14Parser.Ellipsis);
                }
              }
            }
          }
          this.state = 1802;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  baseSpecifier() {
    let _localctx = new BaseSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 308, _CPP14Parser.RULE_baseSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1804;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
          {
            this.state = 1803;
            this.attributeSpecifierSeq();
          }
        }
        this.state = 1818;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Decltype:
          case _CPP14Parser.Doublecolon:
          case _CPP14Parser.Identifier:
            {
              this.state = 1806;
              this.baseTypeSpecifier();
            }
            break;
          case _CPP14Parser.Virtual:
            {
              this.state = 1807;
              this.match(_CPP14Parser.Virtual);
              this.state = 1809;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if ((_la - 54 & ~31) === 0 && (1 << _la - 54 & (1 << _CPP14Parser.Private - 54 | 1 << _CPP14Parser.Protected - 54 | 1 << _CPP14Parser.Public - 54)) !== 0) {
                {
                  this.state = 1808;
                  this.accessSpecifier();
                }
              }
              this.state = 1811;
              this.baseTypeSpecifier();
            }
            break;
          case _CPP14Parser.Private:
          case _CPP14Parser.Protected:
          case _CPP14Parser.Public:
            {
              this.state = 1812;
              this.accessSpecifier();
              this.state = 1814;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Virtual) {
                {
                  this.state = 1813;
                  this.match(_CPP14Parser.Virtual);
                }
              }
              this.state = 1816;
              this.baseTypeSpecifier();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  classOrDeclType() {
    let _localctx = new ClassOrDeclTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 310, _CPP14Parser.RULE_classOrDeclType);
    try {
      this.state = 1825;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 262, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1821;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 261, this._ctx)) {
              case 1:
                {
                  this.state = 1820;
                  this.nestedNameSpecifier(0);
                }
                break;
            }
            this.state = 1823;
            this.className();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1824;
            this.decltypeSpecifier();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  baseTypeSpecifier() {
    let _localctx = new BaseTypeSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 312, _CPP14Parser.RULE_baseTypeSpecifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1827;
        this.classOrDeclType();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  accessSpecifier() {
    let _localctx = new AccessSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 314, _CPP14Parser.RULE_accessSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1829;
        _la = this._input.LA(1);
        if (!((_la - 54 & ~31) === 0 && (1 << _la - 54 & (1 << _CPP14Parser.Private - 54 | 1 << _CPP14Parser.Protected - 54 | 1 << _CPP14Parser.Public - 54)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  conversionFunctionId() {
    let _localctx = new ConversionFunctionIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 316, _CPP14Parser.RULE_conversionFunctionId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1831;
        this.match(_CPP14Parser.Operator);
        this.state = 1832;
        this.conversionTypeId();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  conversionTypeId() {
    let _localctx = new ConversionTypeIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 318, _CPP14Parser.RULE_conversionTypeId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1834;
        this.typeSpecifierSeq();
        this.state = 1836;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 263, this._ctx)) {
          case 1:
            {
              this.state = 1835;
              this.conversionDeclarator();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  conversionDeclarator() {
    let _localctx = new ConversionDeclaratorContext(this._ctx, this.state);
    this.enterRule(_localctx, 320, _CPP14Parser.RULE_conversionDeclarator);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1838;
        this.pointerOperator();
        this.state = 1840;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 264, this._ctx)) {
          case 1:
            {
              this.state = 1839;
              this.conversionDeclarator();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  constructorInitializer() {
    let _localctx = new ConstructorInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 322, _CPP14Parser.RULE_constructorInitializer);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1842;
        this.match(_CPP14Parser.Colon);
        this.state = 1843;
        this.memInitializerList();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memInitializerList() {
    let _localctx = new MemInitializerListContext(this._ctx, this.state);
    this.enterRule(_localctx, 324, _CPP14Parser.RULE_memInitializerList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1845;
        this.memInitializer();
        this.state = 1847;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1846;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1856;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1849;
              this.match(_CPP14Parser.Comma);
              this.state = 1850;
              this.memInitializer();
              this.state = 1852;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Ellipsis) {
                {
                  this.state = 1851;
                  this.match(_CPP14Parser.Ellipsis);
                }
              }
            }
          }
          this.state = 1858;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  memInitializer() {
    let _localctx = new MemInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 326, _CPP14Parser.RULE_memInitializer);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1859;
        this.meminitializerid();
        this.state = 1866;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.LeftParen:
            {
              this.state = 1860;
              this.match(_CPP14Parser.LeftParen);
              this.state = 1862;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.LeftBrace - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
                {
                  this.state = 1861;
                  this.expressionList();
                }
              }
              this.state = 1864;
              this.match(_CPP14Parser.RightParen);
            }
            break;
          case _CPP14Parser.LeftBrace:
            {
              this.state = 1865;
              this.bracedInitList();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  meminitializerid() {
    let _localctx = new MeminitializeridContext(this._ctx, this.state);
    this.enterRule(_localctx, 328, _CPP14Parser.RULE_meminitializerid);
    try {
      this.state = 1870;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 270, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1868;
            this.classOrDeclType();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1869;
            this.match(_CPP14Parser.Identifier);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  operatorFunctionId() {
    let _localctx = new OperatorFunctionIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 330, _CPP14Parser.RULE_operatorFunctionId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1872;
        this.match(_CPP14Parser.Operator);
        this.state = 1873;
        this.theOperator();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  literalOperatorId() {
    let _localctx = new LiteralOperatorIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 332, _CPP14Parser.RULE_literalOperatorId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1875;
        this.match(_CPP14Parser.Operator);
        this.state = 1879;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.StringLiteral:
            {
              this.state = 1876;
              this.match(_CPP14Parser.StringLiteral);
              this.state = 1877;
              this.match(_CPP14Parser.Identifier);
            }
            break;
          case _CPP14Parser.UserDefinedStringLiteral:
            {
              this.state = 1878;
              this.match(_CPP14Parser.UserDefinedStringLiteral);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateDeclaration() {
    let _localctx = new TemplateDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 334, _CPP14Parser.RULE_templateDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1881;
        this.match(_CPP14Parser.Template);
        this.state = 1882;
        this.match(_CPP14Parser.Less);
        this.state = 1883;
        this.templateparameterList();
        this.state = 1884;
        this.match(_CPP14Parser.Greater);
        this.state = 1885;
        this.declaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateparameterList() {
    let _localctx = new TemplateparameterListContext(this._ctx, this.state);
    this.enterRule(_localctx, 336, _CPP14Parser.RULE_templateparameterList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1887;
        this.templateParameter();
        this.state = 1892;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1888;
              this.match(_CPP14Parser.Comma);
              this.state = 1889;
              this.templateParameter();
            }
          }
          this.state = 1894;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateParameter() {
    let _localctx = new TemplateParameterContext(this._ctx, this.state);
    this.enterRule(_localctx, 338, _CPP14Parser.RULE_templateParameter);
    try {
      this.state = 1897;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 273, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1895;
            this.typeParameter();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1896;
            this.parameterDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeParameter() {
    let _localctx = new TypeParameterContext(this._ctx, this.state);
    this.enterRule(_localctx, 340, _CPP14Parser.RULE_typeParameter);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1908;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case _CPP14Parser.Class:
          case _CPP14Parser.Template:
            {
              this.state = 1904;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Template) {
                {
                  this.state = 1899;
                  this.match(_CPP14Parser.Template);
                  this.state = 1900;
                  this.match(_CPP14Parser.Less);
                  this.state = 1901;
                  this.templateparameterList();
                  this.state = 1902;
                  this.match(_CPP14Parser.Greater);
                }
              }
              this.state = 1906;
              this.match(_CPP14Parser.Class);
            }
            break;
          case _CPP14Parser.Typename_:
            {
              this.state = 1907;
              this.match(_CPP14Parser.Typename_);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1921;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 279, this._ctx)) {
          case 1:
            {
              {
                this.state = 1911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Ellipsis) {
                  {
                    this.state = 1910;
                    this.match(_CPP14Parser.Ellipsis);
                  }
                }
                this.state = 1914;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Identifier) {
                  {
                    this.state = 1913;
                    this.match(_CPP14Parser.Identifier);
                  }
                }
              }
            }
            break;
          case 2:
            {
              {
                this.state = 1917;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === _CPP14Parser.Identifier) {
                  {
                    this.state = 1916;
                    this.match(_CPP14Parser.Identifier);
                  }
                }
                this.state = 1919;
                this.match(_CPP14Parser.Assign);
                this.state = 1920;
                this.theTypeId();
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  simpleTemplateId() {
    let _localctx = new SimpleTemplateIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 342, _CPP14Parser.RULE_simpleTemplateId);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1923;
        this.templateName();
        this.state = 1924;
        this.match(_CPP14Parser.Less);
        this.state = 1926;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.New - 33 | 1 << _CPP14Parser.Noexcept - 33 | 1 << _CPP14Parser.Operator - 33 | 1 << _CPP14Parser.Reinterpret_cast - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Sizeof - 33)) !== 0 || (_la - 65 & ~31) === 0 && (1 << _la - 65 & (1 << _CPP14Parser.Static_cast - 65 | 1 << _CPP14Parser.Struct - 65 | 1 << _CPP14Parser.This - 65 | 1 << _CPP14Parser.Typeid_ - 65 | 1 << _CPP14Parser.Typename_ - 65 | 1 << _CPP14Parser.Union - 65 | 1 << _CPP14Parser.Unsigned - 65 | 1 << _CPP14Parser.Void - 65 | 1 << _CPP14Parser.Volatile - 65 | 1 << _CPP14Parser.Wchar - 65 | 1 << _CPP14Parser.LeftParen - 65 | 1 << _CPP14Parser.LeftBracket - 65 | 1 << _CPP14Parser.Plus - 65 | 1 << _CPP14Parser.Minus - 65 | 1 << _CPP14Parser.Star - 65)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << _CPP14Parser.And - 97 | 1 << _CPP14Parser.Or - 97 | 1 << _CPP14Parser.Tilde - 97 | 1 << _CPP14Parser.Not - 97 | 1 << _CPP14Parser.PlusPlus - 97 | 1 << _CPP14Parser.MinusMinus - 97 | 1 << _CPP14Parser.Doublecolon - 97)) !== 0 || _la === _CPP14Parser.Identifier) {
          {
            this.state = 1925;
            this.templateArgumentList();
          }
        }
        this.state = 1928;
        this.match(_CPP14Parser.Greater);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateId() {
    let _localctx = new TemplateIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 344, _CPP14Parser.RULE_templateId);
    let _la;
    try {
      this.state = 1941;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1930;
            this.simpleTemplateId();
          }
          break;
        case _CPP14Parser.Operator:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1933;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 281, this._ctx)) {
              case 1:
                {
                  this.state = 1931;
                  this.operatorFunctionId();
                }
                break;
              case 2:
                {
                  this.state = 1932;
                  this.literalOperatorId();
                }
                break;
            }
            this.state = 1935;
            this.match(_CPP14Parser.Less);
            this.state = 1937;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.New - 33 | 1 << _CPP14Parser.Noexcept - 33 | 1 << _CPP14Parser.Operator - 33 | 1 << _CPP14Parser.Reinterpret_cast - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33 | 1 << _CPP14Parser.Sizeof - 33)) !== 0 || (_la - 65 & ~31) === 0 && (1 << _la - 65 & (1 << _CPP14Parser.Static_cast - 65 | 1 << _CPP14Parser.Struct - 65 | 1 << _CPP14Parser.This - 65 | 1 << _CPP14Parser.Typeid_ - 65 | 1 << _CPP14Parser.Typename_ - 65 | 1 << _CPP14Parser.Union - 65 | 1 << _CPP14Parser.Unsigned - 65 | 1 << _CPP14Parser.Void - 65 | 1 << _CPP14Parser.Volatile - 65 | 1 << _CPP14Parser.Wchar - 65 | 1 << _CPP14Parser.LeftParen - 65 | 1 << _CPP14Parser.LeftBracket - 65 | 1 << _CPP14Parser.Plus - 65 | 1 << _CPP14Parser.Minus - 65 | 1 << _CPP14Parser.Star - 65)) !== 0 || (_la - 97 & ~31) === 0 && (1 << _la - 97 & (1 << _CPP14Parser.And - 97 | 1 << _CPP14Parser.Or - 97 | 1 << _CPP14Parser.Tilde - 97 | 1 << _CPP14Parser.Not - 97 | 1 << _CPP14Parser.PlusPlus - 97 | 1 << _CPP14Parser.MinusMinus - 97 | 1 << _CPP14Parser.Doublecolon - 97)) !== 0 || _la === _CPP14Parser.Identifier) {
              {
                this.state = 1936;
                this.templateArgumentList();
              }
            }
            this.state = 1939;
            this.match(_CPP14Parser.Greater);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateName() {
    let _localctx = new TemplateNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 346, _CPP14Parser.RULE_templateName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1943;
        this.match(_CPP14Parser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateArgumentList() {
    let _localctx = new TemplateArgumentListContext(this._ctx, this.state);
    this.enterRule(_localctx, 348, _CPP14Parser.RULE_templateArgumentList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1945;
        this.templateArgument();
        this.state = 1947;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 1946;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 1956;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 1949;
              this.match(_CPP14Parser.Comma);
              this.state = 1950;
              this.templateArgument();
              this.state = 1952;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Ellipsis) {
                {
                  this.state = 1951;
                  this.match(_CPP14Parser.Ellipsis);
                }
              }
            }
          }
          this.state = 1958;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  templateArgument() {
    let _localctx = new TemplateArgumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 350, _CPP14Parser.RULE_templateArgument);
    try {
      this.state = 1962;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 287, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1959;
            this.theTypeId();
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1960;
            this.constantExpression();
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1961;
            this.idExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeNameSpecifier() {
    let _localctx = new TypeNameSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 352, _CPP14Parser.RULE_typeNameSpecifier);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1964;
        this.match(_CPP14Parser.Typename_);
        this.state = 1965;
        this.nestedNameSpecifier(0);
        this.state = 1971;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 289, this._ctx)) {
          case 1:
            {
              this.state = 1966;
              this.match(_CPP14Parser.Identifier);
            }
            break;
          case 2:
            {
              this.state = 1968;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Template) {
                {
                  this.state = 1967;
                  this.match(_CPP14Parser.Template);
                }
              }
              this.state = 1970;
              this.simpleTemplateId();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  explicitInstantiation() {
    let _localctx = new ExplicitInstantiationContext(this._ctx, this.state);
    this.enterRule(_localctx, 354, _CPP14Parser.RULE_explicitInstantiation);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1974;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Extern) {
          {
            this.state = 1973;
            this.match(_CPP14Parser.Extern);
          }
        }
        this.state = 1976;
        this.match(_CPP14Parser.Template);
        this.state = 1977;
        this.declaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  explicitSpecialization() {
    let _localctx = new ExplicitSpecializationContext(this._ctx, this.state);
    this.enterRule(_localctx, 356, _CPP14Parser.RULE_explicitSpecialization);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1979;
        this.match(_CPP14Parser.Template);
        this.state = 1980;
        this.match(_CPP14Parser.Less);
        this.state = 1981;
        this.match(_CPP14Parser.Greater);
        this.state = 1982;
        this.declaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  tryBlock() {
    let _localctx = new TryBlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 358, _CPP14Parser.RULE_tryBlock);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1984;
        this.match(_CPP14Parser.Try);
        this.state = 1985;
        this.compoundStatement();
        this.state = 1986;
        this.handlerSeq();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  functionTryBlock() {
    let _localctx = new FunctionTryBlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 360, _CPP14Parser.RULE_functionTryBlock);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1988;
        this.match(_CPP14Parser.Try);
        this.state = 1990;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Colon) {
          {
            this.state = 1989;
            this.constructorInitializer();
          }
        }
        this.state = 1992;
        this.compoundStatement();
        this.state = 1993;
        this.handlerSeq();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  handlerSeq() {
    let _localctx = new HandlerSeqContext(this._ctx, this.state);
    this.enterRule(_localctx, 362, _CPP14Parser.RULE_handlerSeq);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1996;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1995;
              this.handler();
            }
          }
          this.state = 1998;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === _CPP14Parser.Catch);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  handler() {
    let _localctx = new HandlerContext(this._ctx, this.state);
    this.enterRule(_localctx, 364, _CPP14Parser.RULE_handler);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2e3;
        this.match(_CPP14Parser.Catch);
        this.state = 2001;
        this.match(_CPP14Parser.LeftParen);
        this.state = 2002;
        this.exceptionDeclaration();
        this.state = 2003;
        this.match(_CPP14Parser.RightParen);
        this.state = 2004;
        this.compoundStatement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  exceptionDeclaration() {
    let _localctx = new ExceptionDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 366, _CPP14Parser.RULE_exceptionDeclaration);
    let _la;
    try {
      this.state = 2015;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Alignas:
        case _CPP14Parser.Auto:
        case _CPP14Parser.Bool:
        case _CPP14Parser.Char:
        case _CPP14Parser.Char16:
        case _CPP14Parser.Char32:
        case _CPP14Parser.Class:
        case _CPP14Parser.Const:
        case _CPP14Parser.Decltype:
        case _CPP14Parser.Double:
        case _CPP14Parser.Enum:
        case _CPP14Parser.Float:
        case _CPP14Parser.Int:
        case _CPP14Parser.Long:
        case _CPP14Parser.Short:
        case _CPP14Parser.Signed:
        case _CPP14Parser.Struct:
        case _CPP14Parser.Typename_:
        case _CPP14Parser.Union:
        case _CPP14Parser.Unsigned:
        case _CPP14Parser.Void:
        case _CPP14Parser.Volatile:
        case _CPP14Parser.Wchar:
        case _CPP14Parser.LeftBracket:
        case _CPP14Parser.Doublecolon:
        case _CPP14Parser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2007;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === _CPP14Parser.Alignas || _la === _CPP14Parser.LeftBracket) {
              {
                this.state = 2006;
                this.attributeSpecifierSeq();
              }
            }
            this.state = 2009;
            this.typeSpecifierSeq();
            this.state = 2012;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 294, this._ctx)) {
              case 1:
                {
                  this.state = 2010;
                  this.declarator();
                }
                break;
              case 2:
                {
                  this.state = 2011;
                  this.abstractDeclarator();
                }
                break;
            }
          }
          break;
        case _CPP14Parser.Ellipsis:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2014;
            this.match(_CPP14Parser.Ellipsis);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  throwExpression() {
    let _localctx = new ThrowExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 368, _CPP14Parser.RULE_throwExpression);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2017;
        this.match(_CPP14Parser.Throw);
        this.state = 2019;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral | 1 << _CPP14Parser.Alignof | 1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Const_cast | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Delete | 1 << _CPP14Parser.Double | 1 << _CPP14Parser.Dynamic_cast)) !== 0 || (_la - 39 & ~31) === 0 && (1 << _la - 39 & (1 << _CPP14Parser.Float - 39 | 1 << _CPP14Parser.Int - 39 | 1 << _CPP14Parser.Long - 39 | 1 << _CPP14Parser.New - 39 | 1 << _CPP14Parser.Noexcept - 39 | 1 << _CPP14Parser.Operator - 39 | 1 << _CPP14Parser.Reinterpret_cast - 39 | 1 << _CPP14Parser.Short - 39 | 1 << _CPP14Parser.Signed - 39 | 1 << _CPP14Parser.Sizeof - 39 | 1 << _CPP14Parser.Static_cast - 39 | 1 << _CPP14Parser.This - 39)) !== 0 || (_la - 71 & ~31) === 0 && (1 << _la - 71 & (1 << _CPP14Parser.Throw - 71 | 1 << _CPP14Parser.Typeid_ - 71 | 1 << _CPP14Parser.Typename_ - 71 | 1 << _CPP14Parser.Unsigned - 71 | 1 << _CPP14Parser.Void - 71 | 1 << _CPP14Parser.Wchar - 71 | 1 << _CPP14Parser.LeftParen - 71 | 1 << _CPP14Parser.LeftBracket - 71 | 1 << _CPP14Parser.Plus - 71 | 1 << _CPP14Parser.Minus - 71 | 1 << _CPP14Parser.Star - 71 | 1 << _CPP14Parser.And - 71 | 1 << _CPP14Parser.Or - 71 | 1 << _CPP14Parser.Tilde - 71 | 1 << _CPP14Parser.Not - 71)) !== 0 || (_la - 120 & ~31) === 0 && (1 << _la - 120 & (1 << _CPP14Parser.PlusPlus - 120 | 1 << _CPP14Parser.MinusMinus - 120 | 1 << _CPP14Parser.Doublecolon - 120 | 1 << _CPP14Parser.Identifier - 120)) !== 0) {
          {
            this.state = 2018;
            this.assignmentExpression();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  exceptionSpecification() {
    let _localctx = new ExceptionSpecificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 370, _CPP14Parser.RULE_exceptionSpecification);
    try {
      this.state = 2023;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _CPP14Parser.Throw:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2021;
            this.dynamicExceptionSpecification();
          }
          break;
        case _CPP14Parser.Noexcept:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2022;
            this.noeExceptSpecification();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  dynamicExceptionSpecification() {
    let _localctx = new DynamicExceptionSpecificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 372, _CPP14Parser.RULE_dynamicExceptionSpecification);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2025;
        this.match(_CPP14Parser.Throw);
        this.state = 2026;
        this.match(_CPP14Parser.LeftParen);
        this.state = 2028;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.Auto | 1 << _CPP14Parser.Bool | 1 << _CPP14Parser.Char | 1 << _CPP14Parser.Char16 | 1 << _CPP14Parser.Char32 | 1 << _CPP14Parser.Class | 1 << _CPP14Parser.Const | 1 << _CPP14Parser.Decltype | 1 << _CPP14Parser.Double)) !== 0 || (_la - 33 & ~31) === 0 && (1 << _la - 33 & (1 << _CPP14Parser.Enum - 33 | 1 << _CPP14Parser.Float - 33 | 1 << _CPP14Parser.Int - 33 | 1 << _CPP14Parser.Long - 33 | 1 << _CPP14Parser.Short - 33 | 1 << _CPP14Parser.Signed - 33)) !== 0 || (_la - 66 & ~31) === 0 && (1 << _la - 66 & (1 << _CPP14Parser.Struct - 66 | 1 << _CPP14Parser.Typename_ - 66 | 1 << _CPP14Parser.Union - 66 | 1 << _CPP14Parser.Unsigned - 66 | 1 << _CPP14Parser.Void - 66 | 1 << _CPP14Parser.Volatile - 66 | 1 << _CPP14Parser.Wchar - 66)) !== 0 || _la === _CPP14Parser.Doublecolon || _la === _CPP14Parser.Identifier) {
          {
            this.state = 2027;
            this.typeIdList();
          }
        }
        this.state = 2030;
        this.match(_CPP14Parser.RightParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  typeIdList() {
    let _localctx = new TypeIdListContext(this._ctx, this.state);
    this.enterRule(_localctx, 374, _CPP14Parser.RULE_typeIdList);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2032;
        this.theTypeId();
        this.state = 2034;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === _CPP14Parser.Ellipsis) {
          {
            this.state = 2033;
            this.match(_CPP14Parser.Ellipsis);
          }
        }
        this.state = 2043;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === _CPP14Parser.Comma) {
          {
            {
              this.state = 2036;
              this.match(_CPP14Parser.Comma);
              this.state = 2037;
              this.theTypeId();
              this.state = 2039;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === _CPP14Parser.Ellipsis) {
                {
                  this.state = 2038;
                  this.match(_CPP14Parser.Ellipsis);
                }
              }
            }
          }
          this.state = 2045;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  noeExceptSpecification() {
    let _localctx = new NoeExceptSpecificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 376, _CPP14Parser.RULE_noeExceptSpecification);
    try {
      this.state = 2052;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 302, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2046;
            this.match(_CPP14Parser.Noexcept);
            this.state = 2047;
            this.match(_CPP14Parser.LeftParen);
            this.state = 2048;
            this.constantExpression();
            this.state = 2049;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2051;
            this.match(_CPP14Parser.Noexcept);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  theOperator() {
    let _localctx = new TheOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 378, _CPP14Parser.RULE_theOperator);
    try {
      this.state = 2107;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 305, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2054;
            this.match(_CPP14Parser.New);
            this.state = 2057;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 303, this._ctx)) {
              case 1:
                {
                  this.state = 2055;
                  this.match(_CPP14Parser.LeftBracket);
                  this.state = 2056;
                  this.match(_CPP14Parser.RightBracket);
                }
                break;
            }
          }
          break;
        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2059;
            this.match(_CPP14Parser.Delete);
            this.state = 2062;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 304, this._ctx)) {
              case 1:
                {
                  this.state = 2060;
                  this.match(_CPP14Parser.LeftBracket);
                  this.state = 2061;
                  this.match(_CPP14Parser.RightBracket);
                }
                break;
            }
          }
          break;
        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2064;
            this.match(_CPP14Parser.Plus);
          }
          break;
        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 2065;
            this.match(_CPP14Parser.Minus);
          }
          break;
        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 2066;
            this.match(_CPP14Parser.Star);
          }
          break;
        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 2067;
            this.match(_CPP14Parser.Div);
          }
          break;
        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 2068;
            this.match(_CPP14Parser.Mod);
          }
          break;
        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 2069;
            this.match(_CPP14Parser.Caret);
          }
          break;
        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 2070;
            this.match(_CPP14Parser.And);
          }
          break;
        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 2071;
            this.match(_CPP14Parser.Or);
          }
          break;
        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 2072;
            this.match(_CPP14Parser.Tilde);
          }
          break;
        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 2073;
            this.match(_CPP14Parser.Not);
          }
          break;
        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 2074;
            this.match(_CPP14Parser.Assign);
          }
          break;
        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 2075;
            this.match(_CPP14Parser.Greater);
          }
          break;
        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 2076;
            this.match(_CPP14Parser.Less);
          }
          break;
        case 16:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 2077;
            this.match(_CPP14Parser.GreaterEqual);
          }
          break;
        case 17:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 2078;
            this.match(_CPP14Parser.PlusAssign);
          }
          break;
        case 18:
          this.enterOuterAlt(_localctx, 18);
          {
            this.state = 2079;
            this.match(_CPP14Parser.MinusAssign);
          }
          break;
        case 19:
          this.enterOuterAlt(_localctx, 19);
          {
            this.state = 2080;
            this.match(_CPP14Parser.StarAssign);
          }
          break;
        case 20:
          this.enterOuterAlt(_localctx, 20);
          {
            this.state = 2081;
            this.match(_CPP14Parser.Assign);
          }
          break;
        case 21:
          this.enterOuterAlt(_localctx, 21);
          {
            this.state = 2082;
            this.match(_CPP14Parser.ModAssign);
          }
          break;
        case 22:
          this.enterOuterAlt(_localctx, 22);
          {
            this.state = 2083;
            this.match(_CPP14Parser.XorAssign);
          }
          break;
        case 23:
          this.enterOuterAlt(_localctx, 23);
          {
            this.state = 2084;
            this.match(_CPP14Parser.AndAssign);
          }
          break;
        case 24:
          this.enterOuterAlt(_localctx, 24);
          {
            this.state = 2085;
            this.match(_CPP14Parser.OrAssign);
          }
          break;
        case 25:
          this.enterOuterAlt(_localctx, 25);
          {
            this.state = 2086;
            this.match(_CPP14Parser.Less);
            this.state = 2087;
            this.match(_CPP14Parser.Less);
          }
          break;
        case 26:
          this.enterOuterAlt(_localctx, 26);
          {
            this.state = 2088;
            this.match(_CPP14Parser.Greater);
            this.state = 2089;
            this.match(_CPP14Parser.Greater);
          }
          break;
        case 27:
          this.enterOuterAlt(_localctx, 27);
          {
            this.state = 2090;
            this.match(_CPP14Parser.RightShiftAssign);
          }
          break;
        case 28:
          this.enterOuterAlt(_localctx, 28);
          {
            this.state = 2091;
            this.match(_CPP14Parser.LeftShiftAssign);
          }
          break;
        case 29:
          this.enterOuterAlt(_localctx, 29);
          {
            this.state = 2092;
            this.match(_CPP14Parser.Equal);
          }
          break;
        case 30:
          this.enterOuterAlt(_localctx, 30);
          {
            this.state = 2093;
            this.match(_CPP14Parser.NotEqual);
          }
          break;
        case 31:
          this.enterOuterAlt(_localctx, 31);
          {
            this.state = 2094;
            this.match(_CPP14Parser.LessEqual);
          }
          break;
        case 32:
          this.enterOuterAlt(_localctx, 32);
          {
            this.state = 2095;
            this.match(_CPP14Parser.GreaterEqual);
          }
          break;
        case 33:
          this.enterOuterAlt(_localctx, 33);
          {
            this.state = 2096;
            this.match(_CPP14Parser.AndAnd);
          }
          break;
        case 34:
          this.enterOuterAlt(_localctx, 34);
          {
            this.state = 2097;
            this.match(_CPP14Parser.OrOr);
          }
          break;
        case 35:
          this.enterOuterAlt(_localctx, 35);
          {
            this.state = 2098;
            this.match(_CPP14Parser.PlusPlus);
          }
          break;
        case 36:
          this.enterOuterAlt(_localctx, 36);
          {
            this.state = 2099;
            this.match(_CPP14Parser.MinusMinus);
          }
          break;
        case 37:
          this.enterOuterAlt(_localctx, 37);
          {
            this.state = 2100;
            this.match(_CPP14Parser.Comma);
          }
          break;
        case 38:
          this.enterOuterAlt(_localctx, 38);
          {
            this.state = 2101;
            this.match(_CPP14Parser.ArrowStar);
          }
          break;
        case 39:
          this.enterOuterAlt(_localctx, 39);
          {
            this.state = 2102;
            this.match(_CPP14Parser.Arrow);
          }
          break;
        case 40:
          this.enterOuterAlt(_localctx, 40);
          {
            this.state = 2103;
            this.match(_CPP14Parser.LeftParen);
            this.state = 2104;
            this.match(_CPP14Parser.RightParen);
          }
          break;
        case 41:
          this.enterOuterAlt(_localctx, 41);
          {
            this.state = 2105;
            this.match(_CPP14Parser.LeftBracket);
            this.state = 2106;
            this.match(_CPP14Parser.RightBracket);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  literal() {
    let _localctx = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 380, _CPP14Parser.RULE_literal);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2109;
        _la = this._input.LA(1);
        if (!((_la & ~31) === 0 && (1 << _la & (1 << _CPP14Parser.IntegerLiteral | 1 << _CPP14Parser.CharacterLiteral | 1 << _CPP14Parser.FloatingLiteral | 1 << _CPP14Parser.StringLiteral | 1 << _CPP14Parser.BooleanLiteral | 1 << _CPP14Parser.PointerLiteral | 1 << _CPP14Parser.UserDefinedLiteral)) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  sempred(_localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 5:
        return this.nestedNameSpecifier_sempred(_localctx, predIndex);
      case 15:
        return this.postfixExpression_sempred(_localctx, predIndex);
      case 25:
        return this.noPointerNewDeclarator_sempred(_localctx, predIndex);
      case 115:
        return this.noPointerDeclarator_sempred(_localctx, predIndex);
      case 126:
        return this.noPointerAbstractDeclarator_sempred(_localctx, predIndex);
      case 128:
        return this.noPointerAbstractPackDeclarator_sempred(_localctx, predIndex);
    }
    return true;
  }
  nestedNameSpecifier_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  postfixExpression_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 7);
      case 2:
        return this.precpred(this._ctx, 6);
      case 3:
        return this.precpred(this._ctx, 4);
      case 4:
        return this.precpred(this._ctx, 3);
    }
    return true;
  }
  noPointerNewDeclarator_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  noPointerDeclarator_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  noPointerAbstractDeclarator_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 4);
    }
    return true;
  }
  noPointerAbstractPackDeclarator_sempred(_localctx, predIndex) {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  static get _ATN() {
    if (!_CPP14Parser.__ATN) {
      _CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(_CPP14Parser._serializedATN));
    }
    return _CPP14Parser.__ATN;
  }
};
export let CPP14Parser = _CPP14Parser;
CPP14Parser.IntegerLiteral = 1;
CPP14Parser.CharacterLiteral = 2;
CPP14Parser.FloatingLiteral = 3;
CPP14Parser.StringLiteral = 4;
CPP14Parser.BooleanLiteral = 5;
CPP14Parser.PointerLiteral = 6;
CPP14Parser.UserDefinedLiteral = 7;
CPP14Parser.MultiLineMacro = 8;
CPP14Parser.Directive = 9;
CPP14Parser.Alignas = 10;
CPP14Parser.Alignof = 11;
CPP14Parser.Asm = 12;
CPP14Parser.Auto = 13;
CPP14Parser.Bool = 14;
CPP14Parser.Break = 15;
CPP14Parser.Case = 16;
CPP14Parser.Catch = 17;
CPP14Parser.Char = 18;
CPP14Parser.Char16 = 19;
CPP14Parser.Char32 = 20;
CPP14Parser.Class = 21;
CPP14Parser.Const = 22;
CPP14Parser.Constexpr = 23;
CPP14Parser.Const_cast = 24;
CPP14Parser.Continue = 25;
CPP14Parser.Decltype = 26;
CPP14Parser.Default = 27;
CPP14Parser.Delete = 28;
CPP14Parser.Do = 29;
CPP14Parser.Double = 30;
CPP14Parser.Dynamic_cast = 31;
CPP14Parser.Else = 32;
CPP14Parser.Enum = 33;
CPP14Parser.Explicit = 34;
CPP14Parser.Export = 35;
CPP14Parser.Extern = 36;
CPP14Parser.False_ = 37;
CPP14Parser.Final = 38;
CPP14Parser.Float = 39;
CPP14Parser.For = 40;
CPP14Parser.Friend = 41;
CPP14Parser.Goto = 42;
CPP14Parser.If = 43;
CPP14Parser.Inline = 44;
CPP14Parser.Int = 45;
CPP14Parser.Long = 46;
CPP14Parser.Mutable = 47;
CPP14Parser.Namespace = 48;
CPP14Parser.New = 49;
CPP14Parser.Noexcept = 50;
CPP14Parser.Nullptr = 51;
CPP14Parser.Operator = 52;
CPP14Parser.Override = 53;
CPP14Parser.Private = 54;
CPP14Parser.Protected = 55;
CPP14Parser.Public = 56;
CPP14Parser.Register = 57;
CPP14Parser.Reinterpret_cast = 58;
CPP14Parser.Return = 59;
CPP14Parser.Short = 60;
CPP14Parser.Signed = 61;
CPP14Parser.Sizeof = 62;
CPP14Parser.Static = 63;
CPP14Parser.Static_assert = 64;
CPP14Parser.Static_cast = 65;
CPP14Parser.Struct = 66;
CPP14Parser.Switch = 67;
CPP14Parser.Template = 68;
CPP14Parser.This = 69;
CPP14Parser.Thread_local = 70;
CPP14Parser.Throw = 71;
CPP14Parser.True_ = 72;
CPP14Parser.Try = 73;
CPP14Parser.Typedef = 74;
CPP14Parser.Typeid_ = 75;
CPP14Parser.Typename_ = 76;
CPP14Parser.Union = 77;
CPP14Parser.Unsigned = 78;
CPP14Parser.Using = 79;
CPP14Parser.Virtual = 80;
CPP14Parser.Void = 81;
CPP14Parser.Volatile = 82;
CPP14Parser.Wchar = 83;
CPP14Parser.While = 84;
CPP14Parser.LeftParen = 85;
CPP14Parser.RightParen = 86;
CPP14Parser.LeftBracket = 87;
CPP14Parser.RightBracket = 88;
CPP14Parser.LeftBrace = 89;
CPP14Parser.RightBrace = 90;
CPP14Parser.Plus = 91;
CPP14Parser.Minus = 92;
CPP14Parser.Star = 93;
CPP14Parser.Div = 94;
CPP14Parser.Mod = 95;
CPP14Parser.Caret = 96;
CPP14Parser.And = 97;
CPP14Parser.Or = 98;
CPP14Parser.Tilde = 99;
CPP14Parser.Not = 100;
CPP14Parser.Assign = 101;
CPP14Parser.Less = 102;
CPP14Parser.Greater = 103;
CPP14Parser.PlusAssign = 104;
CPP14Parser.MinusAssign = 105;
CPP14Parser.StarAssign = 106;
CPP14Parser.DivAssign = 107;
CPP14Parser.ModAssign = 108;
CPP14Parser.XorAssign = 109;
CPP14Parser.AndAssign = 110;
CPP14Parser.OrAssign = 111;
CPP14Parser.LeftShiftAssign = 112;
CPP14Parser.RightShiftAssign = 113;
CPP14Parser.Equal = 114;
CPP14Parser.NotEqual = 115;
CPP14Parser.LessEqual = 116;
CPP14Parser.GreaterEqual = 117;
CPP14Parser.AndAnd = 118;
CPP14Parser.OrOr = 119;
CPP14Parser.PlusPlus = 120;
CPP14Parser.MinusMinus = 121;
CPP14Parser.Comma = 122;
CPP14Parser.ArrowStar = 123;
CPP14Parser.Arrow = 124;
CPP14Parser.Question = 125;
CPP14Parser.Colon = 126;
CPP14Parser.Doublecolon = 127;
CPP14Parser.Semi = 128;
CPP14Parser.Dot = 129;
CPP14Parser.DotStar = 130;
CPP14Parser.Ellipsis = 131;
CPP14Parser.Identifier = 132;
CPP14Parser.DecimalLiteral = 133;
CPP14Parser.OctalLiteral = 134;
CPP14Parser.HexadecimalLiteral = 135;
CPP14Parser.BinaryLiteral = 136;
CPP14Parser.Integersuffix = 137;
CPP14Parser.UserDefinedIntegerLiteral = 138;
CPP14Parser.UserDefinedFloatingLiteral = 139;
CPP14Parser.UserDefinedStringLiteral = 140;
CPP14Parser.UserDefinedCharacterLiteral = 141;
CPP14Parser.Whitespace = 142;
CPP14Parser.Newline = 143;
CPP14Parser.BlockComment = 144;
CPP14Parser.LineComment = 145;
CPP14Parser.RULE_translationUnit = 0;
CPP14Parser.RULE_primaryExpression = 1;
CPP14Parser.RULE_idExpression = 2;
CPP14Parser.RULE_unqualifiedId = 3;
CPP14Parser.RULE_qualifiedId = 4;
CPP14Parser.RULE_nestedNameSpecifier = 5;
CPP14Parser.RULE_lambdaExpression = 6;
CPP14Parser.RULE_lambdaIntroducer = 7;
CPP14Parser.RULE_lambdaCapture = 8;
CPP14Parser.RULE_captureDefault = 9;
CPP14Parser.RULE_captureList = 10;
CPP14Parser.RULE_capture = 11;
CPP14Parser.RULE_simpleCapture = 12;
CPP14Parser.RULE_initcapture = 13;
CPP14Parser.RULE_lambdaDeclarator = 14;
CPP14Parser.RULE_postfixExpression = 15;
CPP14Parser.RULE_typeIdOfTheTypeId = 16;
CPP14Parser.RULE_expressionList = 17;
CPP14Parser.RULE_pseudoDestructorName = 18;
CPP14Parser.RULE_unaryExpression = 19;
CPP14Parser.RULE_unaryOperator = 20;
CPP14Parser.RULE_newExpression = 21;
CPP14Parser.RULE_newPlacement = 22;
CPP14Parser.RULE_newTypeId = 23;
CPP14Parser.RULE_newDeclarator = 24;
CPP14Parser.RULE_noPointerNewDeclarator = 25;
CPP14Parser.RULE_newInitializer = 26;
CPP14Parser.RULE_deleteExpression = 27;
CPP14Parser.RULE_noExceptExpression = 28;
CPP14Parser.RULE_castExpression = 29;
CPP14Parser.RULE_pointerMemberExpression = 30;
CPP14Parser.RULE_multiplicativeExpression = 31;
CPP14Parser.RULE_additiveExpression = 32;
CPP14Parser.RULE_shiftExpression = 33;
CPP14Parser.RULE_shiftOperator = 34;
CPP14Parser.RULE_relationalExpression = 35;
CPP14Parser.RULE_equalityExpression = 36;
CPP14Parser.RULE_andExpression = 37;
CPP14Parser.RULE_exclusiveOrExpression = 38;
CPP14Parser.RULE_inclusiveOrExpression = 39;
CPP14Parser.RULE_logicalAndExpression = 40;
CPP14Parser.RULE_logicalOrExpression = 41;
CPP14Parser.RULE_conditionalExpression = 42;
CPP14Parser.RULE_assignmentExpression = 43;
CPP14Parser.RULE_assignmentOperator = 44;
CPP14Parser.RULE_expression = 45;
CPP14Parser.RULE_constantExpression = 46;
CPP14Parser.RULE_statement = 47;
CPP14Parser.RULE_labeledStatement = 48;
CPP14Parser.RULE_expressionStatement = 49;
CPP14Parser.RULE_compoundStatement = 50;
CPP14Parser.RULE_statementSeq = 51;
CPP14Parser.RULE_selectionStatement = 52;
CPP14Parser.RULE_condition = 53;
CPP14Parser.RULE_iterationStatement = 54;
CPP14Parser.RULE_forInitStatement = 55;
CPP14Parser.RULE_forRangeDeclaration = 56;
CPP14Parser.RULE_forRangeInitializer = 57;
CPP14Parser.RULE_jumpStatement = 58;
CPP14Parser.RULE_declarationStatement = 59;
CPP14Parser.RULE_declarationseq = 60;
CPP14Parser.RULE_declaration = 61;
CPP14Parser.RULE_blockDeclaration = 62;
CPP14Parser.RULE_aliasDeclaration = 63;
CPP14Parser.RULE_simpleDeclaration = 64;
CPP14Parser.RULE_staticAssertDeclaration = 65;
CPP14Parser.RULE_emptyDeclaration = 66;
CPP14Parser.RULE_attributeDeclaration = 67;
CPP14Parser.RULE_declSpecifier = 68;
CPP14Parser.RULE_declSpecifierSeq = 69;
CPP14Parser.RULE_storageClassSpecifier = 70;
CPP14Parser.RULE_functionSpecifier = 71;
CPP14Parser.RULE_typedefName = 72;
CPP14Parser.RULE_typeSpecifier = 73;
CPP14Parser.RULE_trailingTypeSpecifier = 74;
CPP14Parser.RULE_typeSpecifierSeq = 75;
CPP14Parser.RULE_trailingTypeSpecifierSeq = 76;
CPP14Parser.RULE_simpleTypeLengthModifier = 77;
CPP14Parser.RULE_simpleTypeSignednessModifier = 78;
CPP14Parser.RULE_simpleTypeSpecifier = 79;
CPP14Parser.RULE_theTypeName = 80;
CPP14Parser.RULE_decltypeSpecifier = 81;
CPP14Parser.RULE_elaboratedTypeSpecifier = 82;
CPP14Parser.RULE_enumName = 83;
CPP14Parser.RULE_enumSpecifier = 84;
CPP14Parser.RULE_enumHead = 85;
CPP14Parser.RULE_opaqueEnumDeclaration = 86;
CPP14Parser.RULE_enumkey = 87;
CPP14Parser.RULE_enumbase = 88;
CPP14Parser.RULE_enumeratorList = 89;
CPP14Parser.RULE_enumeratorDefinition = 90;
CPP14Parser.RULE_enumerator = 91;
CPP14Parser.RULE_namespaceName = 92;
CPP14Parser.RULE_originalNamespaceName = 93;
CPP14Parser.RULE_namespaceDefinition = 94;
CPP14Parser.RULE_namespaceAlias = 95;
CPP14Parser.RULE_namespaceAliasDefinition = 96;
CPP14Parser.RULE_qualifiednamespacespecifier = 97;
CPP14Parser.RULE_usingDeclaration = 98;
CPP14Parser.RULE_usingDirective = 99;
CPP14Parser.RULE_asmDefinition = 100;
CPP14Parser.RULE_linkageSpecification = 101;
CPP14Parser.RULE_attributeSpecifierSeq = 102;
CPP14Parser.RULE_attributeSpecifier = 103;
CPP14Parser.RULE_alignmentspecifier = 104;
CPP14Parser.RULE_attributeList = 105;
CPP14Parser.RULE_attribute = 106;
CPP14Parser.RULE_attributeNamespace = 107;
CPP14Parser.RULE_attributeArgumentClause = 108;
CPP14Parser.RULE_balancedTokenSeq = 109;
CPP14Parser.RULE_balancedtoken = 110;
CPP14Parser.RULE_initDeclaratorList = 111;
CPP14Parser.RULE_initDeclarator = 112;
CPP14Parser.RULE_declarator = 113;
CPP14Parser.RULE_pointerDeclarator = 114;
CPP14Parser.RULE_noPointerDeclarator = 115;
CPP14Parser.RULE_parametersAndQualifiers = 116;
CPP14Parser.RULE_trailingReturnType = 117;
CPP14Parser.RULE_pointerOperator = 118;
CPP14Parser.RULE_cvqualifierseq = 119;
CPP14Parser.RULE_cvQualifier = 120;
CPP14Parser.RULE_refqualifier = 121;
CPP14Parser.RULE_declaratorid = 122;
CPP14Parser.RULE_theTypeId = 123;
CPP14Parser.RULE_abstractDeclarator = 124;
CPP14Parser.RULE_pointerAbstractDeclarator = 125;
CPP14Parser.RULE_noPointerAbstractDeclarator = 126;
CPP14Parser.RULE_abstractPackDeclarator = 127;
CPP14Parser.RULE_noPointerAbstractPackDeclarator = 128;
CPP14Parser.RULE_parameterDeclarationClause = 129;
CPP14Parser.RULE_parameterDeclarationList = 130;
CPP14Parser.RULE_parameterDeclaration = 131;
CPP14Parser.RULE_functionDefinition = 132;
CPP14Parser.RULE_functionBody = 133;
CPP14Parser.RULE_initializer = 134;
CPP14Parser.RULE_braceOrEqualInitializer = 135;
CPP14Parser.RULE_initializerClause = 136;
CPP14Parser.RULE_initializerList = 137;
CPP14Parser.RULE_bracedInitList = 138;
CPP14Parser.RULE_className = 139;
CPP14Parser.RULE_classSpecifier = 140;
CPP14Parser.RULE_classHead = 141;
CPP14Parser.RULE_classHeadName = 142;
CPP14Parser.RULE_classVirtSpecifier = 143;
CPP14Parser.RULE_classKey = 144;
CPP14Parser.RULE_memberSpecification = 145;
CPP14Parser.RULE_memberdeclaration = 146;
CPP14Parser.RULE_memberDeclaratorList = 147;
CPP14Parser.RULE_memberDeclarator = 148;
CPP14Parser.RULE_virtualSpecifierSeq = 149;
CPP14Parser.RULE_virtualSpecifier = 150;
CPP14Parser.RULE_pureSpecifier = 151;
CPP14Parser.RULE_baseClause = 152;
CPP14Parser.RULE_baseSpecifierList = 153;
CPP14Parser.RULE_baseSpecifier = 154;
CPP14Parser.RULE_classOrDeclType = 155;
CPP14Parser.RULE_baseTypeSpecifier = 156;
CPP14Parser.RULE_accessSpecifier = 157;
CPP14Parser.RULE_conversionFunctionId = 158;
CPP14Parser.RULE_conversionTypeId = 159;
CPP14Parser.RULE_conversionDeclarator = 160;
CPP14Parser.RULE_constructorInitializer = 161;
CPP14Parser.RULE_memInitializerList = 162;
CPP14Parser.RULE_memInitializer = 163;
CPP14Parser.RULE_meminitializerid = 164;
CPP14Parser.RULE_operatorFunctionId = 165;
CPP14Parser.RULE_literalOperatorId = 166;
CPP14Parser.RULE_templateDeclaration = 167;
CPP14Parser.RULE_templateparameterList = 168;
CPP14Parser.RULE_templateParameter = 169;
CPP14Parser.RULE_typeParameter = 170;
CPP14Parser.RULE_simpleTemplateId = 171;
CPP14Parser.RULE_templateId = 172;
CPP14Parser.RULE_templateName = 173;
CPP14Parser.RULE_templateArgumentList = 174;
CPP14Parser.RULE_templateArgument = 175;
CPP14Parser.RULE_typeNameSpecifier = 176;
CPP14Parser.RULE_explicitInstantiation = 177;
CPP14Parser.RULE_explicitSpecialization = 178;
CPP14Parser.RULE_tryBlock = 179;
CPP14Parser.RULE_functionTryBlock = 180;
CPP14Parser.RULE_handlerSeq = 181;
CPP14Parser.RULE_handler = 182;
CPP14Parser.RULE_exceptionDeclaration = 183;
CPP14Parser.RULE_throwExpression = 184;
CPP14Parser.RULE_exceptionSpecification = 185;
CPP14Parser.RULE_dynamicExceptionSpecification = 186;
CPP14Parser.RULE_typeIdList = 187;
CPP14Parser.RULE_noeExceptSpecification = 188;
CPP14Parser.RULE_theOperator = 189;
CPP14Parser.RULE_literal = 190;
CPP14Parser.ruleNames = [
  "translationUnit",
  "primaryExpression",
  "idExpression",
  "unqualifiedId",
  "qualifiedId",
  "nestedNameSpecifier",
  "lambdaExpression",
  "lambdaIntroducer",
  "lambdaCapture",
  "captureDefault",
  "captureList",
  "capture",
  "simpleCapture",
  "initcapture",
  "lambdaDeclarator",
  "postfixExpression",
  "typeIdOfTheTypeId",
  "expressionList",
  "pseudoDestructorName",
  "unaryExpression",
  "unaryOperator",
  "newExpression",
  "newPlacement",
  "newTypeId",
  "newDeclarator",
  "noPointerNewDeclarator",
  "newInitializer",
  "deleteExpression",
  "noExceptExpression",
  "castExpression",
  "pointerMemberExpression",
  "multiplicativeExpression",
  "additiveExpression",
  "shiftExpression",
  "shiftOperator",
  "relationalExpression",
  "equalityExpression",
  "andExpression",
  "exclusiveOrExpression",
  "inclusiveOrExpression",
  "logicalAndExpression",
  "logicalOrExpression",
  "conditionalExpression",
  "assignmentExpression",
  "assignmentOperator",
  "expression",
  "constantExpression",
  "statement",
  "labeledStatement",
  "expressionStatement",
  "compoundStatement",
  "statementSeq",
  "selectionStatement",
  "condition",
  "iterationStatement",
  "forInitStatement",
  "forRangeDeclaration",
  "forRangeInitializer",
  "jumpStatement",
  "declarationStatement",
  "declarationseq",
  "declaration",
  "blockDeclaration",
  "aliasDeclaration",
  "simpleDeclaration",
  "staticAssertDeclaration",
  "emptyDeclaration",
  "attributeDeclaration",
  "declSpecifier",
  "declSpecifierSeq",
  "storageClassSpecifier",
  "functionSpecifier",
  "typedefName",
  "typeSpecifier",
  "trailingTypeSpecifier",
  "typeSpecifierSeq",
  "trailingTypeSpecifierSeq",
  "simpleTypeLengthModifier",
  "simpleTypeSignednessModifier",
  "simpleTypeSpecifier",
  "theTypeName",
  "decltypeSpecifier",
  "elaboratedTypeSpecifier",
  "enumName",
  "enumSpecifier",
  "enumHead",
  "opaqueEnumDeclaration",
  "enumkey",
  "enumbase",
  "enumeratorList",
  "enumeratorDefinition",
  "enumerator",
  "namespaceName",
  "originalNamespaceName",
  "namespaceDefinition",
  "namespaceAlias",
  "namespaceAliasDefinition",
  "qualifiednamespacespecifier",
  "usingDeclaration",
  "usingDirective",
  "asmDefinition",
  "linkageSpecification",
  "attributeSpecifierSeq",
  "attributeSpecifier",
  "alignmentspecifier",
  "attributeList",
  "attribute",
  "attributeNamespace",
  "attributeArgumentClause",
  "balancedTokenSeq",
  "balancedtoken",
  "initDeclaratorList",
  "initDeclarator",
  "declarator",
  "pointerDeclarator",
  "noPointerDeclarator",
  "parametersAndQualifiers",
  "trailingReturnType",
  "pointerOperator",
  "cvqualifierseq",
  "cvQualifier",
  "refqualifier",
  "declaratorid",
  "theTypeId",
  "abstractDeclarator",
  "pointerAbstractDeclarator",
  "noPointerAbstractDeclarator",
  "abstractPackDeclarator",
  "noPointerAbstractPackDeclarator",
  "parameterDeclarationClause",
  "parameterDeclarationList",
  "parameterDeclaration",
  "functionDefinition",
  "functionBody",
  "initializer",
  "braceOrEqualInitializer",
  "initializerClause",
  "initializerList",
  "bracedInitList",
  "className",
  "classSpecifier",
  "classHead",
  "classHeadName",
  "classVirtSpecifier",
  "classKey",
  "memberSpecification",
  "memberdeclaration",
  "memberDeclaratorList",
  "memberDeclarator",
  "virtualSpecifierSeq",
  "virtualSpecifier",
  "pureSpecifier",
  "baseClause",
  "baseSpecifierList",
  "baseSpecifier",
  "classOrDeclType",
  "baseTypeSpecifier",
  "accessSpecifier",
  "conversionFunctionId",
  "conversionTypeId",
  "conversionDeclarator",
  "constructorInitializer",
  "memInitializerList",
  "memInitializer",
  "meminitializerid",
  "operatorFunctionId",
  "literalOperatorId",
  "templateDeclaration",
  "templateparameterList",
  "templateParameter",
  "typeParameter",
  "simpleTemplateId",
  "templateId",
  "templateName",
  "templateArgumentList",
  "templateArgument",
  "typeNameSpecifier",
  "explicitInstantiation",
  "explicitSpecialization",
  "tryBlock",
  "functionTryBlock",
  "handlerSeq",
  "handler",
  "exceptionDeclaration",
  "throwExpression",
  "exceptionSpecification",
  "dynamicExceptionSpecification",
  "typeIdList",
  "noeExceptSpecification",
  "theOperator",
  "literal"
];
CPP14Parser._LITERAL_NAMES = [
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
CPP14Parser._SYMBOLIC_NAMES = [
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
CPP14Parser.VOCABULARY = new VocabularyImpl(_CPP14Parser._LITERAL_NAMES, _CPP14Parser._SYMBOLIC_NAMES, []);
CPP14Parser._serializedATNSegments = 4;
CPP14Parser._serializedATNSegment0 = '줝쪺֍꾺体؇쉁ࡂ					\x07	\x07\b	\b			\n	\n\v	\v\f	\f\r	\r																		 	 !	!"	"#	#$	$%	%&	&\'	\'(	()	)*	*+	+,	,-	-.	./	/0	01	12	23	34	45	56	67	78	89	9:	:;	;<	<=	=>	>?	?@	@A	AB	BC	CD	DE	EF	FG	GH	HI	IJ	JK	KL	LM	MN	NO	OP	PQ	QR	RS	ST	TU	UV	VW	WX	XY	YZ	Z[	[\\	\\]	]^	^_	_`	`a	ab	bc	cd	de	ef	fg	gh	hi	ij	jk	kl	lm	mn	no	op	pq	qr	rs	st	tu	uv	vw	wx	xy	yz	z{	{|	|}	}~	~																																	 	 ¡	¡¢	¢£	£¤	¤¥	¥¦	¦§	§¨	¨©	©ª	ª«	«¬	¬­	­®	®¯	¯°	°±	±²	²³	³´	´µ	µ¶	¶·	·¸	¸¹	¹º	º»	»¼	¼½	½¾	¾¿	¿À	ÀƂ\nƇ\n\rƈƒ\nƖ\nƟ\nƢ\nƦ\n\x07\x07\x07\x07\x07Ʈ\n\x07\x07\x07\x07\x07\x07\x07Ƶ\n\x07\x07\x07Ƹ\n\x07\x07\x07\x07ƻ\n\x07\f\x07\x07ƾ\v\x07\b\b\bǂ\n\b\b\b			ǈ\n			\n\n\n\n\nǐ\n\n\nǒ\n\n\v\v\f\f\f\x07\fǙ\n\f\f\f\fǜ\v\f\f\fǟ\n\f\r\r\rǣ\n\rǦ\nǪ\nǭ\nǴ\nǸ\nǻ\nǾ\nȁ\nȇ\nȋ\nȏ\nȝ\nȡ\nȧ\nȮ\nȴ\nȸ\n\x07ȼ\n\fȿ\vɆ\nɋ\nɘ\nɟ\nɫ\nɵ\nɺ\nɾ\nʅ\nʈ\nʐ\nʔ\nʗ\nʞ\nʥ\n\x07ʧ\n\fʪ\vʮ\nʲ\nʵ\nʺ\nˉ\n   \x07 ˎ\n \f  ˑ\v !!!\x07!˖\n!\f!!˙\v!"""\x07"˞\n"\f""ˡ\v"####\x07#˧\n#\f##˪\v#$$$$$˰\n$%%%\x07%˵\n%\f%%˸\v%&&&\x07&˽\n&\f&&̀\v&\'\'\'\x07\'̅\n\'\f\'\'̈\v\'(((\x07(̍\n(\f((̐\v()))\x07)̕\n)\f))̘\v)***\x07*̝\n*\f**̠\v*+++\x07+̥\n+\f++̨\v+,,,,,,,̰\n,-------̸\n-..///\x07/̿\n/\f//͂\v/00111͈\n11111111͐\n111͓\n122͖\n222222͜\n222233͢\n333444ͨ\n44455ͭ\n5\r55ͮ66666666͸\n66666666΀\n6777΄\n7777777΋\n77΍\n78888888888888888888Ρ\n8888Υ\n888888Ϋ\n88888ΰ\n8999δ\n9::η\n::::;;;ξ\n;<<<<<<υ\n<<<<ω\n<<<==>>ϐ\n>\r>>ϑ??????????ϝ\n?@@@@@@@@@ϧ\n@AAAAϬ\nAAAAABBϳ\nBBB϶\nBBBBBϻ\nBBBBBЀ\nBCCCCCCCCDDEEEFFFFFFFЕ\nFGGИ\nG\rGGЙGGН\nGHHIIJJKKKKШ\nKLLLLLЮ\nLMMб\nM\rMMвMMж\nMNNй\nN\rNNкNNо\nNOOPPQQх\nQQQQQQQQQю\nQQQё\nQ\rQQђQQі\nQQQQњ\nQQQQў\nQQQQѢ\nQQQQQѧ\nQQ\x07QѪ\nQ\fQQѭ\vQQQQQѲ\nQQQQQQѸ\nQRRRRRѾ\nRSSSSS҄\nSSSTTTҊ\nTTTҍ\nTTTTTTғ\nTTTTҗ\nTTTTқ\nTTTҞ\nTUUVVVVVҦ\nVVҨ\nVVVWWWҮ\nWWWұ\nWWWҴ\nWWWҷ\nWXXXһ\nXXXXҿ\nXXXYYYӅ\nYZZZ[[[\x07[Ӎ\n[\f[[Ӑ\v[\\\\\\\\ӕ\n\\]]^^^ӛ\n^__``Ӡ\n`````ӥ\n````ө\n```aabbbbbbccӶ\ncccdddӼ\nddddԀ\nddddeeԆ\neeeeeԋ\neeeeffffffgggggԚ\nggggԞ\nghhԡ\nh\rhhԢiiiiԨ\niiiiiԭ\nijjjjjԳ\njjjԶ\njjjkkk\x07kԽ\nk\fkkՀ\vkkkՃ\nkllllՈ\nllllՌ\nlmmnnnՒ\nnnnoo՗\no\roo՘ppppppppppppppը\np\rppթpլ\npqqq\x07qձ\nq\fqqմ\vqrrrո\nrssssssտ\nstttփ\nt\x07tօ\nt\fttֈ\vtttuuuu֏\nuuuuuu֕\nuuuuuu֛\nuuuu֟\nuu֡\nu\x07u֣\nu\fuu֦\vuvvv֪\nvvvv֮\nvvvֱ\nvvvִ\nvvvַ\nvwwwwּ\nwxxx׀\nxxx׃\nxxxxׇ\nxxx׊\nxx׌\nxyy׏\ny\ryyאzz{{||ט\n|||}}}מ\n}~~~ע\n~~~~~~ר\n~׬\n\r׭ױ\n׳\n׹\n׽\n؃\n؊\n؎\nؐ\n\x07ؒ\n\fؕ\v\x07ؘ\n\f؛\vئ\nت\nج\n\x07خ\n\fر\vص\nظ\n\x07ؽ\n\fـ\vك\nو\nي\nَ\nّ\nٔ\n٘\nٝ\n٤\n٫\nٰ\nٴ\nٸ\nٽ\n\x07ٿ\n\fڂ\vڇ\nډ\nڏ\nڔ\nښ\nڞ\nڠ\nڣ\nڧ\nګ\nڭ\nگ\nڲ\nھ\n\rڿۃ\nۆ\nۉ\nے\n\x07ۗ\n\fۚ\v۞\nۡ\nۤ\nۦ\n۩\n۬\n۰\n۳\n\r۴܂\n܇\n\x07܉\n\f܌\v܏\nܔ\nܙ\nܝ\nܠ\nܤ\n   ¡¡¡ܯ\n¡¢¢¢ܳ\n¢£££¤¤¤ܺ\n¤¤¤¤¤ܿ\n¤\x07¤݁\n¤\f¤¤݄\v¤¥¥¥¥݉\n¥¥¥¥ݍ\n¥¦¦¦ݑ\n¦§§§¨¨¨¨¨ݚ\n¨©©©©©©ªªª\x07ªݥ\nª\fªªݨ\vª«««ݬ\n«¬¬¬¬¬¬ݳ\n¬¬¬¬ݷ\n¬¬¬ݺ\n¬¬¬ݽ\n¬¬¬ހ\n¬¬¬¬ބ\n¬­­­­މ\n­­­®®®®ސ\n®®®®ޔ\n®®®®ޘ\n®¯¯°°°ޞ\n°°°°°ޣ\n°\x07°ޥ\n°\f°°ި\v°±±±±ޭ\n±²²²²²޳\n²²²޶\n²³³޹\n³³³³´´´´´µµµµ¶¶¶߉\n¶¶¶¶··ߏ\n·\r··ߐ¸¸¸¸¸¸¹¹ߚ\n¹¹¹¹¹ߟ\n¹¹¹ߢ\n¹ºººߦ\nº»»»ߪ\n»¼¼¼¼߯\n¼¼¼½½½ߵ\n½½½½½ߺ\n½\x07½߼\n½\f½½߿\v½¾¾¾¾¾¾¾ࠇ\n¾¿¿¿¿ࠌ\n¿¿¿¿¿ࠑ\n¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿࠾\n¿ÀÀÀЙ\b\f 4èþĂÁ\b\n\f "$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~ ¢¤¦¨ª¬®°²´¶¸º¼¾ÀÂÄÆÈÊÌÎÐÒÔÖØÚÜÞàâäæèêìîðòôöøúüþĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĸĺļľŀłńņňŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸźżžccgg!!<<CC';
CPP14Parser._serializedATNSegment1 = '~~z{]_cf}}_a]^hivwtuggjs\x07&&11;;AAHH$$..RR00>>??PPDDW\\ccxxTT((778:	भƁƑƕ\bơ\nƣ\fƩƿǅǑǓǕǢǩǬǱ Ƞ"ɀ$ɂ&ɗ(ɴ*ɶ,ɹ.ʉ0ʍ2ʖ4ʘ6ʱ8ʴ:ʽ<ˈ>ˊ@˒B˚DˢF˯H˱J˹ĹN̉P̑R̙T̡V̩X̷Z̹\\̻^̓`͒b͕d͡fͥhͬjͿlΌnίpγrζtνvψxόzϏ|Ϝ~ϦϨϿЁЉЋДЗОРТЧЭаипс ѷ¢ѽ¤ѿ¦ҝ¨ҟªҡ¬ҫ®Ҹ°ӂ²ӆ´Ӊ¶ӑ¸ӖºӚ¼Ӝ¾ӟÀӬÂӮÄӵÆӹÈԅÊԏÌԕÎԠÐԬÒԮÔԹÖՇØՍÚՏÜՖÞիàխâյäվæֆè֔ê֧ìָî׋ð׎òגôהöחøכúקüײþ؂ĀؙĂ؞ĄزĆعĈقĊِČ٣Ď٪ĐٯĒٳĔٵĖڃĘڎĚڐĜڮĞڱĠڵĢڷĤڽĦۑĨۓĪۯĬ۲Į۶İ۸ĲۼĴۿĶ܎ĸܣĺܥļܧľܩŀܬłܰńܴņܷň݅ŊݐŌݒŎݕŐݛŒݡŔݫŖݶŘޅŚޗŜޙŞޛŠެŢޮŤ޸Ŧ޽Ũ߂Ū߆ŬߎŮߒŰߡŲߣŴߩŶ߫Ÿ߲źࠆż࠽ž࠿ƀƂz>ƁƀƁƂƂƃƃƄ\x07ƄƅƇžÀƆƅƇƈƈƆƈƉƉƒƊƒ\x07GƋƌ\x07Wƌƍ\\/ƍƎ\x07XƎƒƏƒƐƒ\bƑƆƑƊƑƋƑƏƑƐƒƓƖ\bƔƖ\nƕƓƕƔƖ\x07ƗƢ\x07ƘƢŌ§ƙƢľ ƚƢŎ¨ƛƞ\x07eƜƟĘƝƟ¤SƞƜƞƝƟƢƠƢŚ®ơƗơƘơƙơƚơƛơƠƢ	ƣƥ\f\x07ƤƦ\x07FƥƤƥƦƦƧƧƨ\bƨ\vƩƭ\b\x07ƪƮ¢RƫƮº^ƬƮ¤SƭƪƭƫƭƬƭƮƮƯƯư\x07ưƼƱƷ\fƲƸ\x07ƳƵ\x07FƴƳƴƵƵƶƶƸŘ­ƷƲƷƴƸƹƹƻ\x07ƺƱƻƾƼƺƼƽƽ\rƾƼƿǁ	ǀǂǁǀǁǂǂǃǃǄf4ǄǅǇ\x07Yǆǈ\nǇǆǇǈǈǉǉǊ\x07ZǊǋǒ\fǌǏ\vǍǎ\x07|ǎǐ\fǏǍǏǐǐǒǑǋǑǌǒǓǔ	ǔǕǚ\rǖǗ\x07|ǗǙ\rǘǖǙǜǚǘǚǛǛǞǜǚǝǟ\x07ǞǝǞǟǟǠǣǡǣǢǠǢǡǣǤǦ\x07cǥǤǥǦǦǧǧǪ\x07ǨǪ\x07GǩǥǩǨǪǫǭ\x07cǬǫǬǭǭǮǮǯ\x07ǯǰĎǰǱǳ\x07WǲǴĄǳǲǳǴǴǵǵǷ\x07XǶǸ\x071ǷǶǷǸǸǺǹǻŴ»ǺǹǺǻǻǽǼǾÎhǽǼǽǾǾȀǿȁìwȀǿȀȁȁȂȃ\bȃȡȄȇ QȅȇŢ²ȆȄȆȅȇȎȈȊ\x07Wȉȋ$ȊȉȊȋȋȌȌȏ\x07XȍȏĖȎȈȎȍȏȡȐȑ	ȑȒ\x07hȒȓø}ȓȔ\x07iȔȕ\x07WȕȖ\\/Ȗȗ\x07XȗȡȘș"șȜ\x07WȚȝ\\/țȝø}ȜȚȜțȝȞȞȟ\x07XȟȡȠȂȠȆȠȐȠȘȡȽȢȣ\f	ȣȦ\x07YȤȧ\\/ȥȧĖȦȤȦȥȧȨȨȩ\x07ZȩȼȪȫ\f\bȫȭ\x07WȬȮ$ȭȬȭȮȮȯȯȼ\x07XȰȱ\fȱȷ	Ȳȴ\x07FȳȲȳȴȴȵȵȸȶȸ&ȷȳȷȶȸȼȹȺ\fȺȼ	ȻȢȻȪȻȰȻȹȼȿȽȻȽȾȾ!ȿȽɀɁ\x07MɁ#ɂɃĔɃ%ɄɆ\f\x07ɅɄɅɆɆɊɇɈ¢RɈɉ\x07ɉɋɊɇɊɋɋɌɌɍ\x07eɍɘ¢RɎɏ\f\x07ɏɐ\x07FɐɑŘ­ɑɒ\x07ɒɓ\x07eɓɔ¢Rɔɘɕɖ\x07eɖɘ¤SɗɅɗɎɗɕɘ\'əɵ ɚɟ\x07zɛɟ\x07{ɜɟ*ɝɟ\x07@ɞɚɞɛɞɜɞɝɟɠɠɵ(ɡɪ\x07@ɢɣ\x07Wɣɤø}ɤɥ\x07Xɥɫɦɧ\x07ɧɨ\x07Wɨɩ\x07ɩɫ\x07Xɪɢɪɦɫɵɬɭ\x07\rɭɮ\x07Wɮɯø}ɯɰ\x07Xɰɵɱɵ:ɲɵ,ɳɵ8ɴəɴɞɴɡɴɬɴɱɴɲɴɳɵ)ɶɷ	ɷ+ɸɺ\x07ɹɸɹɺɺɻɻɽ\x073ɼɾ.ɽɼɽɾɾʄɿʅ0ʀʁ\x07Wʁʂø}ʂʃ\x07Xʃʅʄɿʄʀʅʇʆʈ6ʇʆʇʈʈ-ʉʊ\x07Wʊʋ$ʋʌ\x07Xʌ/ʍʏMʎʐ2ʏʎʏʐʐ1ʑʓîxʒʔ2ʓʒʓʔʔʗʕʗ4ʖʑʖʕʗ3ʘʙ\bʙʚ\x07Yʚʛ\\/ʛʝ\x07ZʜʞÎhʝʜʝʞʞʨʟʠ\fʠʡ\x07Yʡʢ^0ʢʤ\x07ZʣʥÎhʤʣʤʥʥʧʦʟʧʪʨʦʨʩʩ5ʪʨʫʭ\x07Wʬʮ$ʭʬʭʮʮʯʯʲ\x07XʰʲĖʱʫʱʰʲ7ʳʵ\x07ʴʳʴʵʵʶʶʹ\x07ʷʸ\x07Yʸʺ\x07Zʹʷʹʺʺʻʻʼ<ʼ9ʽʾ\x074ʾʿ\x07Wʿˀ\\/ˀˁ\x07Xˁ;˂ˉ(˃˄\x07W˄˅ø}˅ˆ\x07Xˆˇ<ˇˉˈ˂ˈ˃ˉ=ˊˏ<ˋˌ	\x07ˌˎ<ˍˋˎˑˏˍˏːː?ˑˏ˒˗> ˓˔	\b˔˖> ˕˓˖˙˗˕˗˘˘A˙˗˚˟@!˛˜		˜˞@!˝˛˞ˡ˟˝˟ˠˠCˡ˟ˢ˨B"ˣˤF$ˤ˥B"˥˧˦ˣ˧˪˨˦˨˩˩E˪˨˫ˬ\x07iˬ˰\x07i˭ˮ\x07hˮ˰\x07h˯˫˯˭˰G˱˶D#˲˳	\n˳˵D#˴˲˵˸˶˴˶˷˷I˸˶˹˾H%˺˻	\v˻˽H%˼˺˽̀˾˼˾˿˿K̀˾́̆J&̂̃\x07c̃̅J&̄̂̅̈̆̄̆̇̇M̈̆̉̎L\'̊̋\x07b̋̍L\'̌̊̍̐̎̌̎̏̏O̐̎̖̑N(̒̓\x07d̓̕N(̔̒̘̕̖̔̖̗̗Q̘̖̙̞P)̛̚\x07x̛̝P)̜̚̝̠̞̜̞̟̟S̠̞̡̦R*̢̣\x07y̣̥R*̢̤̨̥̦̤̧̦̧U̨̦̩̯T+̪̫\x07̫̬\\/̬̭\x07̭̮X-̮̰̯̪̯̰̰W̸̱V,̲̳T+̴̳Z.̴̵Ē̵̸̶̸Ųº̷̱̷̲̷̶̸Y̹̺	\f̺[̻̀X-̼̽\x07|̽̿X-̼̾̿͂̀̾̀́́]͂̀̓̈́V,̈́_͓ͅb2͈͆Îh͇͆͇͈͈͏͉͐d3͊͐f4͋͐j6͌͐n8͍͐v<͎͐Ũµ͏͉͏͊͏͋͏͌͏͍͏͎͓͐͓͑x=͒ͅ͇͒͒͑͓a͔͖Îh͕͔͕͖͖͛͗͜\x07͙͘\x07͙͜^0͚͜\x07͛͗͛͘͚͛͜͝͝͞\x07͟͞`1͟c͢͠\\/͡͠͢͡ͣ͢ͣͤ\x07ͤeͥͧ\x07[ͦͨh5ͧͦͧͨͨͩͩͪ\x07\\ͪgͫͭ`1ͬͫͭͮͮͬͮͯͯiͰͱ\x07-ͱͲ\x07WͲͳl7ͳʹ\x07Xʹͷ`1͵Ͷ\x07"Ͷ͸`1ͷ͵ͷ͸͸΀͹ͺ\x07Eͺͻ\x07Wͻͼl7ͼͽ\x07Xͽ;`1;΀ͿͰͿ͹';
CPP14Parser._serializedATNSegment2 = "΀k΁΍\\/΂΄Îh΃΂΃΄΄΅΅ΆGΆΊäs·Έ\x07gΈ΋ĒΉ΋ĖΊ·ΊΉ΋΍Ό΁Ό΃΍mΎΏ\x07VΏΐ\x07WΐΑl7ΑΒ\x07XΒΓ`1ΓΰΔΕ\x07ΕΖ`1ΖΗ\x07VΗΘ\x07WΘΙ\\/ΙΚ\x07XΚΛ\x07ΛΰΜΝ\x07*ΝΪ\x07WΞΠp9ΟΡl7ΠΟΠΡΡ΢΢Τ\x07ΣΥ\\/ΤΣΤΥΥΫΦΧr:ΧΨ\x07ΨΩt;ΩΫΪΞΪΦΫάάέ\x07Xέή`1ήΰίΎίΔίΜΰoαδd3βδBγαγβδqεηÎhζεζηηθθιGικäsκsλξ\\/μξĖνλνμξuοω\x07πω\x07ρτ\x07=ςυ\\/συĖτςτστυυωφχ\x07,χω\x07ψοψπψρψφωϊϊϋ\x07ϋwόύ~@ύyώϐ|?ϏώϐϑϑϏϑϒϒ{ϓϝ~@ϔϝĊϕϝŐ©ϖϝŤ³ϗϝŦ´ϘϝÌgϙϝ¾`ϚϝDϛϝEϜϓϜϔϜϕϜϖϜϗϜϘϜϙϜϚϜϛϝ}ϞϧBϟϧÊfϠϧÂbϡϧÆdϢϧÈeϣϧCϤϧAϥϧ®XϦϞϦϟϦϠϦϡϦϢϦϣϦϤϦϥϧϨϩ\x07Qϩϫ\x07ϪϬÎhϫϪϫϬϬϭϭϮ\x07gϮϯø}ϯϰ\x07ϰϱϳGϲϱϲϳϳϵϴ϶àqϵϴϵ϶϶ϷϷЀ\x07ϸϺÎhϹϻGϺϹϺϻϻϼϼϽàqϽϾ\x07ϾЀϿϲϿϸЀЁЂ\x07BЂЃ\x07WЃЄ^0ЄЅ\x07|ЅІ\x07ІЇ\x07XЇЈ\x07ЈЉЊ\x07ЊЋЌÎhЌЍ\x07ЍЎЕHЏЕKАЕIБЕ\x07+ВЕ\x07LГЕ\x07ДЎДЏДАДБДВДГЕЖИFЗЖИЙЙКЙЗКМЛНÎhМЛМННОП	\rПРС	СТУ\x07УФШLХШĚЦШªVЧФЧХЧЦШЩЮ QЪЮ¦TЫЮŢ²ЬЮòzЭЩЭЪЭЫЭЬЮЯбKаЯбввавггеджÎhедежжзйLизйккикллнмоÎhнмноопр	рст	тух\f\x07фуфххццѸ¢Rчш\f\x07шщ\x07FщъŘ­ъѸыѸPьюPэьэююѐяёOѐяёђђѐђѓѓѸєіPѕєѕііїїѸ\x07јњPљјљњњћћѸ\x07ќўPѝќѝўўџџѸ\x07ѠѢPѡѠѡѢѢѣѣѸ\x07UѤѸ\x07ѥѧPѦѥѦѧѧѫѨѪOѩѨѪѭѫѩѫѬѬѮѭѫѮѸ\x07/ѯѸ\x07)ѰѲOѱѰѱѲѲѳѳѸ\x07 ѴѸ\x07SѵѸ\x07ѶѸ¤SѷфѷчѷыѷэѷѕѷљѷѝѷѡѷѤѷѦѷѯѷѱѷѴѷѵѷѶѸ¡ѹѾĘѺѾ¨UѻѾJѼѾŘ­ѽѹѽѺѽѻѽѼѾ£ѿҀ\x07Ҁ҃\x07Wҁ҄\\/҂҄\x07҃ҁ҃҂҄҅҅҆\x07X҆¥҇ҖĢ҈ҊÎh҉҈҉ҊҊҌҋҍ\f\x07ҌҋҌҍҍҎҎҗ\x07ҏҗŘ­ҐҒ\f\x07ґғ\x07FҒґҒғғҔҔҕŘ­ҕҗҖ҉ҖҏҖҐҗҞҘҚ\x07#ҙқ\f\x07ҚҙҚққҜҜҞ\x07ҝ҇ҝҘҞ§ҟҠ\x07Ҡ©ҡҢ¬WҢҧ\x07[ңҥ´[ҤҦ\x07|ҥҤҥҦҦҨҧңҧҨҨҩҩҪ\x07\\Ҫ«ҫҭ°YҬҮÎhҭҬҭҮҮҳүұ\f\x07ҰүҰұұҲҲҴ\x07ҳҰҳҴҴҶҵҷ²ZҶҵҶҷҷ­ҸҺ°YҹһÎhҺҹҺһһҼҼҾ\x07ҽҿ²ZҾҽҾҿҿӀӀӁ\x07Ӂ¯ӂӄ\x07#ӃӅ	ӄӃӄӅӅ±ӆӇ\x07ӇӈMӈ³Ӊӎ¶\\ӊӋ\x07|ӋӍ¶\\ӌӊӍӐӎӌӎӏӏµӐӎӑӔ¸]Ӓӓ\x07gӓӕ^0ӔӒӔӕӕ·Ӗӗ\x07ӗ¹Әӛ¼_әӛÀaӚӘӚәӛ»Ӝӝ\x07ӝ½ӞӠ\x07.ӟӞӟӠӠӡӡӤ\x072Ӣӥ\x07ӣӥ¼_ӤӢӤӣӤӥӥӦӦӨ\x07[ӧөz>ӨӧӨөөӪӪӫ\x07\\ӫ¿Ӭӭ\x07ӭÁӮӯ\x072ӯӰ\x07Ӱӱ\x07gӱӲÄcӲӳ\x07ӳÃӴӶ\f\x07ӵӴӵӶӶӷӷӸº^ӸÅӹӿ\x07QӺӼ\x07NӻӺӻӼӼӽӽԀ\f\x07ӾԀ\x07ӿӻӿӾԀԁԁԂ\bԂԃ\x07ԃÇԄԆÎhԅԄԅԆԆԇԇԈ\x07QԈԊ\x072ԉԋ\f\x07ԊԉԊԋԋԌԌԍº^ԍԎ\x07ԎÉԏԐ\x07Ԑԑ\x07WԑԒ\x07Ԓԓ\x07XԓԔ\x07ԔËԕԖ\x07&Ԗԝ\x07ԗԙ\x07[ԘԚz>ԙԘԙԚԚԛԛԞ\x07\\ԜԞ|?ԝԗԝԜԞÍԟԡÐiԠԟԡԢԢԠԢԣԣÏԤԥ\x07Yԥԧ\x07YԦԨÔkԧԦԧԨԨԩԩԪ\x07ZԪԭ\x07ZԫԭÒjԬԤԬԫԭÑԮԯ\x07\fԯԲ\x07W԰Գø}ԱԳ^0Բ԰ԲԱԳԵԴԶ\x07ԵԴԵԶԶԷԷԸ\x07XԸÓԹԾÖlԺԻ\x07|ԻԽÖlԼԺԽՀԾԼԾԿԿՂՀԾՁՃ\x07ՂՁՂՃՃÕՄՅØmՅՆ\x07ՆՈՇՄՇՈՈՉՉՋ\x07ՊՌÚnՋՊՋՌՌ×ՍՎ\x07ՎÙՏՑ\x07WՐՒÜoՑՐՑՒՒՓՓՔ\x07XՔÛՕ՗ÞpՖՕ՗՘՘Ֆ՘ՙՙÝ՚՛\x07W՛՜Üo՜՝\x07X՝լ՞՟\x07Y՟ՠÜoՠա\x07Zալբգ\x07[գդÜoդե\x07\\ելզը\nէզըթթէթժժլի՚ի՞իբիէլßխղârծկ\x07|կձârհծձմղհղճճáմղյշäsնոĎշնշոոãչտætպջèuջռêvռսìwստվչվպտåրւîxցփ\x07ւցւփփօքրօֈֆքֆևև։ֈֆ։֊èu֊ç֋֌\bu֌֎ö|֍֏Îh֎֍֎֏֏֕֐֑\x07W֑֒æt֒֓\x07X֓֕֔֋֔֐֤֕֖֠\f֗֡êv֚֘\x07Y֛֙^0֚֙֛֚֛֜֜֞\x07Z֝֟Îh֞֝֞֟֟֡֠֗֠֘֣֡֢֖֣֦֤֢֤֥֥é֦֤֧֩\x07W֪֨Ą֩֨֪֩֪֫֭֫\x07X֮֬ðy֭֬֭֮ְ֮ֱ֯ô{ְ֯ְֱֱֳֲִŴ»ֲֳֳִִֶֵַÎhֵֶֶַַëָֹ\x07~ֹֻNֺּú~ֺֻֻּּíֽֿ	־׀Îhֿ־ֿ׀׀׌ׁ׃\f\x07ׁׂׂ׃׃ׄׄ׆\x07_ׇׅÎh׆ׅ׆ׇׇ׉׈׊ðy׉׈׉׊׊׌׋ֽ׋ׂ׌ï׍׏òz׎׍׏אא׎אבבñגד	דóהו	וõזט\x07חזחטטייךך÷כםMלמú~םלםממùןרüנעþסנסעעףףפêvפץìwץרצרĀקןקסקצרûש׳þת׬îx׫ת׬׭׭׫׭׮׮װׯױþװׯװױױ׳ײשײ׫׳ý״׵\b׵؃êv׶׸\x07Y׷׹^0׸׷׸׹׹׺׺׼\x07Z׻׽Îh׼׻׼׽׽؃׾׿\x07W׿؀ü؀؁\x07X؁؃؂״؂׶؂׾؃ؓ؄؏\f؅ؐêv؆؇þ؇؉\x07Y؈؊^0؉؈؉؊؊؋؋؍\x07Z،؎Îh؍،؍؎؎ؐ؏؅؏؆ؐؒؑ؄ؒؕؓؑؓؔؔÿؕؓؘؖîxؗؖؘ؛ؙؗؙؚؚ؜";
CPP14Parser._serializedATNSegment3 = "؛ؙ؜؝Ă؝ā؞؟\b؟ؠ\x07ؠدءث\fآجêvأإ\x07Yؤئ^0إؤإئئااة\x07ZبتÎhةبةتتجثآثأجخحءخردحدذذăردزطĆسص\x07|شسشصصضضظ\x07طشطظظąعؾĈغػ\x07|ػؽĈؼغؽـؾؼؾؿؿćـؾفكÎhقفقككللىGميäsنوú~هنهوويىمىهيٍًٌ\x07gٌَĒًٍٍََĉُّÎhُِِّّٓْٔGْٓٓٔٕٔٕٗäsٖ٘Ĭٖٗٗ٘٘ٙٙٚČٚċٛٝń£ٜٛٜٝٝٞٞ٤f4ٟ٤Ū¶٠١\x07g١٢	٢٤\x07٣ٜ٣ٟ٣٠٤č٥٫Đ٦٧\x07W٧٨$٨٩\x07X٩٫٪٥٪٦٫ď٬٭\x07g٭ٰĒٮٰĖٯ٬ٯٮٰđٱٴX-ٲٴĖٳٱٳٲٴēٵٷĒٶٸ\x07ٷٶٷٸٸڀٹٺ\x07|ٺټĒٻٽ\x07ټٻټٽٽٿپٹٿڂڀپڀځځĕڂڀڃڈ\x07[ڄچĔڅڇ\x07|چڅچڇڇډڈڄڈډډڊڊڋ\x07\\ڋėڌڏ\x07ڍڏŘ­ڎڌڎڍڏęڐڑĜڑړ\x07[ڒڔĤړڒړڔڔڕڕږ\x07\\ږěڗڙĢژښÎhڙژڙښښڟڛڝĞڜڞĠڝڜڝڞڞڠڟڛڟڠڠڢڡڣĲڢڡڢڣڣگڤڦ\x07OڥڧÎhڦڥڦڧڧڬڨڪĞکګĠڪکڪګګڭڬڨڬڭڭگڮڗڮڤگĝڰڲ\f\x07ڱڰڱڲڲڳڳڴĘڴğڵڶ\x07(ڶġڷڸ	ڸģڹھĦںڻļڻڼ\x07ڼھڽڹڽںھڿڿڽڿۀۀĥہۃÎhۂہۂۃۃۅۄۆGۅۄۅۆۆۈۇۉĨۈۇۈۉۉۊۊے\x07ۋےĊیےÆdۍےCێےŐ©ۏےAېےDۑۂۑۋۑیۑۍۑێۑۏۑېےħۓۘĪ۔ە\x07|ەۗĪۖ۔ۗۚۘۖۘۙۙĩۚۘۛۥäsۜ۞Ĭ۝ۜ۝۞۞۠۟ۡİ۠۟۠ۡۡۦۢۤĐۣۢۣۤۤۦۥ۝ۥۣۦ۰ۧ۩\x07ۨۧۨ۩۩۫۪۬Îh۪۫۫۬ۭ۬ۭۮ\x07ۮ۰^0ۯۛۯۨ۰ī۱۳Į۲۱۳۴۴۲۴۵۵ĭ۶۷	۷į۸۹\x07g۹ۺ\x07ۺۻ\bۻıۼ۽\x07۽۾Ĵ۾ĳۿ܁Ķ܀܂\x07܁܀܁܂܂܊܃܄\x07|܄܆Ķ܅܇\x07܆܅܆܇܇܉܈܃܉܌܊܈܊܋܋ĵ܌܊܍܏Îh܎܍܎܏܏ܜܐܝĺܑܓ\x07Rܒܔļܓܒܓܔܔܕܕܝĺܖܘļܗܙ\x07Rܘܗܘܙܙܚܚܛĺܛܝܜܐܜܑܜܖܝķܞܠ\f\x07ܟܞܟܠܠܡܡܤĘܢܤ¤SܣܟܣܢܤĹܥܦĸܦĻܧܨ	ܨĽܩܪ\x076ܪܫŀ¡ܫĿܬܮMܭܯł¢ܮܭܮܯܯŁܰܲîxܱܳł¢ܱܲܲܳܳŃܴܵ\x07ܵܶņ¤ܶŅܷܹň¥ܸܺ\x07ܹܸܹܺ݂ܺܻܼ\x07|ܼܾň¥ܽܿ\x07ܾܽܾܿܿ݁ܻ݀݄݁݂݀݂݃݃Ň݄݂݅݌Ŋ¦݆݈\x07W݇݉$݈݇݈݉݉݊݊ݍ\x07X݋ݍĖ݌݆݌݋ݍŉݎݑĸݏݑ\x07ݐݎݐݏݑŋݒݓ\x076ݓݔż¿ݔōݕݙ\x076ݖݗ\x07ݗݚ\x07ݘݚ\x07ݙݖݙݘݚŏݛݜ\x07Fݜݝ\x07hݝݞŒªݞݟ\x07iݟݠ|?ݠőݡݦŔ«ݢݣ\x07|ݣݥŔ«ݤݢݥݨݦݤݦݧݧœݨݦݩݬŖ¬ݪݬĈݫݩݫݪݬŕݭݮ\x07Fݮݯ\x07hݯݰŒªݰݱ\x07iݱݳݲݭݲݳݳݴݴݷ\x07ݵݷ\x07Nݶݲݶݵݷރݸݺ\x07ݹݸݹݺݺݼݻݽ\x07ݼݻݼݽݽބݾހ\x07ݿݾݿހހށށނ\x07gނބø}ރݹރݿބŗޅކŜ¯ކވ\x07hއމŞ°ވއވމމފފދ\x07iދřތޘŘ­ލސŌ§ގސŎ¨ޏލޏގސޑޑޓ\x07hޒޔŞ°ޓޒޓޔޔޕޕޖ\x07iޖޘޗތޗޏޘśޙޚ\x07ޚŝޛޝŠ±ޜޞ\x07ޝޜޝޞޞަޟޠ\x07|ޠޢŠ±ޡޣ\x07ޢޡޢޣޣޥޤޟޥިަޤަާާşިަީޭø}ުޭ^0ޫޭެީެުެޫޭšޮޯ\x07Nޯ޵\f\x07ް޶\x07ޱ޳\x07F޲ޱ޲޳޳޴޴޶Ř­޵ް޵޲޶ţ޷޹\x07&޸޷޸޹޹޺޺޻\x07F޻޼|?޼ť޽޾\x07F޾޿\x07h޿߀\x07i߀߁|?߁ŧ߂߃\x07K߃߄f4߄߅Ŭ·߅ũ߆߈\x07K߇߉ń£߈߇߈߉߉ߊߊߋf4ߋߌŬ·ߌūߍߏŮ¸ߎߍߏߐߐߎߐߑߑŭߒߓ\x07ߓߔ\x07WߔߕŰ¹ߕߖ\x07Xߖߗf4ߗůߘߚÎhߙߘߙߚߚߛߛߞMߜߟäsߝߟú~ߞߜߞߝߞߟߟߢߠߢ\x07ߡߙߡߠߢűߣߥ\x07IߤߦX-ߥߤߥߦߦųߧߪŶ¼ߨߪź¾ߩߧߩߨߪŵ߫߬\x07I߬߮\x07W߭߯Ÿ½߮߭߮߯߯߰߰߱\x07X߱ŷ߲ߴø}߳ߵ\x07ߴ߳ߴߵߵ߽߶߷\x07|߷߹ø}߸ߺ\x07߹߸߹ߺߺ߼߻߶߼߿߽߻߽߾߾Ź߿߽ࠀࠁ\x074ࠁࠂ\x07Wࠂࠃ^0ࠃࠄ\x07Xࠄࠇࠅࠇ\x074ࠆࠀࠆࠅࠇŻࠈࠋ\x073ࠉࠊ\x07Yࠊࠌ\x07Zࠋࠉࠋࠌࠌ࠾ࠍࠐ\x07ࠎࠏ\x07Yࠏࠑ\x07Zࠐࠎࠐࠑࠑ࠾ࠒ࠾\x07]ࠓ࠾\x07^ࠔ࠾\x07_ࠕ࠾\x07`ࠖ࠾\x07aࠗ࠾\x07b࠘࠾\x07c࠙࠾\x07dࠚ࠾\x07eࠛ࠾\x07fࠜ࠾\x07gࠝ࠾\x07iࠞ࠾\x07hࠟ࠾\x07wࠠ࠾\x07jࠡ࠾\x07kࠢ࠾\x07lࠣ࠾\x07gࠤ࠾\x07nࠥ࠾\x07oࠦ࠾\x07pࠧ࠾\x07qࠨࠩ\x07hࠩ࠾\x07hࠪࠫ\x07iࠫ࠾\x07iࠬ࠾\x07s࠭࠾\x07r࠮࠾\x07t࠯࠾\x07u࠰࠾\x07v࠱࠾\x07w࠲࠾\x07x࠳࠾\x07y࠴࠾\x07z࠵࠾\x07{࠶࠾\x07|࠷࠾\x07}࠸࠾\x07~࠹࠺\x07W࠺࠾\x07X࠻࠼\x07Y࠼࠾\x07Z࠽ࠈ࠽ࠍ࠽ࠒ࠽ࠓ࠽ࠔ࠽ࠕ࠽ࠖ࠽ࠗ࠽࠘࠽࠙࠽ࠚ࠽ࠛ࠽ࠜ࠽ࠝ࠽ࠞ࠽ࠟ࠽ࠠ࠽ࠡ࠽ࠢ࠽ࠣ࠽ࠤ࠽ࠥ࠽ࠦ࠽ࠧ࠽ࠨ࠽ࠪ࠽ࠬ࠽࠭࠽࠮࠽࠯࠽࠰࠽࠱࠽࠲࠽࠳࠽࠴࠽࠵࠽࠶࠽࠷࠽࠸࠽࠹࠽࠻࠾Ž࠿ࡀ	ࡀſĴƁƈƑƕƞơƥƭƴƷƼǁǇǏǑǚǞǢǥǩǬǳǷǺǽȀȆȊȎȜȠȦȭȳȷȻȽɅɊɗɞɪɴɹɽʄʇʏʓʖʝʤʨʭʱʴʹˈˏ˗˟˨˯˶˾̷̖̞̦̯͇̆̎̀͏͕͒͛ͧͮ͡ͷͿ΃ΊΌΠΤΪίγζντψϑϜϦϫϲϵϺϿДЙМЧЭвекнфэђѕљѝѡѦѫѱѷѽ҃҉ҌҒҖҚҝҥҧҭҰҳҶҺҾӄӎӔӚӟӤӨӵӻӿԅԊԙԝԢԧԬԲԵԾՂՇՋՑ՘թիղշվւֆ֎ְֳֶֻֿׂ֤֚֭֔֞֠֩׆׉׋אחםסק׭װײ׸׼؂؉؍؏ؙؓإةثدشطؾقهىٍِٜٓٗ٣٪ٯٳٷټڀچڈڎړڙڝڟڢڦڪڬڮڱڽڿۂۅۈۑۘ۝ۣ۠ۥۨ۫ۯ۴܁܆܊܎ܓܘܜܟܣܮܹܾ݂݈ܲ݌ݐݙݦݫݲݶݹݼݿރވޏޓޗޝޢަެ޲޵޸߈ߐߙߞߡߥߩ߮ߴ߹߽ࠆࠋࠐ࠽";
CPP14Parser._serializedATN = Utils.join([
  _CPP14Parser._serializedATNSegment0,
  _CPP14Parser._serializedATNSegment1,
  _CPP14Parser._serializedATNSegment2,
  _CPP14Parser._serializedATNSegment3
], "");
export class TranslationUnitContext extends ParserRuleContext {
  EOF() {
    return this.getToken(CPP14Parser.EOF, 0);
  }
  declarationseq() {
    return this.tryGetRuleContext(0, DeclarationseqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_translationUnit;
  }
  enterRule(listener) {
    if (listener.enterTranslationUnit) {
      listener.enterTranslationUnit(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTranslationUnit) {
      listener.exitTranslationUnit(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTranslationUnit) {
      return visitor.visitTranslationUnit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PrimaryExpressionContext extends ParserRuleContext {
  literal(i) {
    if (i === void 0) {
      return this.getRuleContexts(LiteralContext);
    } else {
      return this.getRuleContext(i, LiteralContext);
    }
  }
  This() {
    return this.tryGetToken(CPP14Parser.This, 0);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  idExpression() {
    return this.tryGetRuleContext(0, IdExpressionContext);
  }
  lambdaExpression() {
    return this.tryGetRuleContext(0, LambdaExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_primaryExpression;
  }
  enterRule(listener) {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IdExpressionContext extends ParserRuleContext {
  unqualifiedId() {
    return this.tryGetRuleContext(0, UnqualifiedIdContext);
  }
  qualifiedId() {
    return this.tryGetRuleContext(0, QualifiedIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_idExpression;
  }
  enterRule(listener) {
    if (listener.enterIdExpression) {
      listener.enterIdExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIdExpression) {
      listener.exitIdExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIdExpression) {
      return visitor.visitIdExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UnqualifiedIdContext extends ParserRuleContext {
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  operatorFunctionId() {
    return this.tryGetRuleContext(0, OperatorFunctionIdContext);
  }
  conversionFunctionId() {
    return this.tryGetRuleContext(0, ConversionFunctionIdContext);
  }
  literalOperatorId() {
    return this.tryGetRuleContext(0, LiteralOperatorIdContext);
  }
  Tilde() {
    return this.tryGetToken(CPP14Parser.Tilde, 0);
  }
  className() {
    return this.tryGetRuleContext(0, ClassNameContext);
  }
  decltypeSpecifier() {
    return this.tryGetRuleContext(0, DecltypeSpecifierContext);
  }
  templateId() {
    return this.tryGetRuleContext(0, TemplateIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_unqualifiedId;
  }
  enterRule(listener) {
    if (listener.enterUnqualifiedId) {
      listener.enterUnqualifiedId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnqualifiedId) {
      listener.exitUnqualifiedId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnqualifiedId) {
      return visitor.visitUnqualifiedId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class QualifiedIdContext extends ParserRuleContext {
  nestedNameSpecifier() {
    return this.getRuleContext(0, NestedNameSpecifierContext);
  }
  unqualifiedId() {
    return this.getRuleContext(0, UnqualifiedIdContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_qualifiedId;
  }
  enterRule(listener) {
    if (listener.enterQualifiedId) {
      listener.enterQualifiedId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQualifiedId) {
      listener.exitQualifiedId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQualifiedId) {
      return visitor.visitQualifiedId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NestedNameSpecifierContext extends ParserRuleContext {
  Doublecolon() {
    return this.getToken(CPP14Parser.Doublecolon, 0);
  }
  theTypeName() {
    return this.tryGetRuleContext(0, TheTypeNameContext);
  }
  namespaceName() {
    return this.tryGetRuleContext(0, NamespaceNameContext);
  }
  decltypeSpecifier() {
    return this.tryGetRuleContext(0, DecltypeSpecifierContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_nestedNameSpecifier;
  }
  enterRule(listener) {
    if (listener.enterNestedNameSpecifier) {
      listener.enterNestedNameSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNestedNameSpecifier) {
      listener.exitNestedNameSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNestedNameSpecifier) {
      return visitor.visitNestedNameSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LambdaExpressionContext extends ParserRuleContext {
  lambdaIntroducer() {
    return this.getRuleContext(0, LambdaIntroducerContext);
  }
  compoundStatement() {
    return this.getRuleContext(0, CompoundStatementContext);
  }
  lambdaDeclarator() {
    return this.tryGetRuleContext(0, LambdaDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_lambdaExpression;
  }
  enterRule(listener) {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LambdaIntroducerContext extends ParserRuleContext {
  LeftBracket() {
    return this.getToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.getToken(CPP14Parser.RightBracket, 0);
  }
  lambdaCapture() {
    return this.tryGetRuleContext(0, LambdaCaptureContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_lambdaIntroducer;
  }
  enterRule(listener) {
    if (listener.enterLambdaIntroducer) {
      listener.enterLambdaIntroducer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLambdaIntroducer) {
      listener.exitLambdaIntroducer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLambdaIntroducer) {
      return visitor.visitLambdaIntroducer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LambdaCaptureContext extends ParserRuleContext {
  captureList() {
    return this.tryGetRuleContext(0, CaptureListContext);
  }
  captureDefault() {
    return this.tryGetRuleContext(0, CaptureDefaultContext);
  }
  Comma() {
    return this.tryGetToken(CPP14Parser.Comma, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_lambdaCapture;
  }
  enterRule(listener) {
    if (listener.enterLambdaCapture) {
      listener.enterLambdaCapture(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLambdaCapture) {
      listener.exitLambdaCapture(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLambdaCapture) {
      return visitor.visitLambdaCapture(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CaptureDefaultContext extends ParserRuleContext {
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_captureDefault;
  }
  enterRule(listener) {
    if (listener.enterCaptureDefault) {
      listener.enterCaptureDefault(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCaptureDefault) {
      listener.exitCaptureDefault(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCaptureDefault) {
      return visitor.visitCaptureDefault(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CaptureListContext extends ParserRuleContext {
  capture(i) {
    if (i === void 0) {
      return this.getRuleContexts(CaptureContext);
    } else {
      return this.getRuleContext(i, CaptureContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_captureList;
  }
  enterRule(listener) {
    if (listener.enterCaptureList) {
      listener.enterCaptureList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCaptureList) {
      listener.exitCaptureList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCaptureList) {
      return visitor.visitCaptureList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CaptureContext extends ParserRuleContext {
  simpleCapture() {
    return this.tryGetRuleContext(0, SimpleCaptureContext);
  }
  initcapture() {
    return this.tryGetRuleContext(0, InitcaptureContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_capture;
  }
  enterRule(listener) {
    if (listener.enterCapture) {
      listener.enterCapture(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCapture) {
      listener.exitCapture(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCapture) {
      return visitor.visitCapture(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleCaptureContext extends ParserRuleContext {
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  This() {
    return this.tryGetToken(CPP14Parser.This, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleCapture;
  }
  enterRule(listener) {
    if (listener.enterSimpleCapture) {
      listener.enterSimpleCapture(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleCapture) {
      listener.exitSimpleCapture(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleCapture) {
      return visitor.visitSimpleCapture(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitcaptureContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  initializer() {
    return this.getRuleContext(0, InitializerContext);
  }
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initcapture;
  }
  enterRule(listener) {
    if (listener.enterInitcapture) {
      listener.enterInitcapture(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitcapture) {
      listener.exitInitcapture(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitcapture) {
      return visitor.visitInitcapture(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LambdaDeclaratorContext extends ParserRuleContext {
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  parameterDeclarationClause() {
    return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
  }
  Mutable() {
    return this.tryGetToken(CPP14Parser.Mutable, 0);
  }
  exceptionSpecification() {
    return this.tryGetRuleContext(0, ExceptionSpecificationContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  trailingReturnType() {
    return this.tryGetRuleContext(0, TrailingReturnTypeContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_lambdaDeclarator;
  }
  enterRule(listener) {
    if (listener.enterLambdaDeclarator) {
      listener.enterLambdaDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLambdaDeclarator) {
      listener.exitLambdaDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLambdaDeclarator) {
      return visitor.visitLambdaDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PostfixExpressionContext extends ParserRuleContext {
  primaryExpression() {
    return this.tryGetRuleContext(0, PrimaryExpressionContext);
  }
  postfixExpression() {
    return this.tryGetRuleContext(0, PostfixExpressionContext);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  expressionList() {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  simpleTypeSpecifier() {
    return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
  }
  typeNameSpecifier() {
    return this.tryGetRuleContext(0, TypeNameSpecifierContext);
  }
  Dot() {
    return this.tryGetToken(CPP14Parser.Dot, 0);
  }
  Arrow() {
    return this.tryGetToken(CPP14Parser.Arrow, 0);
  }
  idExpression() {
    return this.tryGetRuleContext(0, IdExpressionContext);
  }
  pseudoDestructorName() {
    return this.tryGetRuleContext(0, PseudoDestructorNameContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  PlusPlus() {
    return this.tryGetToken(CPP14Parser.PlusPlus, 0);
  }
  MinusMinus() {
    return this.tryGetToken(CPP14Parser.MinusMinus, 0);
  }
  Less() {
    return this.tryGetToken(CPP14Parser.Less, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  Greater() {
    return this.tryGetToken(CPP14Parser.Greater, 0);
  }
  Dynamic_cast() {
    return this.tryGetToken(CPP14Parser.Dynamic_cast, 0);
  }
  Static_cast() {
    return this.tryGetToken(CPP14Parser.Static_cast, 0);
  }
  Reinterpret_cast() {
    return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0);
  }
  Const_cast() {
    return this.tryGetToken(CPP14Parser.Const_cast, 0);
  }
  typeIdOfTheTypeId() {
    return this.tryGetRuleContext(0, TypeIdOfTheTypeIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_postfixExpression;
  }
  enterRule(listener) {
    if (listener.enterPostfixExpression) {
      listener.enterPostfixExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPostfixExpression) {
      listener.exitPostfixExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPostfixExpression) {
      return visitor.visitPostfixExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeIdOfTheTypeIdContext extends ParserRuleContext {
  Typeid_() {
    return this.getToken(CPP14Parser.Typeid_, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeIdOfTheTypeId;
  }
  enterRule(listener) {
    if (listener.enterTypeIdOfTheTypeId) {
      listener.enterTypeIdOfTheTypeId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeIdOfTheTypeId) {
      listener.exitTypeIdOfTheTypeId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeIdOfTheTypeId) {
      return visitor.visitTypeIdOfTheTypeId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExpressionListContext extends ParserRuleContext {
  initializerList() {
    return this.getRuleContext(0, InitializerListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_expressionList;
  }
  enterRule(listener) {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PseudoDestructorNameContext extends ParserRuleContext {
  Tilde() {
    return this.getToken(CPP14Parser.Tilde, 0);
  }
  theTypeName(i) {
    if (i === void 0) {
      return this.getRuleContexts(TheTypeNameContext);
    } else {
      return this.getRuleContext(i, TheTypeNameContext);
    }
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  Doublecolon() {
    return this.tryGetToken(CPP14Parser.Doublecolon, 0);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  decltypeSpecifier() {
    return this.tryGetRuleContext(0, DecltypeSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pseudoDestructorName;
  }
  enterRule(listener) {
    if (listener.enterPseudoDestructorName) {
      listener.enterPseudoDestructorName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPseudoDestructorName) {
      listener.exitPseudoDestructorName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPseudoDestructorName) {
      return visitor.visitPseudoDestructorName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UnaryExpressionContext extends ParserRuleContext {
  postfixExpression() {
    return this.tryGetRuleContext(0, PostfixExpressionContext);
  }
  unaryExpression() {
    return this.tryGetRuleContext(0, UnaryExpressionContext);
  }
  PlusPlus() {
    return this.tryGetToken(CPP14Parser.PlusPlus, 0);
  }
  MinusMinus() {
    return this.tryGetToken(CPP14Parser.MinusMinus, 0);
  }
  unaryOperator() {
    return this.tryGetRuleContext(0, UnaryOperatorContext);
  }
  Sizeof() {
    return this.tryGetToken(CPP14Parser.Sizeof, 0);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  Alignof() {
    return this.tryGetToken(CPP14Parser.Alignof, 0);
  }
  noExceptExpression() {
    return this.tryGetRuleContext(0, NoExceptExpressionContext);
  }
  newExpression() {
    return this.tryGetRuleContext(0, NewExpressionContext);
  }
  deleteExpression() {
    return this.tryGetRuleContext(0, DeleteExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_unaryExpression;
  }
  enterRule(listener) {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UnaryOperatorContext extends ParserRuleContext {
  Or() {
    return this.tryGetToken(CPP14Parser.Or, 0);
  }
  Star() {
    return this.tryGetToken(CPP14Parser.Star, 0);
  }
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  Plus() {
    return this.tryGetToken(CPP14Parser.Plus, 0);
  }
  Tilde() {
    return this.tryGetToken(CPP14Parser.Tilde, 0);
  }
  Minus() {
    return this.tryGetToken(CPP14Parser.Minus, 0);
  }
  Not() {
    return this.tryGetToken(CPP14Parser.Not, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_unaryOperator;
  }
  enterRule(listener) {
    if (listener.enterUnaryOperator) {
      listener.enterUnaryOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnaryOperator) {
      listener.exitUnaryOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUnaryOperator) {
      return visitor.visitUnaryOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NewExpressionContext extends ParserRuleContext {
  New() {
    return this.getToken(CPP14Parser.New, 0);
  }
  newTypeId() {
    return this.tryGetRuleContext(0, NewTypeIdContext);
  }
  Doublecolon() {
    return this.tryGetToken(CPP14Parser.Doublecolon, 0);
  }
  newPlacement() {
    return this.tryGetRuleContext(0, NewPlacementContext);
  }
  newInitializer() {
    return this.tryGetRuleContext(0, NewInitializerContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_newExpression;
  }
  enterRule(listener) {
    if (listener.enterNewExpression) {
      listener.enterNewExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewExpression) {
      listener.exitNewExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewExpression) {
      return visitor.visitNewExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NewPlacementContext extends ParserRuleContext {
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  expressionList() {
    return this.getRuleContext(0, ExpressionListContext);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_newPlacement;
  }
  enterRule(listener) {
    if (listener.enterNewPlacement) {
      listener.enterNewPlacement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewPlacement) {
      listener.exitNewPlacement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewPlacement) {
      return visitor.visitNewPlacement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NewTypeIdContext extends ParserRuleContext {
  typeSpecifierSeq() {
    return this.getRuleContext(0, TypeSpecifierSeqContext);
  }
  newDeclarator() {
    return this.tryGetRuleContext(0, NewDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_newTypeId;
  }
  enterRule(listener) {
    if (listener.enterNewTypeId) {
      listener.enterNewTypeId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewTypeId) {
      listener.exitNewTypeId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewTypeId) {
      return visitor.visitNewTypeId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NewDeclaratorContext extends ParserRuleContext {
  pointerOperator() {
    return this.tryGetRuleContext(0, PointerOperatorContext);
  }
  newDeclarator() {
    return this.tryGetRuleContext(0, NewDeclaratorContext);
  }
  noPointerNewDeclarator() {
    return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_newDeclarator;
  }
  enterRule(listener) {
    if (listener.enterNewDeclarator) {
      listener.enterNewDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewDeclarator) {
      listener.exitNewDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewDeclarator) {
      return visitor.visitNewDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoPointerNewDeclaratorContext extends ParserRuleContext {
  LeftBracket() {
    return this.getToken(CPP14Parser.LeftBracket, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  RightBracket() {
    return this.getToken(CPP14Parser.RightBracket, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  noPointerNewDeclarator() {
    return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noPointerNewDeclarator;
  }
  enterRule(listener) {
    if (listener.enterNoPointerNewDeclarator) {
      listener.enterNoPointerNewDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoPointerNewDeclarator) {
      listener.exitNoPointerNewDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoPointerNewDeclarator) {
      return visitor.visitNoPointerNewDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NewInitializerContext extends ParserRuleContext {
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  expressionList() {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_newInitializer;
  }
  enterRule(listener) {
    if (listener.enterNewInitializer) {
      listener.enterNewInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNewInitializer) {
      listener.exitNewInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNewInitializer) {
      return visitor.visitNewInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeleteExpressionContext extends ParserRuleContext {
  Delete() {
    return this.getToken(CPP14Parser.Delete, 0);
  }
  castExpression() {
    return this.getRuleContext(0, CastExpressionContext);
  }
  Doublecolon() {
    return this.tryGetToken(CPP14Parser.Doublecolon, 0);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_deleteExpression;
  }
  enterRule(listener) {
    if (listener.enterDeleteExpression) {
      listener.enterDeleteExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeleteExpression) {
      listener.exitDeleteExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeleteExpression) {
      return visitor.visitDeleteExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoExceptExpressionContext extends ParserRuleContext {
  Noexcept() {
    return this.getToken(CPP14Parser.Noexcept, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  expression() {
    return this.getRuleContext(0, ExpressionContext);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noExceptExpression;
  }
  enterRule(listener) {
    if (listener.enterNoExceptExpression) {
      listener.enterNoExceptExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoExceptExpression) {
      listener.exitNoExceptExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoExceptExpression) {
      return visitor.visitNoExceptExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CastExpressionContext extends ParserRuleContext {
  unaryExpression() {
    return this.tryGetRuleContext(0, UnaryExpressionContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  castExpression() {
    return this.tryGetRuleContext(0, CastExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_castExpression;
  }
  enterRule(listener) {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCastExpression) {
      return visitor.visitCastExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PointerMemberExpressionContext extends ParserRuleContext {
  castExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(CastExpressionContext);
    } else {
      return this.getRuleContext(i, CastExpressionContext);
    }
  }
  DotStar(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.DotStar);
    } else {
      return this.getToken(CPP14Parser.DotStar, i);
    }
  }
  ArrowStar(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.ArrowStar);
    } else {
      return this.getToken(CPP14Parser.ArrowStar, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pointerMemberExpression;
  }
  enterRule(listener) {
    if (listener.enterPointerMemberExpression) {
      listener.enterPointerMemberExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPointerMemberExpression) {
      listener.exitPointerMemberExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPointerMemberExpression) {
      return visitor.visitPointerMemberExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MultiplicativeExpressionContext extends ParserRuleContext {
  pointerMemberExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(PointerMemberExpressionContext);
    } else {
      return this.getRuleContext(i, PointerMemberExpressionContext);
    }
  }
  Star(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Star);
    } else {
      return this.getToken(CPP14Parser.Star, i);
    }
  }
  Div(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Div);
    } else {
      return this.getToken(CPP14Parser.Div, i);
    }
  }
  Mod(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Mod);
    } else {
      return this.getToken(CPP14Parser.Mod, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_multiplicativeExpression;
  }
  enterRule(listener) {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AdditiveExpressionContext extends ParserRuleContext {
  multiplicativeExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(MultiplicativeExpressionContext);
    } else {
      return this.getRuleContext(i, MultiplicativeExpressionContext);
    }
  }
  Plus(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Plus);
    } else {
      return this.getToken(CPP14Parser.Plus, i);
    }
  }
  Minus(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Minus);
    } else {
      return this.getToken(CPP14Parser.Minus, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_additiveExpression;
  }
  enterRule(listener) {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ShiftExpressionContext extends ParserRuleContext {
  additiveExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(AdditiveExpressionContext);
    } else {
      return this.getRuleContext(i, AdditiveExpressionContext);
    }
  }
  shiftOperator(i) {
    if (i === void 0) {
      return this.getRuleContexts(ShiftOperatorContext);
    } else {
      return this.getRuleContext(i, ShiftOperatorContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_shiftExpression;
  }
  enterRule(listener) {
    if (listener.enterShiftExpression) {
      listener.enterShiftExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitShiftExpression) {
      listener.exitShiftExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitShiftExpression) {
      return visitor.visitShiftExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ShiftOperatorContext extends ParserRuleContext {
  Greater(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Greater);
    } else {
      return this.getToken(CPP14Parser.Greater, i);
    }
  }
  Less(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Less);
    } else {
      return this.getToken(CPP14Parser.Less, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_shiftOperator;
  }
  enterRule(listener) {
    if (listener.enterShiftOperator) {
      listener.enterShiftOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitShiftOperator) {
      listener.exitShiftOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitShiftOperator) {
      return visitor.visitShiftOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RelationalExpressionContext extends ParserRuleContext {
  shiftExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ShiftExpressionContext);
    } else {
      return this.getRuleContext(i, ShiftExpressionContext);
    }
  }
  Less(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Less);
    } else {
      return this.getToken(CPP14Parser.Less, i);
    }
  }
  Greater(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Greater);
    } else {
      return this.getToken(CPP14Parser.Greater, i);
    }
  }
  LessEqual(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.LessEqual);
    } else {
      return this.getToken(CPP14Parser.LessEqual, i);
    }
  }
  GreaterEqual(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.GreaterEqual);
    } else {
      return this.getToken(CPP14Parser.GreaterEqual, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_relationalExpression;
  }
  enterRule(listener) {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRelationalExpression) {
      return visitor.visitRelationalExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EqualityExpressionContext extends ParserRuleContext {
  relationalExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(RelationalExpressionContext);
    } else {
      return this.getRuleContext(i, RelationalExpressionContext);
    }
  }
  Equal(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Equal);
    } else {
      return this.getToken(CPP14Parser.Equal, i);
    }
  }
  NotEqual(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.NotEqual);
    } else {
      return this.getToken(CPP14Parser.NotEqual, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_equalityExpression;
  }
  enterRule(listener) {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEqualityExpression) {
      return visitor.visitEqualityExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AndExpressionContext extends ParserRuleContext {
  equalityExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(EqualityExpressionContext);
    } else {
      return this.getRuleContext(i, EqualityExpressionContext);
    }
  }
  And(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.And);
    } else {
      return this.getToken(CPP14Parser.And, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_andExpression;
  }
  enterRule(listener) {
    if (listener.enterAndExpression) {
      listener.enterAndExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAndExpression) {
      listener.exitAndExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAndExpression) {
      return visitor.visitAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExclusiveOrExpressionContext extends ParserRuleContext {
  andExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(AndExpressionContext);
    } else {
      return this.getRuleContext(i, AndExpressionContext);
    }
  }
  Caret(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Caret);
    } else {
      return this.getToken(CPP14Parser.Caret, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_exclusiveOrExpression;
  }
  enterRule(listener) {
    if (listener.enterExclusiveOrExpression) {
      listener.enterExclusiveOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExclusiveOrExpression) {
      listener.exitExclusiveOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExclusiveOrExpression) {
      return visitor.visitExclusiveOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InclusiveOrExpressionContext extends ParserRuleContext {
  exclusiveOrExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExclusiveOrExpressionContext);
    } else {
      return this.getRuleContext(i, ExclusiveOrExpressionContext);
    }
  }
  Or(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Or);
    } else {
      return this.getToken(CPP14Parser.Or, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_inclusiveOrExpression;
  }
  enterRule(listener) {
    if (listener.enterInclusiveOrExpression) {
      listener.enterInclusiveOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInclusiveOrExpression) {
      listener.exitInclusiveOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInclusiveOrExpression) {
      return visitor.visitInclusiveOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogicalAndExpressionContext extends ParserRuleContext {
  inclusiveOrExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(InclusiveOrExpressionContext);
    } else {
      return this.getRuleContext(i, InclusiveOrExpressionContext);
    }
  }
  AndAnd(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.AndAnd);
    } else {
      return this.getToken(CPP14Parser.AndAnd, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_logicalAndExpression;
  }
  enterRule(listener) {
    if (listener.enterLogicalAndExpression) {
      listener.enterLogicalAndExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLogicalAndExpression) {
      listener.exitLogicalAndExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLogicalAndExpression) {
      return visitor.visitLogicalAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogicalOrExpressionContext extends ParserRuleContext {
  logicalAndExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(LogicalAndExpressionContext);
    } else {
      return this.getRuleContext(i, LogicalAndExpressionContext);
    }
  }
  OrOr(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.OrOr);
    } else {
      return this.getToken(CPP14Parser.OrOr, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_logicalOrExpression;
  }
  enterRule(listener) {
    if (listener.enterLogicalOrExpression) {
      listener.enterLogicalOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLogicalOrExpression) {
      listener.exitLogicalOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLogicalOrExpression) {
      return visitor.visitLogicalOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConditionalExpressionContext extends ParserRuleContext {
  logicalOrExpression() {
    return this.getRuleContext(0, LogicalOrExpressionContext);
  }
  Question() {
    return this.tryGetToken(CPP14Parser.Question, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  Colon() {
    return this.tryGetToken(CPP14Parser.Colon, 0);
  }
  assignmentExpression() {
    return this.tryGetRuleContext(0, AssignmentExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_conditionalExpression;
  }
  enterRule(listener) {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AssignmentExpressionContext extends ParserRuleContext {
  conditionalExpression() {
    return this.tryGetRuleContext(0, ConditionalExpressionContext);
  }
  logicalOrExpression() {
    return this.tryGetRuleContext(0, LogicalOrExpressionContext);
  }
  assignmentOperator() {
    return this.tryGetRuleContext(0, AssignmentOperatorContext);
  }
  initializerClause() {
    return this.tryGetRuleContext(0, InitializerClauseContext);
  }
  throwExpression() {
    return this.tryGetRuleContext(0, ThrowExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_assignmentExpression;
  }
  enterRule(listener) {
    if (listener.enterAssignmentExpression) {
      listener.enterAssignmentExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAssignmentExpression) {
      listener.exitAssignmentExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAssignmentExpression) {
      return visitor.visitAssignmentExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AssignmentOperatorContext extends ParserRuleContext {
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  StarAssign() {
    return this.tryGetToken(CPP14Parser.StarAssign, 0);
  }
  DivAssign() {
    return this.tryGetToken(CPP14Parser.DivAssign, 0);
  }
  ModAssign() {
    return this.tryGetToken(CPP14Parser.ModAssign, 0);
  }
  PlusAssign() {
    return this.tryGetToken(CPP14Parser.PlusAssign, 0);
  }
  MinusAssign() {
    return this.tryGetToken(CPP14Parser.MinusAssign, 0);
  }
  RightShiftAssign() {
    return this.tryGetToken(CPP14Parser.RightShiftAssign, 0);
  }
  LeftShiftAssign() {
    return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0);
  }
  AndAssign() {
    return this.tryGetToken(CPP14Parser.AndAssign, 0);
  }
  XorAssign() {
    return this.tryGetToken(CPP14Parser.XorAssign, 0);
  }
  OrAssign() {
    return this.tryGetToken(CPP14Parser.OrAssign, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_assignmentOperator;
  }
  enterRule(listener) {
    if (listener.enterAssignmentOperator) {
      listener.enterAssignmentOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAssignmentOperator) {
      listener.exitAssignmentOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAssignmentOperator) {
      return visitor.visitAssignmentOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExpressionContext extends ParserRuleContext {
  assignmentExpression(i) {
    if (i === void 0) {
      return this.getRuleContexts(AssignmentExpressionContext);
    } else {
      return this.getRuleContext(i, AssignmentExpressionContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_expression;
  }
  enterRule(listener) {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConstantExpressionContext extends ParserRuleContext {
  conditionalExpression() {
    return this.getRuleContext(0, ConditionalExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_constantExpression;
  }
  enterRule(listener) {
    if (listener.enterConstantExpression) {
      listener.enterConstantExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConstantExpression) {
      listener.exitConstantExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConstantExpression) {
      return visitor.visitConstantExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class StatementContext extends ParserRuleContext {
  labeledStatement() {
    return this.tryGetRuleContext(0, LabeledStatementContext);
  }
  expressionStatement() {
    return this.tryGetRuleContext(0, ExpressionStatementContext);
  }
  compoundStatement() {
    return this.tryGetRuleContext(0, CompoundStatementContext);
  }
  selectionStatement() {
    return this.tryGetRuleContext(0, SelectionStatementContext);
  }
  iterationStatement() {
    return this.tryGetRuleContext(0, IterationStatementContext);
  }
  jumpStatement() {
    return this.tryGetRuleContext(0, JumpStatementContext);
  }
  tryBlock() {
    return this.tryGetRuleContext(0, TryBlockContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  declarationStatement() {
    return this.tryGetRuleContext(0, DeclarationStatementContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_statement;
  }
  enterRule(listener) {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LabeledStatementContext extends ParserRuleContext {
  Colon() {
    return this.getToken(CPP14Parser.Colon, 0);
  }
  statement() {
    return this.getRuleContext(0, StatementContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  Case() {
    return this.tryGetToken(CPP14Parser.Case, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  Default() {
    return this.tryGetToken(CPP14Parser.Default, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_labeledStatement;
  }
  enterRule(listener) {
    if (listener.enterLabeledStatement) {
      listener.enterLabeledStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLabeledStatement) {
      listener.exitLabeledStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLabeledStatement) {
      return visitor.visitLabeledStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExpressionStatementContext extends ParserRuleContext {
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_expressionStatement;
  }
  enterRule(listener) {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CompoundStatementContext extends ParserRuleContext {
  LeftBrace() {
    return this.getToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.getToken(CPP14Parser.RightBrace, 0);
  }
  statementSeq() {
    return this.tryGetRuleContext(0, StatementSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_compoundStatement;
  }
  enterRule(listener) {
    if (listener.enterCompoundStatement) {
      listener.enterCompoundStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCompoundStatement) {
      listener.exitCompoundStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCompoundStatement) {
      return visitor.visitCompoundStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class StatementSeqContext extends ParserRuleContext {
  statement(i) {
    if (i === void 0) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_statementSeq;
  }
  enterRule(listener) {
    if (listener.enterStatementSeq) {
      listener.enterStatementSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStatementSeq) {
      listener.exitStatementSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStatementSeq) {
      return visitor.visitStatementSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SelectionStatementContext extends ParserRuleContext {
  If() {
    return this.tryGetToken(CPP14Parser.If, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  condition() {
    return this.getRuleContext(0, ConditionContext);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  statement(i) {
    if (i === void 0) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  Else() {
    return this.tryGetToken(CPP14Parser.Else, 0);
  }
  Switch() {
    return this.tryGetToken(CPP14Parser.Switch, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_selectionStatement;
  }
  enterRule(listener) {
    if (listener.enterSelectionStatement) {
      listener.enterSelectionStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSelectionStatement) {
      listener.exitSelectionStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSelectionStatement) {
      return visitor.visitSelectionStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConditionContext extends ParserRuleContext {
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  declSpecifierSeq() {
    return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
  }
  declarator() {
    return this.tryGetRuleContext(0, DeclaratorContext);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  initializerClause() {
    return this.tryGetRuleContext(0, InitializerClauseContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_condition;
  }
  enterRule(listener) {
    if (listener.enterCondition) {
      listener.enterCondition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCondition) {
      listener.exitCondition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCondition) {
      return visitor.visitCondition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IterationStatementContext extends ParserRuleContext {
  While() {
    return this.tryGetToken(CPP14Parser.While, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  condition() {
    return this.tryGetRuleContext(0, ConditionContext);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  statement() {
    return this.getRuleContext(0, StatementContext);
  }
  Do() {
    return this.tryGetToken(CPP14Parser.Do, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  Semi() {
    return this.tryGetToken(CPP14Parser.Semi, 0);
  }
  For() {
    return this.tryGetToken(CPP14Parser.For, 0);
  }
  forInitStatement() {
    return this.tryGetRuleContext(0, ForInitStatementContext);
  }
  forRangeDeclaration() {
    return this.tryGetRuleContext(0, ForRangeDeclarationContext);
  }
  Colon() {
    return this.tryGetToken(CPP14Parser.Colon, 0);
  }
  forRangeInitializer() {
    return this.tryGetRuleContext(0, ForRangeInitializerContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_iterationStatement;
  }
  enterRule(listener) {
    if (listener.enterIterationStatement) {
      listener.enterIterationStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIterationStatement) {
      listener.exitIterationStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitIterationStatement) {
      return visitor.visitIterationStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ForInitStatementContext extends ParserRuleContext {
  expressionStatement() {
    return this.tryGetRuleContext(0, ExpressionStatementContext);
  }
  simpleDeclaration() {
    return this.tryGetRuleContext(0, SimpleDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_forInitStatement;
  }
  enterRule(listener) {
    if (listener.enterForInitStatement) {
      listener.enterForInitStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitForInitStatement) {
      listener.exitForInitStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitForInitStatement) {
      return visitor.visitForInitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ForRangeDeclarationContext extends ParserRuleContext {
  declSpecifierSeq() {
    return this.getRuleContext(0, DeclSpecifierSeqContext);
  }
  declarator() {
    return this.getRuleContext(0, DeclaratorContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_forRangeDeclaration;
  }
  enterRule(listener) {
    if (listener.enterForRangeDeclaration) {
      listener.enterForRangeDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitForRangeDeclaration) {
      listener.exitForRangeDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitForRangeDeclaration) {
      return visitor.visitForRangeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ForRangeInitializerContext extends ParserRuleContext {
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_forRangeInitializer;
  }
  enterRule(listener) {
    if (listener.enterForRangeInitializer) {
      listener.enterForRangeInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitForRangeInitializer) {
      listener.exitForRangeInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitForRangeInitializer) {
      return visitor.visitForRangeInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class JumpStatementContext extends ParserRuleContext {
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  Break() {
    return this.tryGetToken(CPP14Parser.Break, 0);
  }
  Continue() {
    return this.tryGetToken(CPP14Parser.Continue, 0);
  }
  Return() {
    return this.tryGetToken(CPP14Parser.Return, 0);
  }
  Goto() {
    return this.tryGetToken(CPP14Parser.Goto, 0);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_jumpStatement;
  }
  enterRule(listener) {
    if (listener.enterJumpStatement) {
      listener.enterJumpStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitJumpStatement) {
      listener.exitJumpStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitJumpStatement) {
      return visitor.visitJumpStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclarationStatementContext extends ParserRuleContext {
  blockDeclaration() {
    return this.getRuleContext(0, BlockDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declarationStatement;
  }
  enterRule(listener) {
    if (listener.enterDeclarationStatement) {
      listener.enterDeclarationStatement(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclarationStatement) {
      listener.exitDeclarationStatement(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclarationStatement) {
      return visitor.visitDeclarationStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclarationseqContext extends ParserRuleContext {
  declaration(i) {
    if (i === void 0) {
      return this.getRuleContexts(DeclarationContext);
    } else {
      return this.getRuleContext(i, DeclarationContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declarationseq;
  }
  enterRule(listener) {
    if (listener.enterDeclarationseq) {
      listener.enterDeclarationseq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclarationseq) {
      listener.exitDeclarationseq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclarationseq) {
      return visitor.visitDeclarationseq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclarationContext extends ParserRuleContext {
  blockDeclaration() {
    return this.tryGetRuleContext(0, BlockDeclarationContext);
  }
  functionDefinition() {
    return this.tryGetRuleContext(0, FunctionDefinitionContext);
  }
  templateDeclaration() {
    return this.tryGetRuleContext(0, TemplateDeclarationContext);
  }
  explicitInstantiation() {
    return this.tryGetRuleContext(0, ExplicitInstantiationContext);
  }
  explicitSpecialization() {
    return this.tryGetRuleContext(0, ExplicitSpecializationContext);
  }
  linkageSpecification() {
    return this.tryGetRuleContext(0, LinkageSpecificationContext);
  }
  namespaceDefinition() {
    return this.tryGetRuleContext(0, NamespaceDefinitionContext);
  }
  emptyDeclaration() {
    return this.tryGetRuleContext(0, EmptyDeclarationContext);
  }
  attributeDeclaration() {
    return this.tryGetRuleContext(0, AttributeDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declaration;
  }
  enterRule(listener) {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BlockDeclarationContext extends ParserRuleContext {
  simpleDeclaration() {
    return this.tryGetRuleContext(0, SimpleDeclarationContext);
  }
  asmDefinition() {
    return this.tryGetRuleContext(0, AsmDefinitionContext);
  }
  namespaceAliasDefinition() {
    return this.tryGetRuleContext(0, NamespaceAliasDefinitionContext);
  }
  usingDeclaration() {
    return this.tryGetRuleContext(0, UsingDeclarationContext);
  }
  usingDirective() {
    return this.tryGetRuleContext(0, UsingDirectiveContext);
  }
  staticAssertDeclaration() {
    return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
  }
  aliasDeclaration() {
    return this.tryGetRuleContext(0, AliasDeclarationContext);
  }
  opaqueEnumDeclaration() {
    return this.tryGetRuleContext(0, OpaqueEnumDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_blockDeclaration;
  }
  enterRule(listener) {
    if (listener.enterBlockDeclaration) {
      listener.enterBlockDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBlockDeclaration) {
      listener.exitBlockDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBlockDeclaration) {
      return visitor.visitBlockDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AliasDeclarationContext extends ParserRuleContext {
  Using() {
    return this.getToken(CPP14Parser.Using, 0);
  }
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  Assign() {
    return this.getToken(CPP14Parser.Assign, 0);
  }
  theTypeId() {
    return this.getRuleContext(0, TheTypeIdContext);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_aliasDeclaration;
  }
  enterRule(listener) {
    if (listener.enterAliasDeclaration) {
      listener.enterAliasDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAliasDeclaration) {
      listener.exitAliasDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAliasDeclaration) {
      return visitor.visitAliasDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleDeclarationContext extends ParserRuleContext {
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  declSpecifierSeq() {
    return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
  }
  initDeclaratorList() {
    return this.tryGetRuleContext(0, InitDeclaratorListContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleDeclaration;
  }
  enterRule(listener) {
    if (listener.enterSimpleDeclaration) {
      listener.enterSimpleDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleDeclaration) {
      listener.exitSimpleDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleDeclaration) {
      return visitor.visitSimpleDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class StaticAssertDeclarationContext extends ParserRuleContext {
  Static_assert() {
    return this.getToken(CPP14Parser.Static_assert, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  constantExpression() {
    return this.getRuleContext(0, ConstantExpressionContext);
  }
  Comma() {
    return this.getToken(CPP14Parser.Comma, 0);
  }
  StringLiteral() {
    return this.getToken(CPP14Parser.StringLiteral, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_staticAssertDeclaration;
  }
  enterRule(listener) {
    if (listener.enterStaticAssertDeclaration) {
      listener.enterStaticAssertDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStaticAssertDeclaration) {
      listener.exitStaticAssertDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStaticAssertDeclaration) {
      return visitor.visitStaticAssertDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EmptyDeclarationContext extends ParserRuleContext {
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_emptyDeclaration;
  }
  enterRule(listener) {
    if (listener.enterEmptyDeclaration) {
      listener.enterEmptyDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEmptyDeclaration) {
      listener.exitEmptyDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEmptyDeclaration) {
      return visitor.visitEmptyDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeDeclarationContext extends ParserRuleContext {
  attributeSpecifierSeq() {
    return this.getRuleContext(0, AttributeSpecifierSeqContext);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeDeclaration;
  }
  enterRule(listener) {
    if (listener.enterAttributeDeclaration) {
      listener.enterAttributeDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeDeclaration) {
      listener.exitAttributeDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeDeclaration) {
      return visitor.visitAttributeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclSpecifierContext extends ParserRuleContext {
  storageClassSpecifier() {
    return this.tryGetRuleContext(0, StorageClassSpecifierContext);
  }
  typeSpecifier() {
    return this.tryGetRuleContext(0, TypeSpecifierContext);
  }
  functionSpecifier() {
    return this.tryGetRuleContext(0, FunctionSpecifierContext);
  }
  Friend() {
    return this.tryGetToken(CPP14Parser.Friend, 0);
  }
  Typedef() {
    return this.tryGetToken(CPP14Parser.Typedef, 0);
  }
  Constexpr() {
    return this.tryGetToken(CPP14Parser.Constexpr, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declSpecifier;
  }
  enterRule(listener) {
    if (listener.enterDeclSpecifier) {
      listener.enterDeclSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclSpecifier) {
      listener.exitDeclSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclSpecifier) {
      return visitor.visitDeclSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclSpecifierSeqContext extends ParserRuleContext {
  declSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(DeclSpecifierContext);
    } else {
      return this.getRuleContext(i, DeclSpecifierContext);
    }
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declSpecifierSeq;
  }
  enterRule(listener) {
    if (listener.enterDeclSpecifierSeq) {
      listener.enterDeclSpecifierSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclSpecifierSeq) {
      listener.exitDeclSpecifierSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclSpecifierSeq) {
      return visitor.visitDeclSpecifierSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class StorageClassSpecifierContext extends ParserRuleContext {
  Register() {
    return this.tryGetToken(CPP14Parser.Register, 0);
  }
  Static() {
    return this.tryGetToken(CPP14Parser.Static, 0);
  }
  Thread_local() {
    return this.tryGetToken(CPP14Parser.Thread_local, 0);
  }
  Extern() {
    return this.tryGetToken(CPP14Parser.Extern, 0);
  }
  Mutable() {
    return this.tryGetToken(CPP14Parser.Mutable, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_storageClassSpecifier;
  }
  enterRule(listener) {
    if (listener.enterStorageClassSpecifier) {
      listener.enterStorageClassSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitStorageClassSpecifier) {
      listener.exitStorageClassSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitStorageClassSpecifier) {
      return visitor.visitStorageClassSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionSpecifierContext extends ParserRuleContext {
  Inline() {
    return this.tryGetToken(CPP14Parser.Inline, 0);
  }
  Virtual() {
    return this.tryGetToken(CPP14Parser.Virtual, 0);
  }
  Explicit() {
    return this.tryGetToken(CPP14Parser.Explicit, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_functionSpecifier;
  }
  enterRule(listener) {
    if (listener.enterFunctionSpecifier) {
      listener.enterFunctionSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFunctionSpecifier) {
      listener.exitFunctionSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitFunctionSpecifier) {
      return visitor.visitFunctionSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypedefNameContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typedefName;
  }
  enterRule(listener) {
    if (listener.enterTypedefName) {
      listener.enterTypedefName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypedefName) {
      listener.exitTypedefName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypedefName) {
      return visitor.visitTypedefName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeSpecifierContext extends ParserRuleContext {
  trailingTypeSpecifier() {
    return this.tryGetRuleContext(0, TrailingTypeSpecifierContext);
  }
  classSpecifier() {
    return this.tryGetRuleContext(0, ClassSpecifierContext);
  }
  enumSpecifier() {
    return this.tryGetRuleContext(0, EnumSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterTypeSpecifier) {
      listener.enterTypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeSpecifier) {
      listener.exitTypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeSpecifier) {
      return visitor.visitTypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TrailingTypeSpecifierContext extends ParserRuleContext {
  simpleTypeSpecifier() {
    return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
  }
  elaboratedTypeSpecifier() {
    return this.tryGetRuleContext(0, ElaboratedTypeSpecifierContext);
  }
  typeNameSpecifier() {
    return this.tryGetRuleContext(0, TypeNameSpecifierContext);
  }
  cvQualifier() {
    return this.tryGetRuleContext(0, CvQualifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_trailingTypeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterTrailingTypeSpecifier) {
      listener.enterTrailingTypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTrailingTypeSpecifier) {
      listener.exitTrailingTypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTrailingTypeSpecifier) {
      return visitor.visitTrailingTypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeSpecifierSeqContext extends ParserRuleContext {
  typeSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(TypeSpecifierContext);
    } else {
      return this.getRuleContext(i, TypeSpecifierContext);
    }
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeSpecifierSeq;
  }
  enterRule(listener) {
    if (listener.enterTypeSpecifierSeq) {
      listener.enterTypeSpecifierSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeSpecifierSeq) {
      listener.exitTypeSpecifierSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeSpecifierSeq) {
      return visitor.visitTypeSpecifierSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TrailingTypeSpecifierSeqContext extends ParserRuleContext {
  trailingTypeSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(TrailingTypeSpecifierContext);
    } else {
      return this.getRuleContext(i, TrailingTypeSpecifierContext);
    }
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_trailingTypeSpecifierSeq;
  }
  enterRule(listener) {
    if (listener.enterTrailingTypeSpecifierSeq) {
      listener.enterTrailingTypeSpecifierSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTrailingTypeSpecifierSeq) {
      listener.exitTrailingTypeSpecifierSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTrailingTypeSpecifierSeq) {
      return visitor.visitTrailingTypeSpecifierSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleTypeLengthModifierContext extends ParserRuleContext {
  Short() {
    return this.tryGetToken(CPP14Parser.Short, 0);
  }
  Long() {
    return this.tryGetToken(CPP14Parser.Long, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleTypeLengthModifier;
  }
  enterRule(listener) {
    if (listener.enterSimpleTypeLengthModifier) {
      listener.enterSimpleTypeLengthModifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleTypeLengthModifier) {
      listener.exitSimpleTypeLengthModifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleTypeLengthModifier) {
      return visitor.visitSimpleTypeLengthModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleTypeSignednessModifierContext extends ParserRuleContext {
  Unsigned() {
    return this.tryGetToken(CPP14Parser.Unsigned, 0);
  }
  Signed() {
    return this.tryGetToken(CPP14Parser.Signed, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleTypeSignednessModifier;
  }
  enterRule(listener) {
    if (listener.enterSimpleTypeSignednessModifier) {
      listener.enterSimpleTypeSignednessModifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleTypeSignednessModifier) {
      listener.exitSimpleTypeSignednessModifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleTypeSignednessModifier) {
      return visitor.visitSimpleTypeSignednessModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleTypeSpecifierContext extends ParserRuleContext {
  theTypeName() {
    return this.tryGetRuleContext(0, TheTypeNameContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  simpleTypeSignednessModifier() {
    return this.tryGetRuleContext(0, SimpleTypeSignednessModifierContext);
  }
  simpleTypeLengthModifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(SimpleTypeLengthModifierContext);
    } else {
      return this.getRuleContext(i, SimpleTypeLengthModifierContext);
    }
  }
  Char() {
    return this.tryGetToken(CPP14Parser.Char, 0);
  }
  Char16() {
    return this.tryGetToken(CPP14Parser.Char16, 0);
  }
  Char32() {
    return this.tryGetToken(CPP14Parser.Char32, 0);
  }
  Wchar() {
    return this.tryGetToken(CPP14Parser.Wchar, 0);
  }
  Bool() {
    return this.tryGetToken(CPP14Parser.Bool, 0);
  }
  Int() {
    return this.tryGetToken(CPP14Parser.Int, 0);
  }
  Float() {
    return this.tryGetToken(CPP14Parser.Float, 0);
  }
  Double() {
    return this.tryGetToken(CPP14Parser.Double, 0);
  }
  Void() {
    return this.tryGetToken(CPP14Parser.Void, 0);
  }
  Auto() {
    return this.tryGetToken(CPP14Parser.Auto, 0);
  }
  decltypeSpecifier() {
    return this.tryGetRuleContext(0, DecltypeSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleTypeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterSimpleTypeSpecifier) {
      listener.enterSimpleTypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleTypeSpecifier) {
      listener.exitSimpleTypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleTypeSpecifier) {
      return visitor.visitSimpleTypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TheTypeNameContext extends ParserRuleContext {
  className() {
    return this.tryGetRuleContext(0, ClassNameContext);
  }
  enumName() {
    return this.tryGetRuleContext(0, EnumNameContext);
  }
  typedefName() {
    return this.tryGetRuleContext(0, TypedefNameContext);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_theTypeName;
  }
  enterRule(listener) {
    if (listener.enterTheTypeName) {
      listener.enterTheTypeName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTheTypeName) {
      listener.exitTheTypeName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTheTypeName) {
      return visitor.visitTheTypeName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DecltypeSpecifierContext extends ParserRuleContext {
  Decltype() {
    return this.getToken(CPP14Parser.Decltype, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  expression() {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  Auto() {
    return this.tryGetToken(CPP14Parser.Auto, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_decltypeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterDecltypeSpecifier) {
      listener.enterDecltypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDecltypeSpecifier) {
      listener.exitDecltypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDecltypeSpecifier) {
      return visitor.visitDecltypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ElaboratedTypeSpecifierContext extends ParserRuleContext {
  classKey() {
    return this.tryGetRuleContext(0, ClassKeyContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  Enum() {
    return this.tryGetToken(CPP14Parser.Enum, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_elaboratedTypeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterElaboratedTypeSpecifier) {
      listener.enterElaboratedTypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitElaboratedTypeSpecifier) {
      listener.exitElaboratedTypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitElaboratedTypeSpecifier) {
      return visitor.visitElaboratedTypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumNameContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumName;
  }
  enterRule(listener) {
    if (listener.enterEnumName) {
      listener.enterEnumName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumName) {
      listener.exitEnumName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumName) {
      return visitor.visitEnumName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumSpecifierContext extends ParserRuleContext {
  enumHead() {
    return this.getRuleContext(0, EnumHeadContext);
  }
  LeftBrace() {
    return this.getToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.getToken(CPP14Parser.RightBrace, 0);
  }
  enumeratorList() {
    return this.tryGetRuleContext(0, EnumeratorListContext);
  }
  Comma() {
    return this.tryGetToken(CPP14Parser.Comma, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumSpecifier;
  }
  enterRule(listener) {
    if (listener.enterEnumSpecifier) {
      listener.enterEnumSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumSpecifier) {
      listener.exitEnumSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumSpecifier) {
      return visitor.visitEnumSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumHeadContext extends ParserRuleContext {
  enumkey() {
    return this.getRuleContext(0, EnumkeyContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  enumbase() {
    return this.tryGetRuleContext(0, EnumbaseContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumHead;
  }
  enterRule(listener) {
    if (listener.enterEnumHead) {
      listener.enterEnumHead(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumHead) {
      listener.exitEnumHead(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumHead) {
      return visitor.visitEnumHead(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class OpaqueEnumDeclarationContext extends ParserRuleContext {
  enumkey() {
    return this.getRuleContext(0, EnumkeyContext);
  }
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  enumbase() {
    return this.tryGetRuleContext(0, EnumbaseContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_opaqueEnumDeclaration;
  }
  enterRule(listener) {
    if (listener.enterOpaqueEnumDeclaration) {
      listener.enterOpaqueEnumDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOpaqueEnumDeclaration) {
      listener.exitOpaqueEnumDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOpaqueEnumDeclaration) {
      return visitor.visitOpaqueEnumDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumkeyContext extends ParserRuleContext {
  Enum() {
    return this.getToken(CPP14Parser.Enum, 0);
  }
  Class() {
    return this.tryGetToken(CPP14Parser.Class, 0);
  }
  Struct() {
    return this.tryGetToken(CPP14Parser.Struct, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumkey;
  }
  enterRule(listener) {
    if (listener.enterEnumkey) {
      listener.enterEnumkey(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumkey) {
      listener.exitEnumkey(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumkey) {
      return visitor.visitEnumkey(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumbaseContext extends ParserRuleContext {
  Colon() {
    return this.getToken(CPP14Parser.Colon, 0);
  }
  typeSpecifierSeq() {
    return this.getRuleContext(0, TypeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumbase;
  }
  enterRule(listener) {
    if (listener.enterEnumbase) {
      listener.enterEnumbase(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumbase) {
      listener.exitEnumbase(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumbase) {
      return visitor.visitEnumbase(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumeratorListContext extends ParserRuleContext {
  enumeratorDefinition(i) {
    if (i === void 0) {
      return this.getRuleContexts(EnumeratorDefinitionContext);
    } else {
      return this.getRuleContext(i, EnumeratorDefinitionContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumeratorList;
  }
  enterRule(listener) {
    if (listener.enterEnumeratorList) {
      listener.enterEnumeratorList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumeratorList) {
      listener.exitEnumeratorList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumeratorList) {
      return visitor.visitEnumeratorList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumeratorDefinitionContext extends ParserRuleContext {
  enumerator() {
    return this.getRuleContext(0, EnumeratorContext);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumeratorDefinition;
  }
  enterRule(listener) {
    if (listener.enterEnumeratorDefinition) {
      listener.enterEnumeratorDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumeratorDefinition) {
      listener.exitEnumeratorDefinition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumeratorDefinition) {
      return visitor.visitEnumeratorDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EnumeratorContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_enumerator;
  }
  enterRule(listener) {
    if (listener.enterEnumerator) {
      listener.enterEnumerator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumerator) {
      listener.exitEnumerator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitEnumerator) {
      return visitor.visitEnumerator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NamespaceNameContext extends ParserRuleContext {
  originalNamespaceName() {
    return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
  }
  namespaceAlias() {
    return this.tryGetRuleContext(0, NamespaceAliasContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_namespaceName;
  }
  enterRule(listener) {
    if (listener.enterNamespaceName) {
      listener.enterNamespaceName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamespaceName) {
      listener.exitNamespaceName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamespaceName) {
      return visitor.visitNamespaceName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class OriginalNamespaceNameContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_originalNamespaceName;
  }
  enterRule(listener) {
    if (listener.enterOriginalNamespaceName) {
      listener.enterOriginalNamespaceName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOriginalNamespaceName) {
      listener.exitOriginalNamespaceName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOriginalNamespaceName) {
      return visitor.visitOriginalNamespaceName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NamespaceDefinitionContext extends ParserRuleContext {
  Namespace() {
    return this.getToken(CPP14Parser.Namespace, 0);
  }
  LeftBrace() {
    return this.getToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.getToken(CPP14Parser.RightBrace, 0);
  }
  Inline() {
    return this.tryGetToken(CPP14Parser.Inline, 0);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  originalNamespaceName() {
    return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
  }
  declarationseq() {
    return this.tryGetRuleContext(0, DeclarationseqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_namespaceDefinition;
  }
  enterRule(listener) {
    if (listener.enterNamespaceDefinition) {
      listener.enterNamespaceDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamespaceDefinition) {
      listener.exitNamespaceDefinition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamespaceDefinition) {
      return visitor.visitNamespaceDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NamespaceAliasContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_namespaceAlias;
  }
  enterRule(listener) {
    if (listener.enterNamespaceAlias) {
      listener.enterNamespaceAlias(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamespaceAlias) {
      listener.exitNamespaceAlias(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamespaceAlias) {
      return visitor.visitNamespaceAlias(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NamespaceAliasDefinitionContext extends ParserRuleContext {
  Namespace() {
    return this.getToken(CPP14Parser.Namespace, 0);
  }
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  Assign() {
    return this.getToken(CPP14Parser.Assign, 0);
  }
  qualifiednamespacespecifier() {
    return this.getRuleContext(0, QualifiednamespacespecifierContext);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_namespaceAliasDefinition;
  }
  enterRule(listener) {
    if (listener.enterNamespaceAliasDefinition) {
      listener.enterNamespaceAliasDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamespaceAliasDefinition) {
      listener.exitNamespaceAliasDefinition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNamespaceAliasDefinition) {
      return visitor.visitNamespaceAliasDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class QualifiednamespacespecifierContext extends ParserRuleContext {
  namespaceName() {
    return this.getRuleContext(0, NamespaceNameContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_qualifiednamespacespecifier;
  }
  enterRule(listener) {
    if (listener.enterQualifiednamespacespecifier) {
      listener.enterQualifiednamespacespecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitQualifiednamespacespecifier) {
      listener.exitQualifiednamespacespecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitQualifiednamespacespecifier) {
      return visitor.visitQualifiednamespacespecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UsingDeclarationContext extends ParserRuleContext {
  Using() {
    return this.getToken(CPP14Parser.Using, 0);
  }
  unqualifiedId() {
    return this.getRuleContext(0, UnqualifiedIdContext);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  Doublecolon() {
    return this.tryGetToken(CPP14Parser.Doublecolon, 0);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  Typename_() {
    return this.tryGetToken(CPP14Parser.Typename_, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_usingDeclaration;
  }
  enterRule(listener) {
    if (listener.enterUsingDeclaration) {
      listener.enterUsingDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUsingDeclaration) {
      listener.exitUsingDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUsingDeclaration) {
      return visitor.visitUsingDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class UsingDirectiveContext extends ParserRuleContext {
  Using() {
    return this.getToken(CPP14Parser.Using, 0);
  }
  Namespace() {
    return this.getToken(CPP14Parser.Namespace, 0);
  }
  namespaceName() {
    return this.getRuleContext(0, NamespaceNameContext);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_usingDirective;
  }
  enterRule(listener) {
    if (listener.enterUsingDirective) {
      listener.enterUsingDirective(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUsingDirective) {
      listener.exitUsingDirective(this);
    }
  }
  accept(visitor) {
    if (visitor.visitUsingDirective) {
      return visitor.visitUsingDirective(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AsmDefinitionContext extends ParserRuleContext {
  Asm() {
    return this.getToken(CPP14Parser.Asm, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  StringLiteral() {
    return this.getToken(CPP14Parser.StringLiteral, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  Semi() {
    return this.getToken(CPP14Parser.Semi, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_asmDefinition;
  }
  enterRule(listener) {
    if (listener.enterAsmDefinition) {
      listener.enterAsmDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAsmDefinition) {
      listener.exitAsmDefinition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAsmDefinition) {
      return visitor.visitAsmDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LinkageSpecificationContext extends ParserRuleContext {
  Extern() {
    return this.getToken(CPP14Parser.Extern, 0);
  }
  StringLiteral() {
    return this.getToken(CPP14Parser.StringLiteral, 0);
  }
  LeftBrace() {
    return this.tryGetToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.tryGetToken(CPP14Parser.RightBrace, 0);
  }
  declaration() {
    return this.tryGetRuleContext(0, DeclarationContext);
  }
  declarationseq() {
    return this.tryGetRuleContext(0, DeclarationseqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_linkageSpecification;
  }
  enterRule(listener) {
    if (listener.enterLinkageSpecification) {
      listener.enterLinkageSpecification(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLinkageSpecification) {
      listener.exitLinkageSpecification(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLinkageSpecification) {
      return visitor.visitLinkageSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeSpecifierSeqContext extends ParserRuleContext {
  attributeSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(AttributeSpecifierContext);
    } else {
      return this.getRuleContext(i, AttributeSpecifierContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeSpecifierSeq;
  }
  enterRule(listener) {
    if (listener.enterAttributeSpecifierSeq) {
      listener.enterAttributeSpecifierSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeSpecifierSeq) {
      listener.exitAttributeSpecifierSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeSpecifierSeq) {
      return visitor.visitAttributeSpecifierSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeSpecifierContext extends ParserRuleContext {
  LeftBracket(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.LeftBracket);
    } else {
      return this.getToken(CPP14Parser.LeftBracket, i);
    }
  }
  RightBracket(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.RightBracket);
    } else {
      return this.getToken(CPP14Parser.RightBracket, i);
    }
  }
  attributeList() {
    return this.tryGetRuleContext(0, AttributeListContext);
  }
  alignmentspecifier() {
    return this.tryGetRuleContext(0, AlignmentspecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterAttributeSpecifier) {
      listener.enterAttributeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeSpecifier) {
      listener.exitAttributeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeSpecifier) {
      return visitor.visitAttributeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AlignmentspecifierContext extends ParserRuleContext {
  Alignas() {
    return this.getToken(CPP14Parser.Alignas, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_alignmentspecifier;
  }
  enterRule(listener) {
    if (listener.enterAlignmentspecifier) {
      listener.enterAlignmentspecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAlignmentspecifier) {
      listener.exitAlignmentspecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAlignmentspecifier) {
      return visitor.visitAlignmentspecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeListContext extends ParserRuleContext {
  attribute(i) {
    if (i === void 0) {
      return this.getRuleContexts(AttributeContext);
    } else {
      return this.getRuleContext(i, AttributeContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeList;
  }
  enterRule(listener) {
    if (listener.enterAttributeList) {
      listener.enterAttributeList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeList) {
      listener.exitAttributeList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeList) {
      return visitor.visitAttributeList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  attributeNamespace() {
    return this.tryGetRuleContext(0, AttributeNamespaceContext);
  }
  Doublecolon() {
    return this.tryGetToken(CPP14Parser.Doublecolon, 0);
  }
  attributeArgumentClause() {
    return this.tryGetRuleContext(0, AttributeArgumentClauseContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attribute;
  }
  enterRule(listener) {
    if (listener.enterAttribute) {
      listener.enterAttribute(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttribute) {
      listener.exitAttribute(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttribute) {
      return visitor.visitAttribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeNamespaceContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeNamespace;
  }
  enterRule(listener) {
    if (listener.enterAttributeNamespace) {
      listener.enterAttributeNamespace(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeNamespace) {
      listener.exitAttributeNamespace(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeNamespace) {
      return visitor.visitAttributeNamespace(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AttributeArgumentClauseContext extends ParserRuleContext {
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  balancedTokenSeq() {
    return this.tryGetRuleContext(0, BalancedTokenSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_attributeArgumentClause;
  }
  enterRule(listener) {
    if (listener.enterAttributeArgumentClause) {
      listener.enterAttributeArgumentClause(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAttributeArgumentClause) {
      listener.exitAttributeArgumentClause(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAttributeArgumentClause) {
      return visitor.visitAttributeArgumentClause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BalancedTokenSeqContext extends ParserRuleContext {
  balancedtoken(i) {
    if (i === void 0) {
      return this.getRuleContexts(BalancedtokenContext);
    } else {
      return this.getRuleContext(i, BalancedtokenContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_balancedTokenSeq;
  }
  enterRule(listener) {
    if (listener.enterBalancedTokenSeq) {
      listener.enterBalancedTokenSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBalancedTokenSeq) {
      listener.exitBalancedTokenSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBalancedTokenSeq) {
      return visitor.visitBalancedTokenSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BalancedtokenContext extends ParserRuleContext {
  LeftParen(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.LeftParen);
    } else {
      return this.getToken(CPP14Parser.LeftParen, i);
    }
  }
  balancedTokenSeq() {
    return this.tryGetRuleContext(0, BalancedTokenSeqContext);
  }
  RightParen(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.RightParen);
    } else {
      return this.getToken(CPP14Parser.RightParen, i);
    }
  }
  LeftBracket(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.LeftBracket);
    } else {
      return this.getToken(CPP14Parser.LeftBracket, i);
    }
  }
  RightBracket(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.RightBracket);
    } else {
      return this.getToken(CPP14Parser.RightBracket, i);
    }
  }
  LeftBrace(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.LeftBrace);
    } else {
      return this.getToken(CPP14Parser.LeftBrace, i);
    }
  }
  RightBrace(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.RightBrace);
    } else {
      return this.getToken(CPP14Parser.RightBrace, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_balancedtoken;
  }
  enterRule(listener) {
    if (listener.enterBalancedtoken) {
      listener.enterBalancedtoken(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBalancedtoken) {
      listener.exitBalancedtoken(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBalancedtoken) {
      return visitor.visitBalancedtoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitDeclaratorListContext extends ParserRuleContext {
  initDeclarator(i) {
    if (i === void 0) {
      return this.getRuleContexts(InitDeclaratorContext);
    } else {
      return this.getRuleContext(i, InitDeclaratorContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initDeclaratorList;
  }
  enterRule(listener) {
    if (listener.enterInitDeclaratorList) {
      listener.enterInitDeclaratorList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitDeclaratorList) {
      listener.exitInitDeclaratorList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitDeclaratorList) {
      return visitor.visitInitDeclaratorList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitDeclaratorContext extends ParserRuleContext {
  declarator() {
    return this.getRuleContext(0, DeclaratorContext);
  }
  initializer() {
    return this.tryGetRuleContext(0, InitializerContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initDeclarator;
  }
  enterRule(listener) {
    if (listener.enterInitDeclarator) {
      listener.enterInitDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitDeclarator) {
      listener.exitInitDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitDeclarator) {
      return visitor.visitInitDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclaratorContext extends ParserRuleContext {
  pointerDeclarator() {
    return this.tryGetRuleContext(0, PointerDeclaratorContext);
  }
  noPointerDeclarator() {
    return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
  }
  parametersAndQualifiers() {
    return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
  }
  trailingReturnType() {
    return this.tryGetRuleContext(0, TrailingReturnTypeContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declarator;
  }
  enterRule(listener) {
    if (listener.enterDeclarator) {
      listener.enterDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclarator) {
      listener.exitDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclarator) {
      return visitor.visitDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PointerDeclaratorContext extends ParserRuleContext {
  noPointerDeclarator() {
    return this.getRuleContext(0, NoPointerDeclaratorContext);
  }
  pointerOperator(i) {
    if (i === void 0) {
      return this.getRuleContexts(PointerOperatorContext);
    } else {
      return this.getRuleContext(i, PointerOperatorContext);
    }
  }
  Const(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Const);
    } else {
      return this.getToken(CPP14Parser.Const, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pointerDeclarator;
  }
  enterRule(listener) {
    if (listener.enterPointerDeclarator) {
      listener.enterPointerDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPointerDeclarator) {
      listener.exitPointerDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPointerDeclarator) {
      return visitor.visitPointerDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoPointerDeclaratorContext extends ParserRuleContext {
  declaratorid() {
    return this.tryGetRuleContext(0, DeclaratoridContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  noPointerDeclarator() {
    return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
  }
  parametersAndQualifiers() {
    return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  pointerDeclarator() {
    return this.tryGetRuleContext(0, PointerDeclaratorContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noPointerDeclarator;
  }
  enterRule(listener) {
    if (listener.enterNoPointerDeclarator) {
      listener.enterNoPointerDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoPointerDeclarator) {
      listener.exitNoPointerDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoPointerDeclarator) {
      return visitor.visitNoPointerDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParametersAndQualifiersContext extends ParserRuleContext {
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  parameterDeclarationClause() {
    return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
  }
  cvqualifierseq() {
    return this.tryGetRuleContext(0, CvqualifierseqContext);
  }
  refqualifier() {
    return this.tryGetRuleContext(0, RefqualifierContext);
  }
  exceptionSpecification() {
    return this.tryGetRuleContext(0, ExceptionSpecificationContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_parametersAndQualifiers;
  }
  enterRule(listener) {
    if (listener.enterParametersAndQualifiers) {
      listener.enterParametersAndQualifiers(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParametersAndQualifiers) {
      listener.exitParametersAndQualifiers(this);
    }
  }
  accept(visitor) {
    if (visitor.visitParametersAndQualifiers) {
      return visitor.visitParametersAndQualifiers(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TrailingReturnTypeContext extends ParserRuleContext {
  Arrow() {
    return this.getToken(CPP14Parser.Arrow, 0);
  }
  trailingTypeSpecifierSeq() {
    return this.getRuleContext(0, TrailingTypeSpecifierSeqContext);
  }
  abstractDeclarator() {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_trailingReturnType;
  }
  enterRule(listener) {
    if (listener.enterTrailingReturnType) {
      listener.enterTrailingReturnType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTrailingReturnType) {
      listener.exitTrailingReturnType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTrailingReturnType) {
      return visitor.visitTrailingReturnType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PointerOperatorContext extends ParserRuleContext {
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  AndAnd() {
    return this.tryGetToken(CPP14Parser.AndAnd, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  Star() {
    return this.tryGetToken(CPP14Parser.Star, 0);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  cvqualifierseq() {
    return this.tryGetRuleContext(0, CvqualifierseqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pointerOperator;
  }
  enterRule(listener) {
    if (listener.enterPointerOperator) {
      listener.enterPointerOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPointerOperator) {
      listener.exitPointerOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPointerOperator) {
      return visitor.visitPointerOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CvqualifierseqContext extends ParserRuleContext {
  cvQualifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(CvQualifierContext);
    } else {
      return this.getRuleContext(i, CvQualifierContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_cvqualifierseq;
  }
  enterRule(listener) {
    if (listener.enterCvqualifierseq) {
      listener.enterCvqualifierseq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCvqualifierseq) {
      listener.exitCvqualifierseq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCvqualifierseq) {
      return visitor.visitCvqualifierseq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class CvQualifierContext extends ParserRuleContext {
  Const() {
    return this.tryGetToken(CPP14Parser.Const, 0);
  }
  Volatile() {
    return this.tryGetToken(CPP14Parser.Volatile, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_cvQualifier;
  }
  enterRule(listener) {
    if (listener.enterCvQualifier) {
      listener.enterCvQualifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitCvQualifier) {
      listener.exitCvQualifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitCvQualifier) {
      return visitor.visitCvQualifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class RefqualifierContext extends ParserRuleContext {
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  AndAnd() {
    return this.tryGetToken(CPP14Parser.AndAnd, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_refqualifier;
  }
  enterRule(listener) {
    if (listener.enterRefqualifier) {
      listener.enterRefqualifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRefqualifier) {
      listener.exitRefqualifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitRefqualifier) {
      return visitor.visitRefqualifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DeclaratoridContext extends ParserRuleContext {
  idExpression() {
    return this.getRuleContext(0, IdExpressionContext);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_declaratorid;
  }
  enterRule(listener) {
    if (listener.enterDeclaratorid) {
      listener.enterDeclaratorid(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeclaratorid) {
      listener.exitDeclaratorid(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDeclaratorid) {
      return visitor.visitDeclaratorid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TheTypeIdContext extends ParserRuleContext {
  typeSpecifierSeq() {
    return this.getRuleContext(0, TypeSpecifierSeqContext);
  }
  abstractDeclarator() {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_theTypeId;
  }
  enterRule(listener) {
    if (listener.enterTheTypeId) {
      listener.enterTheTypeId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTheTypeId) {
      listener.exitTheTypeId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTheTypeId) {
      return visitor.visitTheTypeId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AbstractDeclaratorContext extends ParserRuleContext {
  pointerAbstractDeclarator() {
    return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
  }
  parametersAndQualifiers() {
    return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
  }
  trailingReturnType() {
    return this.tryGetRuleContext(0, TrailingReturnTypeContext);
  }
  noPointerAbstractDeclarator() {
    return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
  }
  abstractPackDeclarator() {
    return this.tryGetRuleContext(0, AbstractPackDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_abstractDeclarator;
  }
  enterRule(listener) {
    if (listener.enterAbstractDeclarator) {
      listener.enterAbstractDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAbstractDeclarator) {
      listener.exitAbstractDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAbstractDeclarator) {
      return visitor.visitAbstractDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PointerAbstractDeclaratorContext extends ParserRuleContext {
  noPointerAbstractDeclarator() {
    return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
  }
  pointerOperator(i) {
    if (i === void 0) {
      return this.getRuleContexts(PointerOperatorContext);
    } else {
      return this.getRuleContext(i, PointerOperatorContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pointerAbstractDeclarator;
  }
  enterRule(listener) {
    if (listener.enterPointerAbstractDeclarator) {
      listener.enterPointerAbstractDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPointerAbstractDeclarator) {
      listener.exitPointerAbstractDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPointerAbstractDeclarator) {
      return visitor.visitPointerAbstractDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoPointerAbstractDeclaratorContext extends ParserRuleContext {
  noPointerAbstractDeclarator(i) {
    if (i === void 0) {
      return this.getRuleContexts(NoPointerAbstractDeclaratorContext);
    } else {
      return this.getRuleContext(i, NoPointerAbstractDeclaratorContext);
    }
  }
  parametersAndQualifiers() {
    return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  pointerAbstractDeclarator() {
    return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noPointerAbstractDeclarator;
  }
  enterRule(listener) {
    if (listener.enterNoPointerAbstractDeclarator) {
      listener.enterNoPointerAbstractDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoPointerAbstractDeclarator) {
      listener.exitNoPointerAbstractDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoPointerAbstractDeclarator) {
      return visitor.visitNoPointerAbstractDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AbstractPackDeclaratorContext extends ParserRuleContext {
  noPointerAbstractPackDeclarator() {
    return this.getRuleContext(0, NoPointerAbstractPackDeclaratorContext);
  }
  pointerOperator(i) {
    if (i === void 0) {
      return this.getRuleContexts(PointerOperatorContext);
    } else {
      return this.getRuleContext(i, PointerOperatorContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_abstractPackDeclarator;
  }
  enterRule(listener) {
    if (listener.enterAbstractPackDeclarator) {
      listener.enterAbstractPackDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAbstractPackDeclarator) {
      listener.exitAbstractPackDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAbstractPackDeclarator) {
      return visitor.visitAbstractPackDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoPointerAbstractPackDeclaratorContext extends ParserRuleContext {
  noPointerAbstractPackDeclarator() {
    return this.tryGetRuleContext(0, NoPointerAbstractPackDeclaratorContext);
  }
  parametersAndQualifiers() {
    return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noPointerAbstractPackDeclarator;
  }
  enterRule(listener) {
    if (listener.enterNoPointerAbstractPackDeclarator) {
      listener.enterNoPointerAbstractPackDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoPointerAbstractPackDeclarator) {
      listener.exitNoPointerAbstractPackDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoPointerAbstractPackDeclarator) {
      return visitor.visitNoPointerAbstractPackDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParameterDeclarationClauseContext extends ParserRuleContext {
  parameterDeclarationList() {
    return this.getRuleContext(0, ParameterDeclarationListContext);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  Comma() {
    return this.tryGetToken(CPP14Parser.Comma, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_parameterDeclarationClause;
  }
  enterRule(listener) {
    if (listener.enterParameterDeclarationClause) {
      listener.enterParameterDeclarationClause(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParameterDeclarationClause) {
      listener.exitParameterDeclarationClause(this);
    }
  }
  accept(visitor) {
    if (visitor.visitParameterDeclarationClause) {
      return visitor.visitParameterDeclarationClause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParameterDeclarationListContext extends ParserRuleContext {
  parameterDeclaration(i) {
    if (i === void 0) {
      return this.getRuleContexts(ParameterDeclarationContext);
    } else {
      return this.getRuleContext(i, ParameterDeclarationContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_parameterDeclarationList;
  }
  enterRule(listener) {
    if (listener.enterParameterDeclarationList) {
      listener.enterParameterDeclarationList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParameterDeclarationList) {
      listener.exitParameterDeclarationList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitParameterDeclarationList) {
      return visitor.visitParameterDeclarationList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParameterDeclarationContext extends ParserRuleContext {
  declSpecifierSeq() {
    return this.getRuleContext(0, DeclSpecifierSeqContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  declarator() {
    return this.tryGetRuleContext(0, DeclaratorContext);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  initializerClause() {
    return this.tryGetRuleContext(0, InitializerClauseContext);
  }
  abstractDeclarator() {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_parameterDeclaration;
  }
  enterRule(listener) {
    if (listener.enterParameterDeclaration) {
      listener.enterParameterDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParameterDeclaration) {
      listener.exitParameterDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitParameterDeclaration) {
      return visitor.visitParameterDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionDefinitionContext extends ParserRuleContext {
  declarator() {
    return this.getRuleContext(0, DeclaratorContext);
  }
  functionBody() {
    return this.getRuleContext(0, FunctionBodyContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  declSpecifierSeq() {
    return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
  }
  virtualSpecifierSeq() {
    return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_functionDefinition;
  }
  enterRule(listener) {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this);
    }
  }
  accept(visitor) {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionBodyContext extends ParserRuleContext {
  compoundStatement() {
    return this.tryGetRuleContext(0, CompoundStatementContext);
  }
  constructorInitializer() {
    return this.tryGetRuleContext(0, ConstructorInitializerContext);
  }
  functionTryBlock() {
    return this.tryGetRuleContext(0, FunctionTryBlockContext);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  Semi() {
    return this.tryGetToken(CPP14Parser.Semi, 0);
  }
  Default() {
    return this.tryGetToken(CPP14Parser.Default, 0);
  }
  Delete() {
    return this.tryGetToken(CPP14Parser.Delete, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_functionBody;
  }
  enterRule(listener) {
    if (listener.enterFunctionBody) {
      listener.enterFunctionBody(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFunctionBody) {
      listener.exitFunctionBody(this);
    }
  }
  accept(visitor) {
    if (visitor.visitFunctionBody) {
      return visitor.visitFunctionBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitializerContext extends ParserRuleContext {
  braceOrEqualInitializer() {
    return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  expressionList() {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initializer;
  }
  enterRule(listener) {
    if (listener.enterInitializer) {
      listener.enterInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitializer) {
      listener.exitInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BraceOrEqualInitializerContext extends ParserRuleContext {
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  initializerClause() {
    return this.tryGetRuleContext(0, InitializerClauseContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_braceOrEqualInitializer;
  }
  enterRule(listener) {
    if (listener.enterBraceOrEqualInitializer) {
      listener.enterBraceOrEqualInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBraceOrEqualInitializer) {
      listener.exitBraceOrEqualInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBraceOrEqualInitializer) {
      return visitor.visitBraceOrEqualInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitializerClauseContext extends ParserRuleContext {
  assignmentExpression() {
    return this.tryGetRuleContext(0, AssignmentExpressionContext);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initializerClause;
  }
  enterRule(listener) {
    if (listener.enterInitializerClause) {
      listener.enterInitializerClause(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitializerClause) {
      listener.exitInitializerClause(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitializerClause) {
      return visitor.visitInitializerClause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class InitializerListContext extends ParserRuleContext {
  initializerClause(i) {
    if (i === void 0) {
      return this.getRuleContexts(InitializerClauseContext);
    } else {
      return this.getRuleContext(i, InitializerClauseContext);
    }
  }
  Ellipsis(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Ellipsis);
    } else {
      return this.getToken(CPP14Parser.Ellipsis, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_initializerList;
  }
  enterRule(listener) {
    if (listener.enterInitializerList) {
      listener.enterInitializerList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInitializerList) {
      listener.exitInitializerList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitInitializerList) {
      return visitor.visitInitializerList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BracedInitListContext extends ParserRuleContext {
  LeftBrace() {
    return this.getToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.getToken(CPP14Parser.RightBrace, 0);
  }
  initializerList() {
    return this.tryGetRuleContext(0, InitializerListContext);
  }
  Comma() {
    return this.tryGetToken(CPP14Parser.Comma, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_bracedInitList;
  }
  enterRule(listener) {
    if (listener.enterBracedInitList) {
      listener.enterBracedInitList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBracedInitList) {
      listener.exitBracedInitList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBracedInitList) {
      return visitor.visitBracedInitList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassNameContext extends ParserRuleContext {
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_className;
  }
  enterRule(listener) {
    if (listener.enterClassName) {
      listener.enterClassName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassName) {
      listener.exitClassName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassName) {
      return visitor.visitClassName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassSpecifierContext extends ParserRuleContext {
  classHead() {
    return this.getRuleContext(0, ClassHeadContext);
  }
  LeftBrace() {
    return this.getToken(CPP14Parser.LeftBrace, 0);
  }
  RightBrace() {
    return this.getToken(CPP14Parser.RightBrace, 0);
  }
  memberSpecification() {
    return this.tryGetRuleContext(0, MemberSpecificationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classSpecifier;
  }
  enterRule(listener) {
    if (listener.enterClassSpecifier) {
      listener.enterClassSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassSpecifier) {
      listener.exitClassSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassSpecifier) {
      return visitor.visitClassSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassHeadContext extends ParserRuleContext {
  classKey() {
    return this.tryGetRuleContext(0, ClassKeyContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  classHeadName() {
    return this.tryGetRuleContext(0, ClassHeadNameContext);
  }
  baseClause() {
    return this.tryGetRuleContext(0, BaseClauseContext);
  }
  classVirtSpecifier() {
    return this.tryGetRuleContext(0, ClassVirtSpecifierContext);
  }
  Union() {
    return this.tryGetToken(CPP14Parser.Union, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classHead;
  }
  enterRule(listener) {
    if (listener.enterClassHead) {
      listener.enterClassHead(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassHead) {
      listener.exitClassHead(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassHead) {
      return visitor.visitClassHead(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassHeadNameContext extends ParserRuleContext {
  className() {
    return this.getRuleContext(0, ClassNameContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classHeadName;
  }
  enterRule(listener) {
    if (listener.enterClassHeadName) {
      listener.enterClassHeadName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassHeadName) {
      listener.exitClassHeadName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassHeadName) {
      return visitor.visitClassHeadName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassVirtSpecifierContext extends ParserRuleContext {
  Final() {
    return this.getToken(CPP14Parser.Final, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classVirtSpecifier;
  }
  enterRule(listener) {
    if (listener.enterClassVirtSpecifier) {
      listener.enterClassVirtSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassVirtSpecifier) {
      listener.exitClassVirtSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassVirtSpecifier) {
      return visitor.visitClassVirtSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassKeyContext extends ParserRuleContext {
  Class() {
    return this.tryGetToken(CPP14Parser.Class, 0);
  }
  Struct() {
    return this.tryGetToken(CPP14Parser.Struct, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classKey;
  }
  enterRule(listener) {
    if (listener.enterClassKey) {
      listener.enterClassKey(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassKey) {
      listener.exitClassKey(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassKey) {
      return visitor.visitClassKey(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemberSpecificationContext extends ParserRuleContext {
  memberdeclaration(i) {
    if (i === void 0) {
      return this.getRuleContexts(MemberdeclarationContext);
    } else {
      return this.getRuleContext(i, MemberdeclarationContext);
    }
  }
  accessSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(AccessSpecifierContext);
    } else {
      return this.getRuleContext(i, AccessSpecifierContext);
    }
  }
  Colon(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Colon);
    } else {
      return this.getToken(CPP14Parser.Colon, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memberSpecification;
  }
  enterRule(listener) {
    if (listener.enterMemberSpecification) {
      listener.enterMemberSpecification(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemberSpecification) {
      listener.exitMemberSpecification(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemberSpecification) {
      return visitor.visitMemberSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemberdeclarationContext extends ParserRuleContext {
  Semi() {
    return this.tryGetToken(CPP14Parser.Semi, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  declSpecifierSeq() {
    return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
  }
  memberDeclaratorList() {
    return this.tryGetRuleContext(0, MemberDeclaratorListContext);
  }
  functionDefinition() {
    return this.tryGetRuleContext(0, FunctionDefinitionContext);
  }
  usingDeclaration() {
    return this.tryGetRuleContext(0, UsingDeclarationContext);
  }
  staticAssertDeclaration() {
    return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
  }
  templateDeclaration() {
    return this.tryGetRuleContext(0, TemplateDeclarationContext);
  }
  aliasDeclaration() {
    return this.tryGetRuleContext(0, AliasDeclarationContext);
  }
  emptyDeclaration() {
    return this.tryGetRuleContext(0, EmptyDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memberdeclaration;
  }
  enterRule(listener) {
    if (listener.enterMemberdeclaration) {
      listener.enterMemberdeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemberdeclaration) {
      listener.exitMemberdeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemberdeclaration) {
      return visitor.visitMemberdeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemberDeclaratorListContext extends ParserRuleContext {
  memberDeclarator(i) {
    if (i === void 0) {
      return this.getRuleContexts(MemberDeclaratorContext);
    } else {
      return this.getRuleContext(i, MemberDeclaratorContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memberDeclaratorList;
  }
  enterRule(listener) {
    if (listener.enterMemberDeclaratorList) {
      listener.enterMemberDeclaratorList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemberDeclaratorList) {
      listener.exitMemberDeclaratorList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemberDeclaratorList) {
      return visitor.visitMemberDeclaratorList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemberDeclaratorContext extends ParserRuleContext {
  declarator() {
    return this.tryGetRuleContext(0, DeclaratorContext);
  }
  virtualSpecifierSeq() {
    return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
  }
  pureSpecifier() {
    return this.tryGetRuleContext(0, PureSpecifierContext);
  }
  braceOrEqualInitializer() {
    return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
  }
  Colon() {
    return this.tryGetToken(CPP14Parser.Colon, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memberDeclarator;
  }
  enterRule(listener) {
    if (listener.enterMemberDeclarator) {
      listener.enterMemberDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemberDeclarator) {
      listener.exitMemberDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemberDeclarator) {
      return visitor.visitMemberDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class VirtualSpecifierSeqContext extends ParserRuleContext {
  virtualSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(VirtualSpecifierContext);
    } else {
      return this.getRuleContext(i, VirtualSpecifierContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_virtualSpecifierSeq;
  }
  enterRule(listener) {
    if (listener.enterVirtualSpecifierSeq) {
      listener.enterVirtualSpecifierSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVirtualSpecifierSeq) {
      listener.exitVirtualSpecifierSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitVirtualSpecifierSeq) {
      return visitor.visitVirtualSpecifierSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class VirtualSpecifierContext extends ParserRuleContext {
  Override() {
    return this.tryGetToken(CPP14Parser.Override, 0);
  }
  Final() {
    return this.tryGetToken(CPP14Parser.Final, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_virtualSpecifier;
  }
  enterRule(listener) {
    if (listener.enterVirtualSpecifier) {
      listener.enterVirtualSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVirtualSpecifier) {
      listener.exitVirtualSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitVirtualSpecifier) {
      return visitor.visitVirtualSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class PureSpecifierContext extends ParserRuleContext {
  Assign() {
    return this.getToken(CPP14Parser.Assign, 0);
  }
  OctalLiteral() {
    return this.getToken(CPP14Parser.OctalLiteral, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_pureSpecifier;
  }
  enterRule(listener) {
    if (listener.enterPureSpecifier) {
      listener.enterPureSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPureSpecifier) {
      listener.exitPureSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitPureSpecifier) {
      return visitor.visitPureSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BaseClauseContext extends ParserRuleContext {
  Colon() {
    return this.getToken(CPP14Parser.Colon, 0);
  }
  baseSpecifierList() {
    return this.getRuleContext(0, BaseSpecifierListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_baseClause;
  }
  enterRule(listener) {
    if (listener.enterBaseClause) {
      listener.enterBaseClause(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBaseClause) {
      listener.exitBaseClause(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBaseClause) {
      return visitor.visitBaseClause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BaseSpecifierListContext extends ParserRuleContext {
  baseSpecifier(i) {
    if (i === void 0) {
      return this.getRuleContexts(BaseSpecifierContext);
    } else {
      return this.getRuleContext(i, BaseSpecifierContext);
    }
  }
  Ellipsis(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Ellipsis);
    } else {
      return this.getToken(CPP14Parser.Ellipsis, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_baseSpecifierList;
  }
  enterRule(listener) {
    if (listener.enterBaseSpecifierList) {
      listener.enterBaseSpecifierList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBaseSpecifierList) {
      listener.exitBaseSpecifierList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBaseSpecifierList) {
      return visitor.visitBaseSpecifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BaseSpecifierContext extends ParserRuleContext {
  baseTypeSpecifier() {
    return this.tryGetRuleContext(0, BaseTypeSpecifierContext);
  }
  Virtual() {
    return this.tryGetToken(CPP14Parser.Virtual, 0);
  }
  accessSpecifier() {
    return this.tryGetRuleContext(0, AccessSpecifierContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_baseSpecifier;
  }
  enterRule(listener) {
    if (listener.enterBaseSpecifier) {
      listener.enterBaseSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBaseSpecifier) {
      listener.exitBaseSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBaseSpecifier) {
      return visitor.visitBaseSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ClassOrDeclTypeContext extends ParserRuleContext {
  className() {
    return this.tryGetRuleContext(0, ClassNameContext);
  }
  nestedNameSpecifier() {
    return this.tryGetRuleContext(0, NestedNameSpecifierContext);
  }
  decltypeSpecifier() {
    return this.tryGetRuleContext(0, DecltypeSpecifierContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_classOrDeclType;
  }
  enterRule(listener) {
    if (listener.enterClassOrDeclType) {
      listener.enterClassOrDeclType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitClassOrDeclType) {
      listener.exitClassOrDeclType(this);
    }
  }
  accept(visitor) {
    if (visitor.visitClassOrDeclType) {
      return visitor.visitClassOrDeclType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class BaseTypeSpecifierContext extends ParserRuleContext {
  classOrDeclType() {
    return this.getRuleContext(0, ClassOrDeclTypeContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_baseTypeSpecifier;
  }
  enterRule(listener) {
    if (listener.enterBaseTypeSpecifier) {
      listener.enterBaseTypeSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitBaseTypeSpecifier) {
      listener.exitBaseTypeSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitBaseTypeSpecifier) {
      return visitor.visitBaseTypeSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AccessSpecifierContext extends ParserRuleContext {
  Private() {
    return this.tryGetToken(CPP14Parser.Private, 0);
  }
  Protected() {
    return this.tryGetToken(CPP14Parser.Protected, 0);
  }
  Public() {
    return this.tryGetToken(CPP14Parser.Public, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_accessSpecifier;
  }
  enterRule(listener) {
    if (listener.enterAccessSpecifier) {
      listener.enterAccessSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitAccessSpecifier) {
      listener.exitAccessSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitAccessSpecifier) {
      return visitor.visitAccessSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConversionFunctionIdContext extends ParserRuleContext {
  Operator() {
    return this.getToken(CPP14Parser.Operator, 0);
  }
  conversionTypeId() {
    return this.getRuleContext(0, ConversionTypeIdContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_conversionFunctionId;
  }
  enterRule(listener) {
    if (listener.enterConversionFunctionId) {
      listener.enterConversionFunctionId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConversionFunctionId) {
      listener.exitConversionFunctionId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConversionFunctionId) {
      return visitor.visitConversionFunctionId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConversionTypeIdContext extends ParserRuleContext {
  typeSpecifierSeq() {
    return this.getRuleContext(0, TypeSpecifierSeqContext);
  }
  conversionDeclarator() {
    return this.tryGetRuleContext(0, ConversionDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_conversionTypeId;
  }
  enterRule(listener) {
    if (listener.enterConversionTypeId) {
      listener.enterConversionTypeId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConversionTypeId) {
      listener.exitConversionTypeId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConversionTypeId) {
      return visitor.visitConversionTypeId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConversionDeclaratorContext extends ParserRuleContext {
  pointerOperator() {
    return this.getRuleContext(0, PointerOperatorContext);
  }
  conversionDeclarator() {
    return this.tryGetRuleContext(0, ConversionDeclaratorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_conversionDeclarator;
  }
  enterRule(listener) {
    if (listener.enterConversionDeclarator) {
      listener.enterConversionDeclarator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConversionDeclarator) {
      listener.exitConversionDeclarator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConversionDeclarator) {
      return visitor.visitConversionDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ConstructorInitializerContext extends ParserRuleContext {
  Colon() {
    return this.getToken(CPP14Parser.Colon, 0);
  }
  memInitializerList() {
    return this.getRuleContext(0, MemInitializerListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_constructorInitializer;
  }
  enterRule(listener) {
    if (listener.enterConstructorInitializer) {
      listener.enterConstructorInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitConstructorInitializer) {
      listener.exitConstructorInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitConstructorInitializer) {
      return visitor.visitConstructorInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemInitializerListContext extends ParserRuleContext {
  memInitializer(i) {
    if (i === void 0) {
      return this.getRuleContexts(MemInitializerContext);
    } else {
      return this.getRuleContext(i, MemInitializerContext);
    }
  }
  Ellipsis(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Ellipsis);
    } else {
      return this.getToken(CPP14Parser.Ellipsis, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memInitializerList;
  }
  enterRule(listener) {
    if (listener.enterMemInitializerList) {
      listener.enterMemInitializerList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemInitializerList) {
      listener.exitMemInitializerList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemInitializerList) {
      return visitor.visitMemInitializerList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MemInitializerContext extends ParserRuleContext {
  meminitializerid() {
    return this.getRuleContext(0, MeminitializeridContext);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  bracedInitList() {
    return this.tryGetRuleContext(0, BracedInitListContext);
  }
  expressionList() {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_memInitializer;
  }
  enterRule(listener) {
    if (listener.enterMemInitializer) {
      listener.enterMemInitializer(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMemInitializer) {
      listener.exitMemInitializer(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMemInitializer) {
      return visitor.visitMemInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class MeminitializeridContext extends ParserRuleContext {
  classOrDeclType() {
    return this.tryGetRuleContext(0, ClassOrDeclTypeContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_meminitializerid;
  }
  enterRule(listener) {
    if (listener.enterMeminitializerid) {
      listener.enterMeminitializerid(this);
    }
  }
  exitRule(listener) {
    if (listener.exitMeminitializerid) {
      listener.exitMeminitializerid(this);
    }
  }
  accept(visitor) {
    if (visitor.visitMeminitializerid) {
      return visitor.visitMeminitializerid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class OperatorFunctionIdContext extends ParserRuleContext {
  Operator() {
    return this.getToken(CPP14Parser.Operator, 0);
  }
  theOperator() {
    return this.getRuleContext(0, TheOperatorContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_operatorFunctionId;
  }
  enterRule(listener) {
    if (listener.enterOperatorFunctionId) {
      listener.enterOperatorFunctionId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOperatorFunctionId) {
      listener.exitOperatorFunctionId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitOperatorFunctionId) {
      return visitor.visitOperatorFunctionId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LiteralOperatorIdContext extends ParserRuleContext {
  Operator() {
    return this.getToken(CPP14Parser.Operator, 0);
  }
  StringLiteral() {
    return this.tryGetToken(CPP14Parser.StringLiteral, 0);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  UserDefinedStringLiteral() {
    return this.tryGetToken(CPP14Parser.UserDefinedStringLiteral, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_literalOperatorId;
  }
  enterRule(listener) {
    if (listener.enterLiteralOperatorId) {
      listener.enterLiteralOperatorId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLiteralOperatorId) {
      listener.exitLiteralOperatorId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLiteralOperatorId) {
      return visitor.visitLiteralOperatorId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateDeclarationContext extends ParserRuleContext {
  Template() {
    return this.getToken(CPP14Parser.Template, 0);
  }
  Less() {
    return this.getToken(CPP14Parser.Less, 0);
  }
  templateparameterList() {
    return this.getRuleContext(0, TemplateparameterListContext);
  }
  Greater() {
    return this.getToken(CPP14Parser.Greater, 0);
  }
  declaration() {
    return this.getRuleContext(0, DeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateDeclaration;
  }
  enterRule(listener) {
    if (listener.enterTemplateDeclaration) {
      listener.enterTemplateDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateDeclaration) {
      listener.exitTemplateDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateDeclaration) {
      return visitor.visitTemplateDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateparameterListContext extends ParserRuleContext {
  templateParameter(i) {
    if (i === void 0) {
      return this.getRuleContexts(TemplateParameterContext);
    } else {
      return this.getRuleContext(i, TemplateParameterContext);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateparameterList;
  }
  enterRule(listener) {
    if (listener.enterTemplateparameterList) {
      listener.enterTemplateparameterList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateparameterList) {
      listener.exitTemplateparameterList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateparameterList) {
      return visitor.visitTemplateparameterList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateParameterContext extends ParserRuleContext {
  typeParameter() {
    return this.tryGetRuleContext(0, TypeParameterContext);
  }
  parameterDeclaration() {
    return this.tryGetRuleContext(0, ParameterDeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateParameter;
  }
  enterRule(listener) {
    if (listener.enterTemplateParameter) {
      listener.enterTemplateParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateParameter) {
      listener.exitTemplateParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateParameter) {
      return visitor.visitTemplateParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeParameterContext extends ParserRuleContext {
  Class() {
    return this.tryGetToken(CPP14Parser.Class, 0);
  }
  Typename_() {
    return this.tryGetToken(CPP14Parser.Typename_, 0);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  Less() {
    return this.tryGetToken(CPP14Parser.Less, 0);
  }
  templateparameterList() {
    return this.tryGetRuleContext(0, TemplateparameterListContext);
  }
  Greater() {
    return this.tryGetToken(CPP14Parser.Greater, 0);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeParameter;
  }
  enterRule(listener) {
    if (listener.enterTypeParameter) {
      listener.enterTypeParameter(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeParameter) {
      listener.exitTypeParameter(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeParameter) {
      return visitor.visitTypeParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SimpleTemplateIdContext extends ParserRuleContext {
  templateName() {
    return this.getRuleContext(0, TemplateNameContext);
  }
  Less() {
    return this.getToken(CPP14Parser.Less, 0);
  }
  Greater() {
    return this.getToken(CPP14Parser.Greater, 0);
  }
  templateArgumentList() {
    return this.tryGetRuleContext(0, TemplateArgumentListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_simpleTemplateId;
  }
  enterRule(listener) {
    if (listener.enterSimpleTemplateId) {
      listener.enterSimpleTemplateId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleTemplateId) {
      listener.exitSimpleTemplateId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitSimpleTemplateId) {
      return visitor.visitSimpleTemplateId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateIdContext extends ParserRuleContext {
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  Less() {
    return this.tryGetToken(CPP14Parser.Less, 0);
  }
  Greater() {
    return this.tryGetToken(CPP14Parser.Greater, 0);
  }
  operatorFunctionId() {
    return this.tryGetRuleContext(0, OperatorFunctionIdContext);
  }
  literalOperatorId() {
    return this.tryGetRuleContext(0, LiteralOperatorIdContext);
  }
  templateArgumentList() {
    return this.tryGetRuleContext(0, TemplateArgumentListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateId;
  }
  enterRule(listener) {
    if (listener.enterTemplateId) {
      listener.enterTemplateId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateId) {
      listener.exitTemplateId(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateId) {
      return visitor.visitTemplateId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateNameContext extends ParserRuleContext {
  Identifier() {
    return this.getToken(CPP14Parser.Identifier, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateName;
  }
  enterRule(listener) {
    if (listener.enterTemplateName) {
      listener.enterTemplateName(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateName) {
      listener.exitTemplateName(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateName) {
      return visitor.visitTemplateName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateArgumentListContext extends ParserRuleContext {
  templateArgument(i) {
    if (i === void 0) {
      return this.getRuleContexts(TemplateArgumentContext);
    } else {
      return this.getRuleContext(i, TemplateArgumentContext);
    }
  }
  Ellipsis(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Ellipsis);
    } else {
      return this.getToken(CPP14Parser.Ellipsis, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateArgumentList;
  }
  enterRule(listener) {
    if (listener.enterTemplateArgumentList) {
      listener.enterTemplateArgumentList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateArgumentList) {
      listener.exitTemplateArgumentList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateArgumentList) {
      return visitor.visitTemplateArgumentList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TemplateArgumentContext extends ParserRuleContext {
  theTypeId() {
    return this.tryGetRuleContext(0, TheTypeIdContext);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  idExpression() {
    return this.tryGetRuleContext(0, IdExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_templateArgument;
  }
  enterRule(listener) {
    if (listener.enterTemplateArgument) {
      listener.enterTemplateArgument(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTemplateArgument) {
      listener.exitTemplateArgument(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTemplateArgument) {
      return visitor.visitTemplateArgument(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeNameSpecifierContext extends ParserRuleContext {
  Typename_() {
    return this.getToken(CPP14Parser.Typename_, 0);
  }
  nestedNameSpecifier() {
    return this.getRuleContext(0, NestedNameSpecifierContext);
  }
  Identifier() {
    return this.tryGetToken(CPP14Parser.Identifier, 0);
  }
  simpleTemplateId() {
    return this.tryGetRuleContext(0, SimpleTemplateIdContext);
  }
  Template() {
    return this.tryGetToken(CPP14Parser.Template, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeNameSpecifier;
  }
  enterRule(listener) {
    if (listener.enterTypeNameSpecifier) {
      listener.enterTypeNameSpecifier(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeNameSpecifier) {
      listener.exitTypeNameSpecifier(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeNameSpecifier) {
      return visitor.visitTypeNameSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExplicitInstantiationContext extends ParserRuleContext {
  Template() {
    return this.getToken(CPP14Parser.Template, 0);
  }
  declaration() {
    return this.getRuleContext(0, DeclarationContext);
  }
  Extern() {
    return this.tryGetToken(CPP14Parser.Extern, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_explicitInstantiation;
  }
  enterRule(listener) {
    if (listener.enterExplicitInstantiation) {
      listener.enterExplicitInstantiation(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExplicitInstantiation) {
      listener.exitExplicitInstantiation(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExplicitInstantiation) {
      return visitor.visitExplicitInstantiation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExplicitSpecializationContext extends ParserRuleContext {
  Template() {
    return this.getToken(CPP14Parser.Template, 0);
  }
  Less() {
    return this.getToken(CPP14Parser.Less, 0);
  }
  Greater() {
    return this.getToken(CPP14Parser.Greater, 0);
  }
  declaration() {
    return this.getRuleContext(0, DeclarationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_explicitSpecialization;
  }
  enterRule(listener) {
    if (listener.enterExplicitSpecialization) {
      listener.enterExplicitSpecialization(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExplicitSpecialization) {
      listener.exitExplicitSpecialization(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExplicitSpecialization) {
      return visitor.visitExplicitSpecialization(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TryBlockContext extends ParserRuleContext {
  Try() {
    return this.getToken(CPP14Parser.Try, 0);
  }
  compoundStatement() {
    return this.getRuleContext(0, CompoundStatementContext);
  }
  handlerSeq() {
    return this.getRuleContext(0, HandlerSeqContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_tryBlock;
  }
  enterRule(listener) {
    if (listener.enterTryBlock) {
      listener.enterTryBlock(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTryBlock) {
      listener.exitTryBlock(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTryBlock) {
      return visitor.visitTryBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionTryBlockContext extends ParserRuleContext {
  Try() {
    return this.getToken(CPP14Parser.Try, 0);
  }
  compoundStatement() {
    return this.getRuleContext(0, CompoundStatementContext);
  }
  handlerSeq() {
    return this.getRuleContext(0, HandlerSeqContext);
  }
  constructorInitializer() {
    return this.tryGetRuleContext(0, ConstructorInitializerContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_functionTryBlock;
  }
  enterRule(listener) {
    if (listener.enterFunctionTryBlock) {
      listener.enterFunctionTryBlock(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFunctionTryBlock) {
      listener.exitFunctionTryBlock(this);
    }
  }
  accept(visitor) {
    if (visitor.visitFunctionTryBlock) {
      return visitor.visitFunctionTryBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class HandlerSeqContext extends ParserRuleContext {
  handler(i) {
    if (i === void 0) {
      return this.getRuleContexts(HandlerContext);
    } else {
      return this.getRuleContext(i, HandlerContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_handlerSeq;
  }
  enterRule(listener) {
    if (listener.enterHandlerSeq) {
      listener.enterHandlerSeq(this);
    }
  }
  exitRule(listener) {
    if (listener.exitHandlerSeq) {
      listener.exitHandlerSeq(this);
    }
  }
  accept(visitor) {
    if (visitor.visitHandlerSeq) {
      return visitor.visitHandlerSeq(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class HandlerContext extends ParserRuleContext {
  Catch() {
    return this.getToken(CPP14Parser.Catch, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  exceptionDeclaration() {
    return this.getRuleContext(0, ExceptionDeclarationContext);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  compoundStatement() {
    return this.getRuleContext(0, CompoundStatementContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_handler;
  }
  enterRule(listener) {
    if (listener.enterHandler) {
      listener.enterHandler(this);
    }
  }
  exitRule(listener) {
    if (listener.exitHandler) {
      listener.exitHandler(this);
    }
  }
  accept(visitor) {
    if (visitor.visitHandler) {
      return visitor.visitHandler(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExceptionDeclarationContext extends ParserRuleContext {
  typeSpecifierSeq() {
    return this.tryGetRuleContext(0, TypeSpecifierSeqContext);
  }
  attributeSpecifierSeq() {
    return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
  }
  declarator() {
    return this.tryGetRuleContext(0, DeclaratorContext);
  }
  abstractDeclarator() {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext);
  }
  Ellipsis() {
    return this.tryGetToken(CPP14Parser.Ellipsis, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_exceptionDeclaration;
  }
  enterRule(listener) {
    if (listener.enterExceptionDeclaration) {
      listener.enterExceptionDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExceptionDeclaration) {
      listener.exitExceptionDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExceptionDeclaration) {
      return visitor.visitExceptionDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ThrowExpressionContext extends ParserRuleContext {
  Throw() {
    return this.getToken(CPP14Parser.Throw, 0);
  }
  assignmentExpression() {
    return this.tryGetRuleContext(0, AssignmentExpressionContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_throwExpression;
  }
  enterRule(listener) {
    if (listener.enterThrowExpression) {
      listener.enterThrowExpression(this);
    }
  }
  exitRule(listener) {
    if (listener.exitThrowExpression) {
      listener.exitThrowExpression(this);
    }
  }
  accept(visitor) {
    if (visitor.visitThrowExpression) {
      return visitor.visitThrowExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExceptionSpecificationContext extends ParserRuleContext {
  dynamicExceptionSpecification() {
    return this.tryGetRuleContext(0, DynamicExceptionSpecificationContext);
  }
  noeExceptSpecification() {
    return this.tryGetRuleContext(0, NoeExceptSpecificationContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_exceptionSpecification;
  }
  enterRule(listener) {
    if (listener.enterExceptionSpecification) {
      listener.enterExceptionSpecification(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExceptionSpecification) {
      listener.exitExceptionSpecification(this);
    }
  }
  accept(visitor) {
    if (visitor.visitExceptionSpecification) {
      return visitor.visitExceptionSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DynamicExceptionSpecificationContext extends ParserRuleContext {
  Throw() {
    return this.getToken(CPP14Parser.Throw, 0);
  }
  LeftParen() {
    return this.getToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.getToken(CPP14Parser.RightParen, 0);
  }
  typeIdList() {
    return this.tryGetRuleContext(0, TypeIdListContext);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_dynamicExceptionSpecification;
  }
  enterRule(listener) {
    if (listener.enterDynamicExceptionSpecification) {
      listener.enterDynamicExceptionSpecification(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDynamicExceptionSpecification) {
      listener.exitDynamicExceptionSpecification(this);
    }
  }
  accept(visitor) {
    if (visitor.visitDynamicExceptionSpecification) {
      return visitor.visitDynamicExceptionSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TypeIdListContext extends ParserRuleContext {
  theTypeId(i) {
    if (i === void 0) {
      return this.getRuleContexts(TheTypeIdContext);
    } else {
      return this.getRuleContext(i, TheTypeIdContext);
    }
  }
  Ellipsis(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Ellipsis);
    } else {
      return this.getToken(CPP14Parser.Ellipsis, i);
    }
  }
  Comma(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Comma);
    } else {
      return this.getToken(CPP14Parser.Comma, i);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_typeIdList;
  }
  enterRule(listener) {
    if (listener.enterTypeIdList) {
      listener.enterTypeIdList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeIdList) {
      listener.exitTypeIdList(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTypeIdList) {
      return visitor.visitTypeIdList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NoeExceptSpecificationContext extends ParserRuleContext {
  Noexcept() {
    return this.getToken(CPP14Parser.Noexcept, 0);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  constantExpression() {
    return this.tryGetRuleContext(0, ConstantExpressionContext);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_noeExceptSpecification;
  }
  enterRule(listener) {
    if (listener.enterNoeExceptSpecification) {
      listener.enterNoeExceptSpecification(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNoeExceptSpecification) {
      listener.exitNoeExceptSpecification(this);
    }
  }
  accept(visitor) {
    if (visitor.visitNoeExceptSpecification) {
      return visitor.visitNoeExceptSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class TheOperatorContext extends ParserRuleContext {
  New() {
    return this.tryGetToken(CPP14Parser.New, 0);
  }
  LeftBracket() {
    return this.tryGetToken(CPP14Parser.LeftBracket, 0);
  }
  RightBracket() {
    return this.tryGetToken(CPP14Parser.RightBracket, 0);
  }
  Delete() {
    return this.tryGetToken(CPP14Parser.Delete, 0);
  }
  Plus() {
    return this.tryGetToken(CPP14Parser.Plus, 0);
  }
  Minus() {
    return this.tryGetToken(CPP14Parser.Minus, 0);
  }
  Star() {
    return this.tryGetToken(CPP14Parser.Star, 0);
  }
  Div() {
    return this.tryGetToken(CPP14Parser.Div, 0);
  }
  Mod() {
    return this.tryGetToken(CPP14Parser.Mod, 0);
  }
  Caret() {
    return this.tryGetToken(CPP14Parser.Caret, 0);
  }
  And() {
    return this.tryGetToken(CPP14Parser.And, 0);
  }
  Or() {
    return this.tryGetToken(CPP14Parser.Or, 0);
  }
  Tilde() {
    return this.tryGetToken(CPP14Parser.Tilde, 0);
  }
  Not() {
    return this.tryGetToken(CPP14Parser.Not, 0);
  }
  Assign() {
    return this.tryGetToken(CPP14Parser.Assign, 0);
  }
  Greater(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Greater);
    } else {
      return this.getToken(CPP14Parser.Greater, i);
    }
  }
  Less(i) {
    if (i === void 0) {
      return this.getTokens(CPP14Parser.Less);
    } else {
      return this.getToken(CPP14Parser.Less, i);
    }
  }
  GreaterEqual() {
    return this.tryGetToken(CPP14Parser.GreaterEqual, 0);
  }
  PlusAssign() {
    return this.tryGetToken(CPP14Parser.PlusAssign, 0);
  }
  MinusAssign() {
    return this.tryGetToken(CPP14Parser.MinusAssign, 0);
  }
  StarAssign() {
    return this.tryGetToken(CPP14Parser.StarAssign, 0);
  }
  ModAssign() {
    return this.tryGetToken(CPP14Parser.ModAssign, 0);
  }
  XorAssign() {
    return this.tryGetToken(CPP14Parser.XorAssign, 0);
  }
  AndAssign() {
    return this.tryGetToken(CPP14Parser.AndAssign, 0);
  }
  OrAssign() {
    return this.tryGetToken(CPP14Parser.OrAssign, 0);
  }
  RightShiftAssign() {
    return this.tryGetToken(CPP14Parser.RightShiftAssign, 0);
  }
  LeftShiftAssign() {
    return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0);
  }
  Equal() {
    return this.tryGetToken(CPP14Parser.Equal, 0);
  }
  NotEqual() {
    return this.tryGetToken(CPP14Parser.NotEqual, 0);
  }
  LessEqual() {
    return this.tryGetToken(CPP14Parser.LessEqual, 0);
  }
  AndAnd() {
    return this.tryGetToken(CPP14Parser.AndAnd, 0);
  }
  OrOr() {
    return this.tryGetToken(CPP14Parser.OrOr, 0);
  }
  PlusPlus() {
    return this.tryGetToken(CPP14Parser.PlusPlus, 0);
  }
  MinusMinus() {
    return this.tryGetToken(CPP14Parser.MinusMinus, 0);
  }
  Comma() {
    return this.tryGetToken(CPP14Parser.Comma, 0);
  }
  ArrowStar() {
    return this.tryGetToken(CPP14Parser.ArrowStar, 0);
  }
  Arrow() {
    return this.tryGetToken(CPP14Parser.Arrow, 0);
  }
  LeftParen() {
    return this.tryGetToken(CPP14Parser.LeftParen, 0);
  }
  RightParen() {
    return this.tryGetToken(CPP14Parser.RightParen, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_theOperator;
  }
  enterRule(listener) {
    if (listener.enterTheOperator) {
      listener.enterTheOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTheOperator) {
      listener.exitTheOperator(this);
    }
  }
  accept(visitor) {
    if (visitor.visitTheOperator) {
      return visitor.visitTheOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LiteralContext extends ParserRuleContext {
  IntegerLiteral() {
    return this.tryGetToken(CPP14Parser.IntegerLiteral, 0);
  }
  CharacterLiteral() {
    return this.tryGetToken(CPP14Parser.CharacterLiteral, 0);
  }
  FloatingLiteral() {
    let term = this.tryGetToken(CPP14Parser.FloatingLiteral, 0);
    let text = term?.text ?? "";
    if (text[text.length - 1] === "f")
      text = text.substr(0, text.length - 1);
    if (text[text.length - 1] === ".")
      text = text.substr(0, text.length - 1);
    return term;
  }
  StringLiteral() {
    return this.tryGetToken(CPP14Parser.StringLiteral, 0);
  }
  BooleanLiteral() {
    return this.tryGetToken(CPP14Parser.BooleanLiteral, 0);
  }
  PointerLiteral() {
    return this.tryGetToken(CPP14Parser.PointerLiteral, 0);
  }
  UserDefinedLiteral() {
    return this.tryGetToken(CPP14Parser.UserDefinedLiteral, 0);
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  get ruleIndex() {
    return CPP14Parser.RULE_literal;
  }
  enterRule(listener) {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor.visitLiteral) {
      return visitor.visitLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
