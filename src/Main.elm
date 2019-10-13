module Main exposing (main)

import Accessibility.Styled as Html exposing (Html)
import Accessibility.Styled.Role exposing (presentation)
import Browser
import Css exposing (..)
import Css.Global exposing (body, everything, global)
import Html.Styled.Attributes exposing (css, href, src)
import Url exposing (Url)


main : Program () (Model Msg) Msg
main =
    Browser.document
        { init = init
        , view =
            \model ->
                { title = model.title
                , body = List.map Html.toUnstyled <| view model
                }
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model msg =
    { title : String
    , image : Image
    , content : List (Html msg)
    , theme : Theme
    }


type alias Theme =
    { primaryColor : Color
    , secondaryColor : Color
    , textColor : Color
    , backgroundColorDark : Color
    , backgroundColorLight : Color
    }


type alias Link =
    { src : String
    , text : String
    }


type alias Image =
    { src : String
    , description : String
    , width : Float
    , height : Float
    }


init : () -> ( Model msg, Cmd Msg )
init _ =
    let
        title =
            "d pham"

        image =
            { src = "https://www.gravatar.com/avatar/fe67e5a476d623d62745556431f77f9c?s=200"
            , description = "Photo of D"
            , width = 120
            , height = 120
            }

        content =
            [ viewParagraph
                [ Html.text "Hello! I'm d. I love to create things that make people's lives more pleasant"
                , Html.text "—often through code, arts and crafts, or music. "
                , Html.text "Education, mental health, diversity and inclusion are particularly important to me."
                ]
            , viewParagraph
                [ Html.text "I write software for students and teachers at "
                , viewLink theme links.noRedInk
                , Html.text ", previously worked at "
                , viewLink theme links.shopify
                , Html.text ", studied computer science and biology at "
                , viewLink theme links.mcgill
                , Html.text ", and attended the "
                , viewLink theme links.recurseCenter
                , Html.text "."
                ]
            , viewParagraph
                [ Html.text "Learning, travelling, writing, drawing, singing, playing board games, and solving puzzles are among my favourite activities. "
                , Html.text "I appreciate local food, thought-provoking media, and empathetic people."
                ]
            , viewParagraph
                [ Html.text "Please feel free to say "
                , viewLink theme links.hello
                , Html.text " if you'd like to chat!"
                ]
            ]

        links =
            { noRedInk = { src = "https://noredink.com", text = "NoRedInk" }
            , shopify = { src = "https://shopify.ca", text = "Shopify" }
            , mcgill = { src = "https://mcgill.ca", text = "McGill" }
            , recurseCenter = { src = "https://recurse.com", text = "Recurse Center" }
            , hello = { src = "mailto:danielle.pham@mail.mcgill.ca?subject=Hello", text = "hello" }
            }

        theme =
            { primaryColor = hex "940060"
            , secondaryColor = hex "00b4b4"
            , textColor = hex "445"
            , backgroundColorDark = hex "445"
            , backgroundColorLight = hex "eee"
            }
    in
    ( { title = title
      , image = image
      , content = content
      , theme = theme
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model msg -> ( Model msg, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model msg -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model msg -> List (Html msg)
view model =
    [ Html.div
        [ css
            [ displayFlex
            , flexDirection row
            , justifyContent center
            , flexFlow2 wrap row
            ]
        ]
        [ Html.div
            [ presentation
            , css [ margin2 (px 40) (px 20) ]
            ]
            [ viewImage model.image ]
        , Html.main_
            [ css <| mainStyles model.theme ]
            [ viewHeader model
            , Html.section
                [ css [ padding2 (px 10) (px 30) ] ]
                model.content
            ]
        ]
    , global
        [ everything resetStyles
        , body <| bodyStyles model.theme
        ]
    ]


viewHeader : { a | title : String, theme : Theme } -> Html msg
viewHeader { title, theme } =
    Html.header
        [ css
            [ padding3 (px 20) (px 30) (px 10)
            , marginBottom <| px 10
            ]
        ]
        [ Html.h1
            [ css
                [ paddingBottom <| px 10
                , borderBottom3 (px 2) solid theme.primaryColor
                , color theme.primaryColor
                ]
            ]
            [ Html.text title ]
        ]


viewParagraph : List (Html msg) -> Html msg
viewParagraph content =
    Html.p
        [ css
            [ textIndent <| px 20
            , marginBottom <| px 20
            ]
        ]
        content


viewLink : Theme -> Link -> Html msg
viewLink theme link =
    Html.a
        [ href link.src
        , css
            [ color theme.primaryColor
            , hover [ color theme.secondaryColor ]
            ]
        ]
        [ Html.text link.text ]


viewImage : Image -> Html msg
viewImage image =
    Html.img image.description
        [ src image.src
        , css
            [ width <| px image.width
            , height <| px image.height
            , borderRadius <| pct 50
            ]
        ]


resetStyles : List Style
resetStyles =
    [ margin zero
    , padding zero
    , boxSizing borderBox
    ]


bodyStyles : Theme -> List Style
bodyStyles theme =
    [ backgroundColor theme.backgroundColorDark
    , color theme.backgroundColorLight
    , fontFamily monospace
    , fontSize <| px 16
    , fontWeight <| int 200
    , lineHeight <| px 40
    ]


mainStyles : Theme -> List Style
mainStyles theme =
    let
        linearGradientValue =
            "transparent 45%, #f7f7f7 45% 55%, transparent 55%"

        linearGradientValues =
            "linear-gradient("
                ++ linearGradientValue
                ++ "),"
                ++ "linear-gradient(to right, "
                ++ linearGradientValue
                ++ ")"
    in
    [ margin <| px 40
    , minWidth <| px 320
    , maxWidth <| px 640
    , minHeight <| px 760
    , property "background" linearGradientValues
    , backgroundSize2 (px 20) (px 20)
    , backgroundColor theme.backgroundColorLight
    , color theme.textColor
    ]
