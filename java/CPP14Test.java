/***
 * Excerpted from "The Definitive ANTLR 4 Reference",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tpantlr2 for more book information.
***/
import org.antlr.v4.gui.Trees;
import org.antlr.v4.runtime.*;
import org.antlr.v4.gui.Trees.*;
//import CPP14Lexer
//import CPP14Parser.*;
//import CPP14ParserListener

public class CPP14Test {
	public static void main(String[] args) throws Exception {
		ANTLRInputStream input = new ANTLRFileStream(args[0]);
		CPP14Lexer lexer = new CPP14Lexer(input);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		CPP14Parser parser = new CPP14Parser(tokens);
		parser.setBuildParseTree(true);
		CPP14Parser.TranslationUnitContext tree = parser.translationUnit();

		//tree.inspect(parser); // show in gui

		Trees.inspect(tree, parser);
		//tree.save(parser, "/tmp/R.ps"); // Generate postscript
		//System.out.println(tree.toStringTree(parser));
	}
}
